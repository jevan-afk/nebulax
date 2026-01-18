import { promises as fs } from "fs";
import path from "path";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  consent: boolean;
  createdAt: string;
  status: "new" | "replied";
  reply?: {
    message: string;
    repliedAt: string;
    admin: string;
  };
}

const baseDir = process.env.VERCEL ? "/tmp/nebulax-data" : process.cwd();
const dataDir = path.join(baseDir, ".data");
const dataFile = path.join(dataDir, "inquiries.json");

async function ensureDataFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, JSON.stringify([]));
  }
}

async function readAll(): Promise<Inquiry[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(raw) as Inquiry[];
  } catch {
    return [];
  }
}

async function writeAll(inquiries: Inquiry[]) {
  await ensureDataFile();
  await fs.writeFile(dataFile, JSON.stringify(inquiries, null, 2));
}

export async function listInquiries() {
  const inquiries = await readAll();
  return inquiries.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function createInquiry(data: Omit<Inquiry, "id" | "createdAt" | "status">) {
  const inquiries = await readAll();
  const inquiry: Inquiry = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new"
  };
  inquiries.unshift(inquiry);
  await writeAll(inquiries);
  return inquiry;
}

export async function replyToInquiry(id: string, replyMessage: string, admin: string) {
  const inquiries = await readAll();
  const index = inquiries.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const updated: Inquiry = {
    ...inquiries[index],
    status: "replied",
    reply: {
      message: replyMessage,
      repliedAt: new Date().toISOString(),
      admin
    }
  };
  inquiries[index] = updated;
  await writeAll(inquiries);
  return updated;
}

import { promises as fs } from "fs";
import path from "path";

export interface Notice {
  id: string;
  slug: string;
  title: string;
  tag: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  createdAt: string;
}

const baseDir = process.env.VERCEL ? "/tmp/nebulax-data" : process.cwd();
const dataDir = path.join(baseDir, ".data");
const dataFile = path.join(dataDir, "notices.json");

const seedNotices: Omit<Notice, "id" | "createdAt">[] = [
  {
    slug: "cloud-operations-guide",
    title: "클라우드 서비스 운영 가이드 안내",
    tag: "공지",
    date: "2024.10.18",
    author: "NebulaX 운영팀",
    summary: "클라우드 서비스 운영 기준과 주요 문의 절차를 안내합니다.",
    content:
      "NebulaX 클라우드 운영 가이드를 업데이트했습니다. 모니터링 기준, 장애 대응 프로세스, 확장 요청 방법을 포함하고 있으니 참고 부탁드립니다."
  },
  {
    slug: "idc-maintenance-schedule",
    title: "IDC 정기 점검 일정 안내",
    tag: "안내",
    date: "2024.09.30",
    author: "NebulaX 인프라팀",
    summary: "IDC 정기 점검 일정과 영향 범위를 공유드립니다.",
    content:
      "안정적인 서비스 제공을 위해 IDC 정기 점검을 진행합니다. 점검 기간 중 일부 서비스 접근이 제한될 수 있으니 사전 확인 부탁드립니다."
  },
  {
    slug: "support-channel-update",
    title: "기술 지원 채널 업데이트",
    tag: "업데이트",
    date: "2024.09.12",
    author: "NebulaX 고객지원",
    summary: "24/7 기술 지원 대응 채널이 확장되었습니다.",
    content:
      "기존 이메일/전화 외에 전용 문의 채널을 추가했습니다. 긴급 대응이 필요한 경우 대표번호로 연락해주세요."
  }
];

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function uniqueSlug(base: string, existing: Set<string>) {
  let slug = base || `notice-${Date.now()}`;
  let counter = 1;
  while (existing.has(slug)) {
    slug = `${base}-${counter}`;
    counter += 1;
  }
  return slug;
}

async function ensureDataFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    const seeded = seedNotices.map((notice) => ({
      ...notice,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    }));
    await fs.writeFile(dataFile, JSON.stringify(seeded, null, 2));
  }
}

async function readAll(): Promise<Notice[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(raw) as Notice[];
  } catch {
    return [];
  }
}

async function writeAll(notices: Notice[]) {
  await ensureDataFile();
  await fs.writeFile(dataFile, JSON.stringify(notices, null, 2));
}

export async function listNotices() {
  const notices = await readAll();
  return notices.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getNoticeBySlug(slug: string) {
  const notices = await readAll();
  return notices.find((notice) => notice.slug === slug) ?? null;
}

export async function createNotice(data: Omit<Notice, "id" | "createdAt" | "slug">) {
  const notices = await readAll();
  const existing = new Set(notices.map((notice) => notice.slug));
  const slug = uniqueSlug(slugify(data.title), existing);
  const notice: Notice = {
    ...data,
    slug,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
  notices.unshift(notice);
  await writeAll(notices);
  return notice;
}

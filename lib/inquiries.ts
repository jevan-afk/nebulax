export type InquiryStatus = "pending" | "answered";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  consent: boolean;
  status: InquiryStatus;
  createdAt: string;
  response?: string;
  responder?: string;
  respondedAt?: string;
}

declare global {
  var __inquiries: Inquiry[] | undefined;
}

const seedInquiries: Inquiry[] = [];

export const inquiryStore: Inquiry[] = globalThis.__inquiries ?? seedInquiries;

if (!globalThis.__inquiries) {
  globalThis.__inquiries = inquiryStore;
}

export const createInquiry = (data: Omit<Inquiry, "id" | "status" | "createdAt">) => {
  const newInquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    status: "pending",
    createdAt: new Date().toISOString(),
    ...data
  };

  inquiryStore.unshift(newInquiry);
  return newInquiry;
};

export const listInquiries = () => inquiryStore;

export const findInquiry = (id: string) => inquiryStore.find((item) => item.id === id);

export const respondToInquiry = (id: string, response: string, responder: string) => {
  const inquiry = findInquiry(id);
  if (!inquiry) {
    return null;
  }

  inquiry.status = "answered";
  inquiry.response = response;
  inquiry.responder = responder;
  inquiry.respondedAt = new Date().toISOString();
  return inquiry;
};

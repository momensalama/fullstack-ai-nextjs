export interface Entry {
  analysis: Analysis | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
}

export type QaEntry = Pick<Entry, "id" | "content" | "createdAt">;

interface Analysis {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entryId: string;
  mood: string;
  summary: string;
  color: string;
  negative: boolean;
  subject: string;
  sentimentScore: number;
}

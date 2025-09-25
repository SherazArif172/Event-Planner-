import { z } from 'zod';


export const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  category: z.enum(['work', 'personal', 'others'], {
    errorMap: () => ({ message: "Category must be work, personal, or others" })
  }),
  description: z.string().optional()
});



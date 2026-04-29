import { z } from 'zod';

export const ObjectIdString = z
  .string()
  .regex(/^[a-f\d]{24}$/i, 'Invalid ObjectId format');

export const PhoneNumber = z
  .string()
  .regex(/^[6-9]\d{9}$/, 'Must be a valid 10-digit Indian mobile number');

export const ISODateString = z
  .string()
  .datetime({ message: 'Must be ISO 8601 datetime string' });

export const MonthString = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Must be YYYY-MM format');

export const PaginationQuery = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20)
});

export function ApiResponseSchema<T extends z.ZodTypeAny>(dataSchema: T) {
  return z.object({
    success: z.boolean(),
    data: dataSchema.nullable(),
    error: z
      .object({
        code: z.string(),
        message: z.string(),
        details: z.array(z.object({ field: z.string(), message: z.string() })).optional()
      })
      .nullable(),
    meta: z.object({
      requestId: z.string(),
      timestamp: z.string()
    })
  });
}

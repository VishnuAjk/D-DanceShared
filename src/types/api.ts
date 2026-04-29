import { z } from 'zod';
import { PaginationQuery } from '../schemas/common';

export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: {
    code: string;
    message: string;
    details?: Array<{ field: string; message: string }>;
  } | null;
  meta: {
    requestId: string;
    timestamp: string;
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
};

export type PaginatedResponse<T> = ApiResponse<T[]>;
export type Pagination = z.infer<typeof PaginationQuery>;

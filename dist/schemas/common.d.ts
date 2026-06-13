import { z } from 'zod';
export declare const ObjectIdString: z.ZodString;
export declare const PhoneNumber: z.ZodString;
export declare const ISODateString: z.ZodString;
export declare const MonthString: z.ZodString;
export declare const PaginationQuery: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare function ApiResponseSchema<T extends z.ZodTypeAny>(dataSchema: T): z.ZodObject<{
    success: z.ZodBoolean;
    data: z.ZodNullable<T>;
    error: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            field: string;
        }, {
            message: string;
            field: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        code: string;
        details?: {
            message: string;
            field: string;
        }[] | undefined;
    }, {
        message: string;
        code: string;
        details?: {
            message: string;
            field: string;
        }[] | undefined;
    }>>;
    meta: z.ZodObject<{
        requestId: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        requestId: string;
        timestamp: string;
    }, {
        requestId: string;
        timestamp: string;
    }>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    success: z.ZodBoolean;
    data: z.ZodNullable<T>;
    error: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            field: string;
        }, {
            message: string;
            field: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        code: string;
        details?: {
            message: string;
            field: string;
        }[] | undefined;
    }, {
        message: string;
        code: string;
        details?: {
            message: string;
            field: string;
        }[] | undefined;
    }>>;
    meta: z.ZodObject<{
        requestId: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        requestId: string;
        timestamp: string;
    }, {
        requestId: string;
        timestamp: string;
    }>;
}>, any> extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never, z.baseObjectInputType<{
    success: z.ZodBoolean;
    data: z.ZodNullable<T>;
    error: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            field: string;
        }, {
            message: string;
            field: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        code: string;
        details?: {
            message: string;
            field: string;
        }[] | undefined;
    }, {
        message: string;
        code: string;
        details?: {
            message: string;
            field: string;
        }[] | undefined;
    }>>;
    meta: z.ZodObject<{
        requestId: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        requestId: string;
        timestamp: string;
    }, {
        requestId: string;
        timestamp: string;
    }>;
}> extends infer T_2 ? { [k_1 in keyof T_2]: T_2[k_1]; } : never>;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQuery = exports.MonthString = exports.ISODateString = exports.PhoneNumber = exports.ObjectIdString = void 0;
exports.ApiResponseSchema = ApiResponseSchema;
const zod_1 = require("zod");
exports.ObjectIdString = zod_1.z
    .string()
    .regex(/^[a-f\d]{24}$/i, 'Invalid ObjectId format');
exports.PhoneNumber = zod_1.z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Must be a valid 10-digit Indian mobile number');
exports.ISODateString = zod_1.z
    .string()
    .datetime({ message: 'Must be ISO 8601 datetime string' });
exports.MonthString = zod_1.z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Must be YYYY-MM format');
exports.PaginationQuery = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20)
});
function ApiResponseSchema(dataSchema) {
    return zod_1.z.object({
        success: zod_1.z.boolean(),
        data: dataSchema.nullable(),
        error: zod_1.z
            .object({
            code: zod_1.z.string(),
            message: zod_1.z.string(),
            details: zod_1.z.array(zod_1.z.object({ field: zod_1.z.string(), message: zod_1.z.string() })).optional()
        })
            .nullable(),
        meta: zod_1.z.object({
            requestId: zod_1.z.string(),
            timestamp: zod_1.z.string()
        })
    });
}

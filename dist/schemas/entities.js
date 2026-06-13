"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeLedgerSchema = exports.EnrollmentSchema = exports.StudentProfileSchema = exports.BatchSchema = exports.BatchScheduleSchema = exports.AgeGroupSchema = exports.LevelSchema = exports.CourseSchema = exports.BranchSchema = exports.UserSchema = exports.Gender = exports.DayOfWeek = exports.UserStatus = exports.PaymentType = exports.PaymentStatus = exports.FeeStatus = exports.AttendanceStatus = exports.EnrollmentStatus = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.EnrollmentStatus = zod_1.z.enum(['PENDING', 'APPROVED', 'ACTIVE', 'SUSPENDED', 'CANCELLED']);
exports.AttendanceStatus = zod_1.z.enum(['PRESENT', 'ABSENT', 'LATE']);
exports.FeeStatus = zod_1.z.enum(['DUE', 'PAID', 'OVERDUE', 'WAIVED']);
exports.PaymentStatus = zod_1.z.enum(['CREATED', 'CAPTURED', 'FAILED', 'REFUNDED']);
exports.PaymentType = zod_1.z.enum(['one_time', 'subscription']);
exports.UserStatus = zod_1.z.enum(['active', 'inactive', 'suspended']);
exports.DayOfWeek = zod_1.z.enum(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']);
exports.Gender = zod_1.z.enum(['male', 'female', 'other']);
exports.UserSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    phone: common_1.PhoneNumber,
    name: zod_1.z.string().min(2).max(100),
    role: zod_1.z.enum(['super_admin', 'branch_admin', 'instructor', 'customer', 'parent']),
    branchIds: zod_1.z.array(common_1.ObjectIdString),
    status: exports.UserStatus,
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string()
});
exports.BranchSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    name: zod_1.z.string().min(2).max(100),
    address: zod_1.z.string(),
    city: zod_1.z.string().optional(),
    phone: common_1.PhoneNumber.optional(),
    isActive: zod_1.z.boolean()
});
exports.CourseSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean()
});
exports.LevelSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    name: zod_1.z.string(),
    courseId: common_1.ObjectIdString,
    order: zod_1.z.number().int()
});
exports.AgeGroupSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    label: zod_1.z.string(),
    minAge: zod_1.z.number().optional(),
    maxAge: zod_1.z.number().optional()
});
exports.BatchScheduleSchema = zod_1.z.object({
    days: zod_1.z.array(exports.DayOfWeek),
    startTime: zod_1.z.string().regex(/^\d{2}:\d{2}$/),
    endTime: zod_1.z.string().regex(/^\d{2}:\d{2}$/)
});
exports.BatchSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    name: zod_1.z.string(),
    branchId: common_1.ObjectIdString,
    courseId: common_1.ObjectIdString,
    levelId: common_1.ObjectIdString.optional(),
    ageGroupId: common_1.ObjectIdString.optional(),
    instructorIds: zod_1.z.array(common_1.ObjectIdString),
    schedule: exports.BatchScheduleSchema,
    capacity: zod_1.z.number().int().positive(),
    monthlyFee: zod_1.z.number().positive(),
    isActive: zod_1.z.boolean()
});
exports.StudentProfileSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    name: zod_1.z.string().min(2).max(100),
    dob: zod_1.z.string(),
    gender: exports.Gender,
    customerId: common_1.ObjectIdString,
    relationshipToCustomer: zod_1.z.enum(['self', 'child', 'family_member']).default('child'),
    photo: zod_1.z.string().url().optional()
});
exports.EnrollmentSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    studentProfileId: common_1.ObjectIdString,
    batchId: common_1.ObjectIdString,
    branchId: common_1.ObjectIdString,
    status: exports.EnrollmentStatus,
    approvedBy: common_1.ObjectIdString.optional(),
    approvedAt: zod_1.z.string().optional(),
    joinDate: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
    createdAt: zod_1.z.string()
});
exports.FeeLedgerSchema = zod_1.z.object({
    _id: common_1.ObjectIdString,
    enrollmentId: common_1.ObjectIdString,
    studentProfileId: common_1.ObjectIdString,
    branchId: common_1.ObjectIdString,
    month: common_1.MonthString,
    amount: zod_1.z.number().positive(),
    discount: zod_1.z.number().min(0).default(0),
    finalAmount: zod_1.z.number().positive(),
    status: exports.FeeStatus,
    paidAt: zod_1.z.string().optional(),
    dueDate: zod_1.z.string()
});

import { z } from 'zod';
import { MonthString, ObjectIdString, PhoneNumber } from './common';

export const EnrollmentStatus = z.enum(['PENDING', 'APPROVED', 'ACTIVE', 'SUSPENDED', 'CANCELLED']);
export const AttendanceStatus = z.enum(['PRESENT', 'ABSENT', 'LATE']);
export const FeeStatus = z.enum(['DUE', 'PAID', 'OVERDUE', 'WAIVED']);
export const PaymentStatus = z.enum(['CREATED', 'CAPTURED', 'FAILED', 'REFUNDED']);
export const PaymentType = z.enum(['one_time', 'subscription']);
export const UserStatus = z.enum(['active', 'inactive', 'suspended']);
export const DayOfWeek = z.enum(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']);
export const Gender = z.enum(['male', 'female', 'other']);

export const UserSchema = z.object({
  _id: ObjectIdString,
  phone: PhoneNumber,
  name: z.string().min(2).max(100),
  role: z.enum(['super_admin', 'branch_admin', 'instructor', 'customer', 'parent']),
  branchIds: z.array(ObjectIdString),
  status: UserStatus,
  createdAt: z.string(),
  updatedAt: z.string()
});

export const BranchSchema = z.object({
  _id: ObjectIdString,
  name: z.string().min(2).max(100),
  address: z.string(),
  city: z.string().optional(),
  phone: PhoneNumber.optional(),
  isActive: z.boolean()
});

export const CourseSchema = z.object({
  _id: ObjectIdString,
  name: z.string(),
  description: z.string().optional(),
  isActive: z.boolean()
});

export const LevelSchema = z.object({
  _id: ObjectIdString,
  name: z.string(),
  courseId: ObjectIdString,
  order: z.number().int()
});

export const AgeGroupSchema = z.object({
  _id: ObjectIdString,
  label: z.string(),
  minAge: z.number().optional(),
  maxAge: z.number().optional()
});

export const BatchScheduleSchema = z.object({
  days: z.array(DayOfWeek),
  startTime: z.string().regex(/^\d{2}:\d{2}$/),
  endTime: z.string().regex(/^\d{2}:\d{2}$/)
});

export const BatchSchema = z.object({
  _id: ObjectIdString,
  name: z.string(),
  branchId: ObjectIdString,
  courseId: ObjectIdString,
  levelId: ObjectIdString.optional(),
  ageGroupId: ObjectIdString.optional(),
  instructorIds: z.array(ObjectIdString),
  schedule: BatchScheduleSchema,
  capacity: z.number().int().positive(),
  monthlyFee: z.number().positive(),
  isActive: z.boolean()
});

export const StudentProfileSchema = z.object({
  _id: ObjectIdString,
  name: z.string().min(2).max(100),
  dob: z.string(),
  gender: Gender,
  customerId: ObjectIdString,
  relationshipToCustomer: z.enum(['self', 'child', 'family_member']).default('child'),
  photo: z.string().url().optional()
});

export const EnrollmentSchema = z.object({
  _id: ObjectIdString,
  studentProfileId: ObjectIdString,
  batchId: ObjectIdString,
  branchId: ObjectIdString,
  status: EnrollmentStatus,
  approvedBy: ObjectIdString.optional(),
  approvedAt: z.string().optional(),
  joinDate: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.string()
});

export const FeeLedgerSchema = z.object({
  _id: ObjectIdString,
  enrollmentId: ObjectIdString,
  studentProfileId: ObjectIdString,
  branchId: ObjectIdString,
  month: MonthString,
  amount: z.number().positive(),
  discount: z.number().min(0).default(0),
  finalAmount: z.number().positive(),
  status: FeeStatus,
  paidAt: z.string().optional(),
  dueDate: z.string()
});

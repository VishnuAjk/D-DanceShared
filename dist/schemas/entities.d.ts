import { z } from 'zod';
export declare const EnrollmentStatus: z.ZodEnum<["PENDING", "APPROVED", "ACTIVE", "SUSPENDED", "CANCELLED"]>;
export declare const AttendanceStatus: z.ZodEnum<["PRESENT", "ABSENT", "LATE"]>;
export declare const FeeStatus: z.ZodEnum<["DUE", "PAID", "OVERDUE", "WAIVED"]>;
export declare const PaymentStatus: z.ZodEnum<["CREATED", "CAPTURED", "FAILED", "REFUNDED"]>;
export declare const PaymentType: z.ZodEnum<["one_time", "subscription"]>;
export declare const UserStatus: z.ZodEnum<["active", "inactive", "suspended"]>;
export declare const DayOfWeek: z.ZodEnum<["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]>;
export declare const Gender: z.ZodEnum<["male", "female", "other"]>;
export declare const UserSchema: z.ZodObject<{
    _id: z.ZodString;
    phone: z.ZodString;
    name: z.ZodString;
    role: z.ZodEnum<["super_admin", "branch_admin", "instructor", "customer", "parent"]>;
    branchIds: z.ZodArray<z.ZodString, "many">;
    status: z.ZodEnum<["active", "inactive", "suspended"]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "active" | "inactive" | "suspended";
    _id: string;
    phone: string;
    name: string;
    role: "super_admin" | "branch_admin" | "instructor" | "customer" | "parent";
    branchIds: string[];
    createdAt: string;
    updatedAt: string;
}, {
    status: "active" | "inactive" | "suspended";
    _id: string;
    phone: string;
    name: string;
    role: "super_admin" | "branch_admin" | "instructor" | "customer" | "parent";
    branchIds: string[];
    createdAt: string;
    updatedAt: string;
}>;
export declare const BranchSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    address: z.ZodString;
    city: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    isActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    address: string;
    isActive: boolean;
    phone?: string | undefined;
    city?: string | undefined;
}, {
    _id: string;
    name: string;
    address: string;
    isActive: boolean;
    phone?: string | undefined;
    city?: string | undefined;
}>;
export declare const CourseSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    isActive: boolean;
    description?: string | undefined;
}, {
    _id: string;
    name: string;
    isActive: boolean;
    description?: string | undefined;
}>;
export declare const LevelSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    courseId: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    courseId: string;
    order: number;
}, {
    _id: string;
    name: string;
    courseId: string;
    order: number;
}>;
export declare const AgeGroupSchema: z.ZodObject<{
    _id: z.ZodString;
    label: z.ZodString;
    minAge: z.ZodOptional<z.ZodNumber>;
    maxAge: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    label: string;
    minAge?: number | undefined;
    maxAge?: number | undefined;
}, {
    _id: string;
    label: string;
    minAge?: number | undefined;
    maxAge?: number | undefined;
}>;
export declare const BatchScheduleSchema: z.ZodObject<{
    days: z.ZodArray<z.ZodEnum<["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]>, "many">;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    days: ("MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")[];
    startTime: string;
    endTime: string;
}, {
    days: ("MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")[];
    startTime: string;
    endTime: string;
}>;
export declare const BatchSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    branchId: z.ZodString;
    courseId: z.ZodString;
    levelId: z.ZodOptional<z.ZodString>;
    ageGroupId: z.ZodOptional<z.ZodString>;
    instructorIds: z.ZodArray<z.ZodString, "many">;
    schedule: z.ZodObject<{
        days: z.ZodArray<z.ZodEnum<["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]>, "many">;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        days: ("MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")[];
        startTime: string;
        endTime: string;
    }, {
        days: ("MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")[];
        startTime: string;
        endTime: string;
    }>;
    capacity: z.ZodNumber;
    monthlyFee: z.ZodNumber;
    isActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    isActive: boolean;
    courseId: string;
    branchId: string;
    instructorIds: string[];
    schedule: {
        days: ("MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")[];
        startTime: string;
        endTime: string;
    };
    capacity: number;
    monthlyFee: number;
    levelId?: string | undefined;
    ageGroupId?: string | undefined;
}, {
    _id: string;
    name: string;
    isActive: boolean;
    courseId: string;
    branchId: string;
    instructorIds: string[];
    schedule: {
        days: ("MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN")[];
        startTime: string;
        endTime: string;
    };
    capacity: number;
    monthlyFee: number;
    levelId?: string | undefined;
    ageGroupId?: string | undefined;
}>;
export declare const StudentProfileSchema: z.ZodObject<{
    _id: z.ZodString;
    name: z.ZodString;
    dob: z.ZodString;
    gender: z.ZodEnum<["male", "female", "other"]>;
    customerId: z.ZodString;
    relationshipToCustomer: z.ZodDefault<z.ZodEnum<["self", "child", "family_member"]>>;
    photo: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    name: string;
    dob: string;
    gender: "male" | "female" | "other";
    customerId: string;
    relationshipToCustomer: "self" | "child" | "family_member";
    photo?: string | undefined;
}, {
    _id: string;
    name: string;
    dob: string;
    gender: "male" | "female" | "other";
    customerId: string;
    relationshipToCustomer?: "self" | "child" | "family_member" | undefined;
    photo?: string | undefined;
}>;
export declare const EnrollmentSchema: z.ZodObject<{
    _id: z.ZodString;
    studentProfileId: z.ZodString;
    batchId: z.ZodString;
    branchId: z.ZodString;
    status: z.ZodEnum<["PENDING", "APPROVED", "ACTIVE", "SUSPENDED", "CANCELLED"]>;
    approvedBy: z.ZodOptional<z.ZodString>;
    approvedAt: z.ZodOptional<z.ZodString>;
    joinDate: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "CANCELLED";
    _id: string;
    createdAt: string;
    branchId: string;
    studentProfileId: string;
    batchId: string;
    approvedBy?: string | undefined;
    approvedAt?: string | undefined;
    joinDate?: string | undefined;
    notes?: string | undefined;
}, {
    status: "PENDING" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "CANCELLED";
    _id: string;
    createdAt: string;
    branchId: string;
    studentProfileId: string;
    batchId: string;
    approvedBy?: string | undefined;
    approvedAt?: string | undefined;
    joinDate?: string | undefined;
    notes?: string | undefined;
}>;
export declare const FeeLedgerSchema: z.ZodObject<{
    _id: z.ZodString;
    enrollmentId: z.ZodString;
    studentProfileId: z.ZodString;
    branchId: z.ZodString;
    month: z.ZodString;
    amount: z.ZodNumber;
    discount: z.ZodDefault<z.ZodNumber>;
    finalAmount: z.ZodNumber;
    status: z.ZodEnum<["DUE", "PAID", "OVERDUE", "WAIVED"]>;
    paidAt: z.ZodOptional<z.ZodString>;
    dueDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "DUE" | "PAID" | "OVERDUE" | "WAIVED";
    _id: string;
    branchId: string;
    studentProfileId: string;
    enrollmentId: string;
    month: string;
    amount: number;
    discount: number;
    finalAmount: number;
    dueDate: string;
    paidAt?: string | undefined;
}, {
    status: "DUE" | "PAID" | "OVERDUE" | "WAIVED";
    _id: string;
    branchId: string;
    studentProfileId: string;
    enrollmentId: string;
    month: string;
    amount: number;
    finalAmount: number;
    dueDate: string;
    discount?: number | undefined;
    paidAt?: string | undefined;
}>;

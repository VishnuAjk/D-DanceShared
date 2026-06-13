export declare const UserRole: {
    readonly SUPER_ADMIN: "super_admin";
    readonly BRANCH_ADMIN: "branch_admin";
    readonly INSTRUCTOR: "instructor";
    readonly CUSTOMER: "customer";
    readonly PARENT: "parent";
};
export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];
export declare const ALL_ROLES: UserRoleType[];
export declare const ADMIN_ROLES: UserRoleType[];
export declare const CUSTOMER_ROLES: UserRoleType[];

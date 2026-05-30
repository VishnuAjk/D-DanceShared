export const UserRole = {
  SUPER_ADMIN: 'super_admin',
  BRANCH_ADMIN: 'branch_admin',
  INSTRUCTOR: 'instructor',
  CUSTOMER: 'customer',
  PARENT: 'parent'
} as const;

export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];

export const ALL_ROLES = Object.values(UserRole) as UserRoleType[];

export const ADMIN_ROLES: UserRoleType[] = ['super_admin', 'branch_admin'];
export const CUSTOMER_ROLES: UserRoleType[] = ['customer', 'parent'];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_ROLES = exports.ADMIN_ROLES = exports.ALL_ROLES = exports.UserRole = void 0;
exports.UserRole = {
    SUPER_ADMIN: 'super_admin',
    BRANCH_ADMIN: 'branch_admin',
    INSTRUCTOR: 'instructor',
    CUSTOMER: 'customer',
    PARENT: 'parent'
};
exports.ALL_ROLES = Object.values(exports.UserRole);
exports.ADMIN_ROLES = ['super_admin', 'branch_admin'];
exports.CUSTOMER_ROLES = ['customer', 'parent'];

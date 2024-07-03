import { type BaseModel } from './common';

export enum Gender {
    MALE = 1,
    FEMALE = 2,
    OTHER = 3,
}

export enum UserRole {
    ADMIN = 1,
    AGENT = 2,
    CUSTOMER = 3,
}

export enum UserStatus {
    PENDING = 1,
    ACTIVE = 2,
    LOCKED = 3,
}
export default interface User extends BaseModel {
    name: string;
    phone_number: string;
    email: string;
    password: string;
    avatar?: string;
    role_id: UserRole;
    status_id: UserStatus;
    gender_id: Gender;
    birthday?: string;
    province_id?: string;
    address: string;
    token: {
        access_token: string;
        refresh_token: string;
    };
}

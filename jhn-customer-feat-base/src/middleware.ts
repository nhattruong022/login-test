import { NextResponse, type NextRequest } from 'next/server';

import { AUTH_KEYS } from './constants/auth';
import type User from './types/User';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get(AUTH_KEYS.USER_COOKIE)?.value;
    const pathname = request.nextUrl.pathname;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(AUTH_KEYS.HEADER_PATHNAME, pathname);
    requestHeaders.set(AUTH_KEYS.HEADER_ACCESS_TOKEN, request.cookies.get(AUTH_KEYS.ACCESS_TOKEN)?.value ?? '');
    if (currentUser) {
        const user = JSON.parse(currentUser) as User;
        requestHeaders.set(AUTH_KEYS.HEADER_USER_ID, user.id!.toString());
    } else {
        requestHeaders.set(AUTH_KEYS.HEADER_USER_ID, '0');
    }
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

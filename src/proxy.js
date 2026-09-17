import { NextResponse } from 'next/server'

export function proxy(req) {
    return NextResponse.redirect(new URL('/dashboard/overview', req.url))
}

export const config = {
    matcher: '/dashboard',
}
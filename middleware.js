import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function middleware(request){
    const path = request.nextUrl.pathname
    const isPublicPath = path ==='/login' || path === '/signup'
    const token = Cookies.get('cookies')?.value || ''
    console.log("path",path,"token",token)

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/team-location', request.nextUrl))
    }
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
}

export const config = {
    matcher:[
        '/team-location',
        '/team-dashboard',
        '/addteam',
    ]
}
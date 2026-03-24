import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url));

  response.cookies.set({
    name: "prepwise_session",
    value: "",
    maxAge: 0,
    path: "/",
  });

  response.cookies.set({
    name: "prepwise_user_email",
    value: "",
    maxAge: 0,
    path: "/",
  });

  response.cookies.set({
    name: "prepwise_user_name",
    value: "",
    maxAge: 0,
    path: "/",
  });

  response.cookies.set({
    name: "prepwise_joined_at",
    value: "",
    maxAge: 0,
    path: "/",
  });

  return response;
}

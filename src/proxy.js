import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

//   const userlogin = true;

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/admin", "/destinations/:path"],
};

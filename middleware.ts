import { PrivyClient } from "@privy-io/server-auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const authToken = request.cookies.get("privy-token")?.value || "";

    const appId = (process.env.NEXT_PUBLIC_PRIVY_APP_ID || "").replace(
      /\\n/g,
      "\n"
    );

    const appSecret = (process.env.NEXT_PUBLIC_PRIVY_APP_SECRET || "").replace(
      /\\n/g,
      "\n"
    );

    const privy = new PrivyClient(appId, appSecret);

    await privy.verifyAuthToken(authToken);
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url).toString());
  }
}

export const config = {
  matcher: "/api/:path*",
};

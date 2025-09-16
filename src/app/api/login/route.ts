import { NextRequest, NextResponse } from "next/server";
import { apolloClient } from "@/src/lib/apollo-client";
import { LOGIN_MUTATION } from "@/src/lib/graphql/queries";
import { LoginMutation, MutationLoginArgs } from "@/src/lib/generated/graphql";

export async function POST(request: NextRequest) {
  try {
    const { email, password }: MutationLoginArgs = await request.json();

    const { data } = await apolloClient.mutate<
      LoginMutation,
      MutationLoginArgs
    >({
      mutation: LOGIN_MUTATION,
      variables: { email, password },
    });

    if (data?.login?.user) {
      const userData = {
        id: data.login.user._id,
        email: data.login.user.email,
        isSuperAdmin: data.login.isSuperAdmin ?? false,
        unReadMessages: data.login.unReadMessages ?? 0,
      };

      const response = NextResponse.json({
        success: true,
        user: userData,
      });

      // Set HTTP-only authentication cookie
      response.cookies.set("auth-token", data.login.user._id, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 },
    );
  } catch (error: any) {
    console.error("Login error:", error);

    if (error.graphQLErrors?.length > 0) {
      const gqlError = error.graphQLErrors[0];
      return NextResponse.json(
        { success: false, error: gqlError.message },
        { status: 400 },
      );
    }

    if (error.networkError) {
      return NextResponse.json(
        { success: false, error: "Network error. Please try again." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Login failed. Please try again." },
      { status: 500 },
    );
  }
}

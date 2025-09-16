import { NextRequest, NextResponse } from "next/server";
import { apolloClient } from "@/src/lib/apollo-client";
import { LOGIN_MUTATION } from "@/src/lib/graphql/queries";
import { LoginMutation, MutationLoginArgs } from "@/src/lib/generated/graphql";

export async function POST(request: NextRequest) {
  try {
    // Extract email/password from request body
    const { email, password }: MutationLoginArgs = await request.json();

    // Call GraphQL login mutation
    const { data } = await apolloClient.mutate<
      LoginMutation,
      MutationLoginArgs
    >({
      mutation: LOGIN_MUTATION,
      variables: { email, password },
    });

    // Check if login was successful and user data exists
    // Note: the user has been created on the apollo sandbox
    if (data?.login?.user) {
      // Extract user info from nested GraphQL response
      const userData = {
        id: data.login.user._id,
        email: data.login.user.email,
        isSuperAdmin: data.login.isSuperAdmin,
        unReadMessages: data.login.unReadMessages,
      };

      // Create successful response with user data
      const response = NextResponse.json({
        success: true,
        user: userData,
      });

      // Set HTTP-only cookie for authentication
      response.cookies.set("auth-token", data.login.user._id, {
        httpOnly: true, // Can't be accessed by JavaScript
        sameSite: "lax", // CSRF protection
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    } else {
      // Login failed - invalid credentials
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }
  } catch (error) {
    // Handle GraphQL errors or network issues
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login failed, please check your credentials" },
      { status: 500 },
    );
  }
}

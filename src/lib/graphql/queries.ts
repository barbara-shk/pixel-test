import { gql } from "@apollo/client";
import { apolloClient } from "@/src/lib/apollo-client";
import {
  GetTaskListQuery,
  GetUserTasksQuery,
  Task,
  LoginMutation,
  User,
  MutationLoginArgs,
} from "@/src/lib/generated/graphql";

interface LoginResult {
  success: boolean;
  token?: string;
  error?: string;
  user?: Pick<User, "_id" | "email"> & {
    isSuperAdmin?: boolean;
    unReadMessages?: number;
  };
}

// Public task list
export const GET_TASK_LIST = gql`
  query GetTaskList {
    taskList {
      _id
      title
      description
      status
      type
      is_active
      createdAt
      updatedAt
      number_of_offers
      number_of_likes
      human_friendly_end_date
      time_left
    }
  }
`;

// User's tasks 
export const GET_USER_TASKS = gql`
  query GetUserTasks($user_id: ID!) {
    getUserTasks(user_id: $user_id) {
      _id
      title
      description
      status
      type
      is_active
      createdAt
      updatedAt
      number_of_offers
      number_of_likes
      human_friendly_end_date
      time_left
    }
  }
`;

// Login mutation
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      isSuperAdmin
      unReadMessages
      user {
        _id
        email
      }
    }
  }
`;

// Get public tasks
export async function getTaskList() {
  try {
    const { data } = await apolloClient.query<GetTaskListQuery>({
      query: GET_TASK_LIST,
      fetchPolicy: "no-cache",
    });
    return data?.taskList || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

// Get user tasks (with userId)
export async function getUserTasks(userId: string): Promise<Task[]> {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const { data } = await apolloClient.query<GetUserTasksQuery>({
      query: GET_USER_TASKS,
      variables: {
        user_id: userId, 
      },
            context: {
        headers: {
          // Not sure what is expected for authorisation here
          // But using userId as a placeholder for jwt or token
          Authorization: `Bearer ${userId}`, 
        },
      },
      fetchPolicy: "no-cache",
    });

    const tasks = data?.getUserTasks?.filter(Boolean) || [];
    return tasks as Task[]; 
  } catch (error: any) {
    console.error("Error fetching user tasks:", error);
     
    throw error;
  }
}


// Login function
export async function loginUser(
  email: string,
  password: string,
): Promise<LoginResult> {
  try {
    const { data } = await apolloClient.mutate<
      LoginMutation,
      MutationLoginArgs
    >({
      mutation: LOGIN_MUTATION,
      variables: { email, password },
    });

    if (data?.login?.user) {
      // Create a mock token since the GraphQL response doesn't include one
      const mockToken = `mock-token-${Date.now()}`;

      return {
        success: true,
        token: mockToken,
        user: {
          _id: data.login.user._id,
          email: data.login.user.email,
          isSuperAdmin: data.login.isSuperAdmin ?? false,
          unReadMessages: data.login.unReadMessages ?? 0,
        },
      };
    }

    return { success: false, error: "Invalid credentials" };
  } catch (error: any) {
    console.error("Login error:", error);

    if (error.graphQLErrors?.length > 0) {
      const gqlError = error.graphQLErrors[0];
      return { success: false, error: gqlError.message };
    }

    if (error.networkError) {
      return {
        success: false,
        error: "Network error. Please check your connection.",
      };
    }

    return { success: false, error: "Login failed. Please try again." };
  }
}

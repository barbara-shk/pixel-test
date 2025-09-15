import { gql } from "@apollo/client";
import { apolloClient } from "@/src/lib/apollo-client";
import { GetTaskListQuery } from "@/src/lib/generated/graphql"; 
import { GetUserTasksQuery, Task } from "@/src/lib/generated/graphql";
import { cookies } from "next/headers"; 

// Public task list (from API)
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

// User's own tasks (from API)
export const GET_USER_TASKS = gql`
  query GetUserTasks {
    getUserTasks {
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


export async function getUserTasks(): Promise<{ userTasks: Task[]; error?: string }> {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token");

    if (!authToken?.value) {
      return { userTasks: [], error: "Please log in to view your tasks" };
    }

    const { data } = await apolloClient.query<GetUserTasksQuery>({
      query: GET_USER_TASKS,
      context: {
        headers: {
          Cookie: `auth-token=${authToken.value}`,
        },
      },
      fetchPolicy: "no-cache",
    });

    const tasks = data?.getUserTasks?.filter(Boolean) || [];
    return { userTasks: tasks as Task[] };
  } catch (error: any) {
    console.error("Error fetching user tasks:", error);
    
    if (error.message?.includes('unauthorized')) {
      return { userTasks: [], error: "Session expired. Please log in again." };
    }
    
    if (error.networkError) {
      return { userTasks: [], error: "Connection failed. Check your internet and try again." };
    }
    if (error.graphQLErrors?.length > 0) {
      const gqlError = error.graphQLErrors[0];
      return { userTasks: [], error: `Server error: ${gqlError.message}` };
    }
    return { userTasks: [], error: "Failed to load tasks. Please try again." };
  }
}
import { gql } from "@apollo/client";
import { apolloClient } from "@/src/lib/apollo-client";
import { GetTaskListQuery } from "@/src/lib/generated/graphql";

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

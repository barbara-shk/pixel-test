 import { gql } from '@apollo/client';

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
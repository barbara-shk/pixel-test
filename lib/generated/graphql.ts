export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BSONDecimal: { input: any; output: any };
  Date: { input: any; output: any };
  JSON: { input: any; output: any };
  MongoID: { input: any; output: any };
  RegExpAsString: { input: any; output: any };
};

export type ActivateResponse = {
  __typename?: "ActivateResponse";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AdminUser = {
  __typename?: "AdminUser";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  email: Scalars["String"]["output"];
  isAdmin?: Maybe<Scalars["Boolean"]["output"]>;
  name: Scalars["String"]["output"];
  permission_role?: Maybe<PermissionRole>;
  reset_token?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type AdminUserPermission_RoleArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOnePermissionRoleInput>;
};

export type CodeResponse = {
  __typename?: "CodeResponse";
  code?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CreateOneAdminUserInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email: Scalars["String"]["input"];
  isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Scalars["MongoID"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOneCurrencyInput = {
  abbreviation: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOneCurrencyPayload = {
  __typename?: "CreateOneCurrencyPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Currency>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOneEnquiryInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  message: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type CreateOneEnquiryPayload = {
  __typename?: "CreateOneEnquiryPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Enquiry>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOneHelpPageCategoryInput = {
  children?: InputMaybe<Array<InputMaybe<HelpPageCategoryChildrenInput>>>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOnePageInput = {
  content?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOnePagePayload = {
  __typename?: "CreateOnePagePayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Page>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOnePermissionInput = {
  code: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOnePermissionPayload = {
  __typename?: "CreateOnePermissionPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Permission>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOnePermissionRoleInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOnePermissionRolePayload = {
  __typename?: "CreateOnePermissionRolePayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<PermissionRole>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOneSkillInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOneSkillPayload = {
  __typename?: "CreateOneSkillPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Skill>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOneSwipedTaskInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  swiped?: InputMaybe<Scalars["Date"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type CreateOneTaskCategoryInput = {
  ancestors?: InputMaybe<Array<InputMaybe<TaskCategoryAncestorsInput>>>;
  colour?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  icon?: InputMaybe<Scalars["JSON"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_types?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOneTaskInput = {
  accepted_offer_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  addressInput?: InputMaybe<TaskAddressInputInput>;
  categories?: InputMaybe<Array<InputMaybe<TaskCategoriesInput>>>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  distance?: InputMaybe<Scalars["BSONDecimal"]["input"]>;
  duration?: InputMaybe<TaskDurationInput>;
  end_date?: InputMaybe<Scalars["Date"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_remote?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_suspended?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<TaskLocationInput>;
  number_of_likes?: InputMaybe<Scalars["Float"]["input"]>;
  number_of_offers?: InputMaybe<Scalars["Float"]["input"]>;
  payment_terms_accepted?: InputMaybe<
    Array<InputMaybe<EnumTaskPayment_Terms_Accepted>>
  >;
  reminders?: InputMaybe<Scalars["JSON"]["input"]>;
  start_date?: InputMaybe<Scalars["Date"]["input"]>;
  status?: InputMaybe<EnumTaskStatus>;
  suspended_reason?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  type?: InputMaybe<EnumTaskType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  visible_from?: InputMaybe<Scalars["Date"]["input"]>;
  xxx?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CreateOneTaskOfferInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  exchange_method?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_accepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_withdrawn?: InputMaybe<Scalars["Boolean"]["input"]>;
  payment_method?: InputMaybe<EnumTaskOfferPayment_Method>;
  save_why_me?: InputMaybe<Scalars["Boolean"]["input"]>;
  swap_summary?: InputMaybe<Scalars["String"]["input"]>;
  swap_task_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
  value_type?: InputMaybe<Scalars["String"]["input"]>;
  why_me?: InputMaybe<Scalars["String"]["input"]>;
  withdrawal_reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateOneTaskReportInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumTaskReportType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type CreateOneTaskReportPayload = {
  __typename?: "CreateOneTaskReportPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<TaskReport>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOneTaskTypeInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type CreateOneTaskTypePayload = {
  __typename?: "CreateOneTaskTypePayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<TaskType>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type CreateOneUserInput = {
  addressInput?: InputMaybe<UserAddressInputInput>;
  asker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  asker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  email: Scalars["String"]["input"];
  first_name: Scalars["String"]["input"];
  gender?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  has_password?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_email_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_profile_complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_name: Scalars["String"]["input"];
  liked_tasks?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  location?: InputMaybe<UserLocationInput>;
  notification_preferences?: InputMaybe<Scalars["JSON"]["input"]>;
  notifications_sent?: InputMaybe<Scalars["JSON"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  privacySettings?: InputMaybe<UserPrivacySettingsInput>;
  profile_description?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["JSON"]["input"]>;
  pushKey?: InputMaybe<Scalars["String"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  reviewScores?: InputMaybe<UserReviewScoresInput>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  saved_locations?: InputMaybe<Array<InputMaybe<UserSaved_LocationsInput>>>;
  saved_task_messages?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  skills?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  tasker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  tasker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  tokenExpiry?: InputMaybe<Scalars["Date"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  username: Scalars["String"]["input"];
};

export type CreateOneUserReviewInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  flagged_by?: InputMaybe<Scalars["MongoID"]["input"]>;
  flagged_reason?: InputMaybe<Scalars["String"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_flagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  reviewer?: InputMaybe<Scalars["MongoID"]["input"]>;
  star_rating?: InputMaybe<Scalars["Float"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumUserReviewType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type CreateOneUserReviewPayload = {
  __typename?: "CreateOneUserReviewPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<UserReview>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type Currency = {
  __typename?: "Currency";
  _id: Scalars["MongoID"]["output"];
  abbreviation: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type CurrentUser = {
  __typename?: "CurrentUser";
  isSuperAdmin?: Maybe<Scalars["Boolean"]["output"]>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  unReadMessages?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<User>;
};

export type DeletedAmount = {
  __typename?: "DeletedAmount";
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type Enquiry = {
  __typename?: "Enquiry";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  message: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<Scalars["MongoID"]["output"]>;
};

export enum EnumMessageThreadType {
  Message = "MESSAGE",
  Review = "REVIEW",
}

export enum EnumTaskDurationUnit {
  Days = "DAYS",
  Hours = "HOURS",
}

export enum EnumTaskOfferPayment_Method {
  Hybrid = "HYBRID",
  Mixed = "MIXED",
  Money = "MONEY",
  Swap = "SWAP",
  Volunteer = "VOLUNTEER",
}

export enum EnumTaskPayment_Terms_Accepted {
  Hybrid = "HYBRID",
  Money = "MONEY",
  Swap = "SWAP",
  Volunteer = "VOLUNTEER",
}

export enum EnumTaskReportType {
  Offensive = "OFFENSIVE",
}

export enum EnumTaskStatus {
  Completed = "COMPLETED",
  New = "NEW",
  OfferAccepted = "OFFER_ACCEPTED",
}

export enum EnumTaskType {
  DemoExpress = "DEMO_EXPRESS",
  DemoStandard = "DEMO_STANDARD",
  Express = "EXPRESS",
  Standard = "STANDARD",
}

export enum EnumUserReviewType {
  Asker = "ASKER",
  Tasker = "TASKER",
}

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars["String"]["output"]>;
};

export type FilterFindManyAdminUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindManyAdminUserInput = {
  AND?: InputMaybe<Array<FilterFindManyAdminUserInput>>;
  OR?: InputMaybe<Array<FilterFindManyAdminUserInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyAdminUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Scalars["MongoID"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAdminUserOperatorsInput = {
  _id?: InputMaybe<FilterFindManyAdminUser_IdOperatorsInput>;
  email?: InputMaybe<FilterFindManyAdminUserEmailOperatorsInput>;
};

export type FilterFindManyAdminUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyCurrencyInput = {
  AND?: InputMaybe<Array<FilterFindManyCurrencyInput>>;
  OR?: InputMaybe<Array<FilterFindManyCurrencyInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCurrencyOperatorsInput>;
  abbreviation?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCurrencyOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCurrency_IdOperatorsInput>;
};

export type FilterFindManyCurrency_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyEnquiryInput = {
  AND?: InputMaybe<Array<FilterFindManyEnquiryInput>>;
  OR?: InputMaybe<Array<FilterFindManyEnquiryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyEnquiryOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEnquiryOperatorsInput = {
  _id?: InputMaybe<FilterFindManyEnquiry_IdOperatorsInput>;
};

export type FilterFindManyEnquiry_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyHelpPageCategoryChildrenChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyHelpPageCategoryChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  children?: InputMaybe<
    Array<InputMaybe<FilterFindManyHelpPageCategoryChildrenChildrenInput>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyHelpPageCategoryInput = {
  AND?: InputMaybe<Array<FilterFindManyHelpPageCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindManyHelpPageCategoryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyHelpPageCategoryOperatorsInput>;
  children?: InputMaybe<
    Array<InputMaybe<FilterFindManyHelpPageCategoryChildrenInput>>
  >;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyHelpPageCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindManyHelpPageCategory_IdOperatorsInput>;
  parent?: InputMaybe<FilterFindManyHelpPageCategoryParentOperatorsInput>;
  slug?: InputMaybe<FilterFindManyHelpPageCategorySlugOperatorsInput>;
};

export type FilterFindManyHelpPageCategoryParentOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyHelpPageCategorySlugOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindManyHelpPageCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyMessageThreadInput = {
  AND?: InputMaybe<Array<FilterFindManyMessageThreadInput>>;
  OR?: InputMaybe<Array<FilterFindManyMessageThreadInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyMessageThreadOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  from?: InputMaybe<Scalars["MongoID"]["input"]>;
  from_name?: InputMaybe<Scalars["String"]["input"]>;
  is_flagged?: InputMaybe<FilterFindManyMessageThreadIs_FlaggedInput>;
  messages?: InputMaybe<
    Array<InputMaybe<FilterFindManyMessageThreadMessagesInput>>
  >;
  offer?: InputMaybe<Scalars["MongoID"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_name?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumMessageThreadType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type FilterFindManyMessageThreadIs_FlaggedInput = {
  date?: InputMaybe<Scalars["Date"]["input"]>;
  flaggedBy?: InputMaybe<Scalars["MongoID"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyMessageThreadMessagesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  from?: InputMaybe<Scalars["MongoID"]["input"]>;
  image?: InputMaybe<Scalars["JSON"]["input"]>;
  is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  sent?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMessageThreadOperatorsInput = {
  _id?: InputMaybe<FilterFindManyMessageThread_IdOperatorsInput>;
};

export type FilterFindManyMessageThread_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyPageInput = {
  AND?: InputMaybe<Array<FilterFindManyPageInput>>;
  OR?: InputMaybe<Array<FilterFindManyPageInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPageOperatorsInput>;
  content?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPageOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPage_IdOperatorsInput>;
};

export type FilterFindManyPage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyPermissionInput = {
  AND?: InputMaybe<Array<FilterFindManyPermissionInput>>;
  OR?: InputMaybe<Array<FilterFindManyPermissionInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPermissionOperatorsInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPermissionOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPermission_IdOperatorsInput>;
};

export type FilterFindManyPermissionRoleInput = {
  AND?: InputMaybe<Array<FilterFindManyPermissionRoleInput>>;
  OR?: InputMaybe<Array<FilterFindManyPermissionRoleInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPermissionRoleOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPermissionRoleOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPermissionRole_IdOperatorsInput>;
};

export type FilterFindManyPermissionRole_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyPermission_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManySkillInput = {
  AND?: InputMaybe<Array<FilterFindManySkillInput>>;
  OR?: InputMaybe<Array<FilterFindManySkillInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySkillOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySkillOperatorsInput = {
  _id?: InputMaybe<FilterFindManySkill_IdOperatorsInput>;
};

export type FilterFindManySkill_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyTaskAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyTaskCategoriesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyTaskCategoryAncestorsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyTaskCategoryInput = {
  AND?: InputMaybe<Array<FilterFindManyTaskCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindManyTaskCategoryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTaskCategoryOperatorsInput>;
  ancestors?: InputMaybe<
    Array<InputMaybe<FilterFindManyTaskCategoryAncestorsInput>>
  >;
  colour?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  icon?: InputMaybe<Scalars["JSON"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  task_types?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTaskCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTaskCategory_IdOperatorsInput>;
  parent?: InputMaybe<FilterFindManyTaskCategoryParentOperatorsInput>;
};

export type FilterFindManyTaskCategoryParentOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyTaskCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyTaskDurationInput = {
  unit?: InputMaybe<EnumTaskDurationUnit>;
  value?: InputMaybe<Scalars["Float"]["input"]>;
};

export type FilterFindManyTaskInput = {
  AND?: InputMaybe<Array<FilterFindManyTaskInput>>;
  OR?: InputMaybe<Array<FilterFindManyTaskInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTaskOperatorsInput>;
  accepted_offer_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  addressInput?: InputMaybe<FilterFindManyTaskAddressInputInput>;
  categories?: InputMaybe<Array<InputMaybe<FilterFindManyTaskCategoriesInput>>>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  distance?: InputMaybe<Scalars["BSONDecimal"]["input"]>;
  duration?: InputMaybe<FilterFindManyTaskDurationInput>;
  end_date?: InputMaybe<Scalars["Date"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_remote?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_suspended?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<FilterFindManyTaskLocationInput>;
  number_of_likes?: InputMaybe<Scalars["Float"]["input"]>;
  number_of_offers?: InputMaybe<Scalars["Float"]["input"]>;
  payment_terms_accepted?: InputMaybe<
    Array<InputMaybe<EnumTaskPayment_Terms_Accepted>>
  >;
  reminders?: InputMaybe<Scalars["JSON"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  start_date?: InputMaybe<Scalars["Date"]["input"]>;
  status?: InputMaybe<EnumTaskStatus>;
  suspended_reason?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<EnumTaskType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  visible_from?: InputMaybe<Scalars["Date"]["input"]>;
  xxx?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FilterFindManyTaskLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTaskOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTask_IdOperatorsInput>;
};

export type FilterFindManyTaskReportInput = {
  AND?: InputMaybe<Array<FilterFindManyTaskReportInput>>;
  OR?: InputMaybe<Array<FilterFindManyTaskReportInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTaskReportOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumTaskReportType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTaskReportOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTaskReport_IdOperatorsInput>;
};

export type FilterFindManyTaskReport_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyTaskTypeInput = {
  AND?: InputMaybe<Array<FilterFindManyTaskTypeInput>>;
  OR?: InputMaybe<Array<FilterFindManyTaskTypeInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTaskTypeOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTaskTypeOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTaskType_IdOperatorsInput>;
};

export type FilterFindManyTaskType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyTask_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyUserAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindManyUserInput = {
  AND?: InputMaybe<Array<FilterFindManyUserInput>>;
  OR?: InputMaybe<Array<FilterFindManyUserInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUserOperatorsInput>;
  addressInput?: InputMaybe<FilterFindManyUserAddressInputInput>;
  asker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  asker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  has_password?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_email_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_profile_complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  liked_tasks?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  location?: InputMaybe<FilterFindManyUserLocationInput>;
  notification_preferences?: InputMaybe<Scalars["JSON"]["input"]>;
  notifications_sent?: InputMaybe<Scalars["JSON"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  privacySettings?: InputMaybe<FilterFindManyUserPrivacySettingsInput>;
  profile_description?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["JSON"]["input"]>;
  pushKey?: InputMaybe<Scalars["String"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  reviewScores?: InputMaybe<FilterFindManyUserReviewScoresInput>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  saved_locations?: InputMaybe<
    Array<InputMaybe<FilterFindManyUserSaved_LocationsInput>>
  >;
  saved_task_messages?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  search?: InputMaybe<Scalars["String"]["input"]>;
  skills?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  tasker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  tasker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  tokenExpiry?: InputMaybe<Scalars["Date"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserLast_NameOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindManyUserLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserNotificationInput = {
  AND?: InputMaybe<Array<FilterFindManyUserNotificationInput>>;
  OR?: InputMaybe<Array<FilterFindManyUserNotificationInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUserNotificationOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  date_sent?: InputMaybe<Scalars["Date"]["input"]>;
  from?: InputMaybe<Scalars["MongoID"]["input"]>;
  message?: InputMaybe<Scalars["JSON"]["input"]>;
  read?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserNotificationOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUserNotification_IdOperatorsInput>;
};

export type FilterFindManyUserNotification_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUser_IdOperatorsInput>;
  email?: InputMaybe<FilterFindManyUserEmailOperatorsInput>;
  last_name?: InputMaybe<FilterFindManyUserLast_NameOperatorsInput>;
  roles?: InputMaybe<FilterFindManyUserRolesOperatorsInput>;
  skills?: InputMaybe<FilterFindManyUserSkillsOperatorsInput>;
  username?: InputMaybe<FilterFindManyUserUsernameOperatorsInput>;
};

export type FilterFindManyUserPrivacySettingsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  access_info?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_devices?: InputMaybe<Scalars["Boolean"]["input"]>;
  manage_cookies?: InputMaybe<Scalars["Boolean"]["input"]>;
  personalised_ads?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_geolocation?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FilterFindManyUserReviewInput = {
  AND?: InputMaybe<Array<FilterFindManyUserReviewInput>>;
  OR?: InputMaybe<Array<FilterFindManyUserReviewInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUserReviewOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  flagged_by?: InputMaybe<Scalars["MongoID"]["input"]>;
  flagged_reason?: InputMaybe<Scalars["String"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_flagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  reviewer?: InputMaybe<Scalars["MongoID"]["input"]>;
  star_rating?: InputMaybe<Scalars["Float"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumUserReviewType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserReviewOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUserReview_IdOperatorsInput>;
};

export type FilterFindManyUserReviewScoresAskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserReviewScoresInput = {
  asker?: InputMaybe<FilterFindManyUserReviewScoresAskerInput>;
  overall?: InputMaybe<FilterFindManyUserReviewScoresOverallInput>;
  tasker?: InputMaybe<FilterFindManyUserReviewScoresTaskerInput>;
};

export type FilterFindManyUserReviewScoresOverallInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserReviewScoresTaskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserReview_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyUserRolesOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyUserSaved_LocationsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindManyUserSkillsOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindManyUserUsernameOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneAdminUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindOneAdminUserInput = {
  AND?: InputMaybe<Array<FilterFindOneAdminUserInput>>;
  OR?: InputMaybe<Array<FilterFindOneAdminUserInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneAdminUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Scalars["MongoID"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAdminUserOperatorsInput = {
  _id?: InputMaybe<FilterFindOneAdminUser_IdOperatorsInput>;
  email?: InputMaybe<FilterFindOneAdminUserEmailOperatorsInput>;
};

export type FilterFindOneAdminUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneCurrencyInput = {
  AND?: InputMaybe<Array<FilterFindOneCurrencyInput>>;
  OR?: InputMaybe<Array<FilterFindOneCurrencyInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneCurrencyOperatorsInput>;
  abbreviation?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCurrencyOperatorsInput = {
  _id?: InputMaybe<FilterFindOneCurrency_IdOperatorsInput>;
};

export type FilterFindOneCurrency_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneEnquiryInput = {
  AND?: InputMaybe<Array<FilterFindOneEnquiryInput>>;
  OR?: InputMaybe<Array<FilterFindOneEnquiryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneEnquiryOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEnquiryOperatorsInput = {
  _id?: InputMaybe<FilterFindOneEnquiry_IdOperatorsInput>;
};

export type FilterFindOneEnquiry_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneHelpPageCategoryChildrenChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneHelpPageCategoryChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  children?: InputMaybe<
    Array<InputMaybe<FilterFindOneHelpPageCategoryChildrenChildrenInput>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneHelpPageCategoryInput = {
  AND?: InputMaybe<Array<FilterFindOneHelpPageCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindOneHelpPageCategoryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneHelpPageCategoryOperatorsInput>;
  children?: InputMaybe<
    Array<InputMaybe<FilterFindOneHelpPageCategoryChildrenInput>>
  >;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneHelpPageCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindOneHelpPageCategory_IdOperatorsInput>;
  parent?: InputMaybe<FilterFindOneHelpPageCategoryParentOperatorsInput>;
  slug?: InputMaybe<FilterFindOneHelpPageCategorySlugOperatorsInput>;
};

export type FilterFindOneHelpPageCategoryParentOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneHelpPageCategorySlugOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindOneHelpPageCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneMessageThreadInput = {
  AND?: InputMaybe<Array<FilterFindOneMessageThreadInput>>;
  OR?: InputMaybe<Array<FilterFindOneMessageThreadInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneMessageThreadOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  from?: InputMaybe<Scalars["MongoID"]["input"]>;
  from_name?: InputMaybe<Scalars["String"]["input"]>;
  is_flagged?: InputMaybe<FilterFindOneMessageThreadIs_FlaggedInput>;
  messages?: InputMaybe<
    Array<InputMaybe<FilterFindOneMessageThreadMessagesInput>>
  >;
  offer?: InputMaybe<Scalars["MongoID"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_name?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumMessageThreadType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type FilterFindOneMessageThreadIs_FlaggedInput = {
  date?: InputMaybe<Scalars["Date"]["input"]>;
  flaggedBy?: InputMaybe<Scalars["MongoID"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneMessageThreadMessagesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  from?: InputMaybe<Scalars["MongoID"]["input"]>;
  image?: InputMaybe<Scalars["JSON"]["input"]>;
  is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  sent?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMessageThreadOperatorsInput = {
  _id?: InputMaybe<FilterFindOneMessageThread_IdOperatorsInput>;
};

export type FilterFindOneMessageThread_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOnePageInput = {
  AND?: InputMaybe<Array<FilterFindOnePageInput>>;
  OR?: InputMaybe<Array<FilterFindOnePageInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePageOperatorsInput>;
  content?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePageOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePage_IdOperatorsInput>;
};

export type FilterFindOnePage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneSkillInput = {
  AND?: InputMaybe<Array<FilterFindOneSkillInput>>;
  OR?: InputMaybe<Array<FilterFindOneSkillInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSkillOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSkillOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSkill_IdOperatorsInput>;
};

export type FilterFindOneSkill_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneTaskAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneTaskCategoriesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneTaskCategoryAncestorsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneTaskCategoryInput = {
  AND?: InputMaybe<Array<FilterFindOneTaskCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindOneTaskCategoryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTaskCategoryOperatorsInput>;
  ancestors?: InputMaybe<
    Array<InputMaybe<FilterFindOneTaskCategoryAncestorsInput>>
  >;
  colour?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  icon?: InputMaybe<Scalars["JSON"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_types?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTaskCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTaskCategory_IdOperatorsInput>;
  parent?: InputMaybe<FilterFindOneTaskCategoryParentOperatorsInput>;
};

export type FilterFindOneTaskCategoryParentOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneTaskCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneTaskDurationInput = {
  unit?: InputMaybe<EnumTaskDurationUnit>;
  value?: InputMaybe<Scalars["Float"]["input"]>;
};

export type FilterFindOneTaskInput = {
  AND?: InputMaybe<Array<FilterFindOneTaskInput>>;
  OR?: InputMaybe<Array<FilterFindOneTaskInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTaskOperatorsInput>;
  accepted_offer_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  addressInput?: InputMaybe<FilterFindOneTaskAddressInputInput>;
  categories?: InputMaybe<Array<InputMaybe<FilterFindOneTaskCategoriesInput>>>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  distance?: InputMaybe<Scalars["BSONDecimal"]["input"]>;
  duration?: InputMaybe<FilterFindOneTaskDurationInput>;
  end_date?: InputMaybe<Scalars["Date"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_remote?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_suspended?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<FilterFindOneTaskLocationInput>;
  number_of_likes?: InputMaybe<Scalars["Float"]["input"]>;
  number_of_offers?: InputMaybe<Scalars["Float"]["input"]>;
  payment_terms_accepted?: InputMaybe<
    Array<InputMaybe<EnumTaskPayment_Terms_Accepted>>
  >;
  reminders?: InputMaybe<Scalars["JSON"]["input"]>;
  start_date?: InputMaybe<Scalars["Date"]["input"]>;
  status?: InputMaybe<EnumTaskStatus>;
  suspended_reason?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<EnumTaskType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  visible_from?: InputMaybe<Scalars["Date"]["input"]>;
  xxx?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FilterFindOneTaskLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneTaskOfferInput = {
  AND?: InputMaybe<Array<FilterFindOneTaskOfferInput>>;
  OR?: InputMaybe<Array<FilterFindOneTaskOfferInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTaskOfferOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  exchange_method?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_accepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_withdrawn?: InputMaybe<Scalars["Boolean"]["input"]>;
  payment_method?: InputMaybe<EnumTaskOfferPayment_Method>;
  save_why_me?: InputMaybe<Scalars["Boolean"]["input"]>;
  swap_summary?: InputMaybe<Scalars["String"]["input"]>;
  swap_task_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
  value_type?: InputMaybe<Scalars["String"]["input"]>;
  why_me?: InputMaybe<Scalars["String"]["input"]>;
  withdrawal_reason?: InputMaybe<Scalars["String"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTaskOfferOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTaskOffer_IdOperatorsInput>;
};

export type FilterFindOneTaskOffer_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTaskOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTask_IdOperatorsInput>;
};

export type FilterFindOneTaskReportInput = {
  AND?: InputMaybe<Array<FilterFindOneTaskReportInput>>;
  OR?: InputMaybe<Array<FilterFindOneTaskReportInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTaskReportOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumTaskReportType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTaskReportOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTaskReport_IdOperatorsInput>;
};

export type FilterFindOneTaskReport_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneTaskTypeInput = {
  AND?: InputMaybe<Array<FilterFindOneTaskTypeInput>>;
  OR?: InputMaybe<Array<FilterFindOneTaskTypeInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTaskTypeOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTaskTypeOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTaskType_IdOperatorsInput>;
};

export type FilterFindOneTaskType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneTask_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneUserAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindOneUserInput = {
  AND?: InputMaybe<Array<FilterFindOneUserInput>>;
  OR?: InputMaybe<Array<FilterFindOneUserInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneUserOperatorsInput>;
  addressInput?: InputMaybe<FilterFindOneUserAddressInputInput>;
  asker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  asker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  has_password?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_email_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_profile_complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  liked_tasks?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  location?: InputMaybe<FilterFindOneUserLocationInput>;
  notification_preferences?: InputMaybe<Scalars["JSON"]["input"]>;
  notifications_sent?: InputMaybe<Scalars["JSON"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  privacySettings?: InputMaybe<FilterFindOneUserPrivacySettingsInput>;
  profile_description?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["JSON"]["input"]>;
  pushKey?: InputMaybe<Scalars["String"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  reviewScores?: InputMaybe<FilterFindOneUserReviewScoresInput>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  saved_locations?: InputMaybe<
    Array<InputMaybe<FilterFindOneUserSaved_LocationsInput>>
  >;
  saved_task_messages?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  skills?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  tasker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  tasker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  tokenExpiry?: InputMaybe<Scalars["Date"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserLast_NameOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindOneUserLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserNotificationInput = {
  AND?: InputMaybe<Array<FilterFindOneUserNotificationInput>>;
  OR?: InputMaybe<Array<FilterFindOneUserNotificationInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneUserNotificationOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  date_sent?: InputMaybe<Scalars["Date"]["input"]>;
  from?: InputMaybe<Scalars["MongoID"]["input"]>;
  message?: InputMaybe<Scalars["JSON"]["input"]>;
  read?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserNotificationOperatorsInput = {
  _id?: InputMaybe<FilterFindOneUserNotification_IdOperatorsInput>;
};

export type FilterFindOneUserNotification_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: InputMaybe<FilterFindOneUser_IdOperatorsInput>;
  email?: InputMaybe<FilterFindOneUserEmailOperatorsInput>;
  last_name?: InputMaybe<FilterFindOneUserLast_NameOperatorsInput>;
  roles?: InputMaybe<FilterFindOneUserRolesOperatorsInput>;
  skills?: InputMaybe<FilterFindOneUserSkillsOperatorsInput>;
  username?: InputMaybe<FilterFindOneUserUsernameOperatorsInput>;
};

export type FilterFindOneUserPrivacySettingsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  access_info?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_devices?: InputMaybe<Scalars["Boolean"]["input"]>;
  manage_cookies?: InputMaybe<Scalars["Boolean"]["input"]>;
  personalised_ads?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_geolocation?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FilterFindOneUserReviewInput = {
  AND?: InputMaybe<Array<FilterFindOneUserReviewInput>>;
  OR?: InputMaybe<Array<FilterFindOneUserReviewInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneUserReviewOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  flagged_by?: InputMaybe<Scalars["MongoID"]["input"]>;
  flagged_reason?: InputMaybe<Scalars["String"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_flagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  reviewer?: InputMaybe<Scalars["MongoID"]["input"]>;
  star_rating?: InputMaybe<Scalars["Float"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumUserReviewType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserReviewOperatorsInput = {
  _id?: InputMaybe<FilterFindOneUserReview_IdOperatorsInput>;
};

export type FilterFindOneUserReviewScoresAskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserReviewScoresInput = {
  asker?: InputMaybe<FilterFindOneUserReviewScoresAskerInput>;
  overall?: InputMaybe<FilterFindOneUserReviewScoresOverallInput>;
  tasker?: InputMaybe<FilterFindOneUserReviewScoresTaskerInput>;
};

export type FilterFindOneUserReviewScoresOverallInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserReviewScoresTaskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserReview_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneUserRolesOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneUserSaved_LocationsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterFindOneUserSkillsOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterFindOneUserUsernameOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneAdminUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterUpdateOneAdminUserInput = {
  AND?: InputMaybe<Array<FilterUpdateOneAdminUserInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneAdminUserInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneAdminUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Scalars["MongoID"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneAdminUserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneAdminUser_IdOperatorsInput>;
  email?: InputMaybe<FilterUpdateOneAdminUserEmailOperatorsInput>;
};

export type FilterUpdateOneAdminUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneCurrencyInput = {
  AND?: InputMaybe<Array<FilterUpdateOneCurrencyInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneCurrencyInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneCurrencyOperatorsInput>;
  abbreviation?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneCurrencyOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneCurrency_IdOperatorsInput>;
};

export type FilterUpdateOneCurrency_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneEnquiryInput = {
  AND?: InputMaybe<Array<FilterUpdateOneEnquiryInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneEnquiryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneEnquiryOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneEnquiryOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneEnquiry_IdOperatorsInput>;
};

export type FilterUpdateOneEnquiry_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneHelpPageCategoryChildrenChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneHelpPageCategoryChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  children?: InputMaybe<
    Array<InputMaybe<FilterUpdateOneHelpPageCategoryChildrenChildrenInput>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneHelpPageCategoryInput = {
  AND?: InputMaybe<Array<FilterUpdateOneHelpPageCategoryInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneHelpPageCategoryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneHelpPageCategoryOperatorsInput>;
  children?: InputMaybe<
    Array<InputMaybe<FilterUpdateOneHelpPageCategoryChildrenInput>>
  >;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneHelpPageCategoryOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneHelpPageCategory_IdOperatorsInput>;
  parent?: InputMaybe<FilterUpdateOneHelpPageCategoryParentOperatorsInput>;
  slug?: InputMaybe<FilterUpdateOneHelpPageCategorySlugOperatorsInput>;
};

export type FilterUpdateOneHelpPageCategoryParentOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneHelpPageCategorySlugOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterUpdateOneHelpPageCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOnePageInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePageInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePageInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePageOperatorsInput>;
  content?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePageOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePage_IdOperatorsInput>;
};

export type FilterUpdateOnePage_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOnePermissionInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePermissionInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePermissionInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePermissionOperatorsInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePermissionOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePermission_IdOperatorsInput>;
};

export type FilterUpdateOnePermissionRoleInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePermissionRoleInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePermissionRoleInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePermissionRoleOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePermissionRoleOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePermissionRole_IdOperatorsInput>;
};

export type FilterUpdateOnePermissionRole_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOnePermission_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneSkillInput = {
  AND?: InputMaybe<Array<FilterUpdateOneSkillInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneSkillInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneSkillOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSkillOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneSkill_IdOperatorsInput>;
};

export type FilterUpdateOneSkill_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneTaskAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneTaskCategoriesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneTaskCategoryAncestorsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneTaskCategoryInput = {
  AND?: InputMaybe<Array<FilterUpdateOneTaskCategoryInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneTaskCategoryInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneTaskCategoryOperatorsInput>;
  ancestors?: InputMaybe<
    Array<InputMaybe<FilterUpdateOneTaskCategoryAncestorsInput>>
  >;
  colour?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  icon?: InputMaybe<Scalars["JSON"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_types?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTaskCategoryOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneTaskCategory_IdOperatorsInput>;
  parent?: InputMaybe<FilterUpdateOneTaskCategoryParentOperatorsInput>;
};

export type FilterUpdateOneTaskCategoryParentOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneTaskCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneTaskDurationInput = {
  unit?: InputMaybe<EnumTaskDurationUnit>;
  value?: InputMaybe<Scalars["Float"]["input"]>;
};

export type FilterUpdateOneTaskInput = {
  AND?: InputMaybe<Array<FilterUpdateOneTaskInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneTaskInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneTaskOperatorsInput>;
  accepted_offer_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  addressInput?: InputMaybe<FilterUpdateOneTaskAddressInputInput>;
  categories?: InputMaybe<
    Array<InputMaybe<FilterUpdateOneTaskCategoriesInput>>
  >;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  distance?: InputMaybe<Scalars["BSONDecimal"]["input"]>;
  duration?: InputMaybe<FilterUpdateOneTaskDurationInput>;
  end_date?: InputMaybe<Scalars["Date"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_remote?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_suspended?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<FilterUpdateOneTaskLocationInput>;
  number_of_likes?: InputMaybe<Scalars["Float"]["input"]>;
  number_of_offers?: InputMaybe<Scalars["Float"]["input"]>;
  payment_terms_accepted?: InputMaybe<
    Array<InputMaybe<EnumTaskPayment_Terms_Accepted>>
  >;
  reminders?: InputMaybe<Scalars["JSON"]["input"]>;
  start_date?: InputMaybe<Scalars["Date"]["input"]>;
  status?: InputMaybe<EnumTaskStatus>;
  suspended_reason?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<EnumTaskType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  visible_from?: InputMaybe<Scalars["Date"]["input"]>;
  xxx?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FilterUpdateOneTaskLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTaskOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneTask_IdOperatorsInput>;
};

export type FilterUpdateOneTaskReportInput = {
  AND?: InputMaybe<Array<FilterUpdateOneTaskReportInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneTaskReportInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneTaskReportOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumTaskReportType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTaskReportOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneTaskReport_IdOperatorsInput>;
};

export type FilterUpdateOneTaskReport_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneTaskTypeInput = {
  AND?: InputMaybe<Array<FilterUpdateOneTaskTypeInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneTaskTypeInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneTaskTypeOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTaskTypeOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneTaskType_IdOperatorsInput>;
};

export type FilterUpdateOneTaskType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneTask_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneUserAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterUpdateOneUserInput = {
  AND?: InputMaybe<Array<FilterUpdateOneUserInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneUserInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneUserOperatorsInput>;
  addressInput?: InputMaybe<FilterUpdateOneUserAddressInputInput>;
  asker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  asker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  has_password?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_email_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_profile_complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  liked_tasks?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  location?: InputMaybe<FilterUpdateOneUserLocationInput>;
  notification_preferences?: InputMaybe<Scalars["JSON"]["input"]>;
  notifications_sent?: InputMaybe<Scalars["JSON"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  privacySettings?: InputMaybe<FilterUpdateOneUserPrivacySettingsInput>;
  profile_description?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["JSON"]["input"]>;
  pushKey?: InputMaybe<Scalars["String"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  reviewScores?: InputMaybe<FilterUpdateOneUserReviewScoresInput>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  saved_locations?: InputMaybe<
    Array<InputMaybe<FilterUpdateOneUserSaved_LocationsInput>>
  >;
  saved_task_messages?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  skills?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  tasker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  tasker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  tokenExpiry?: InputMaybe<Scalars["Date"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneUserLast_NameOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterUpdateOneUserLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneUser_IdOperatorsInput>;
  email?: InputMaybe<FilterUpdateOneUserEmailOperatorsInput>;
  last_name?: InputMaybe<FilterUpdateOneUserLast_NameOperatorsInput>;
  roles?: InputMaybe<FilterUpdateOneUserRolesOperatorsInput>;
  skills?: InputMaybe<FilterUpdateOneUserSkillsOperatorsInput>;
  username?: InputMaybe<FilterUpdateOneUserUsernameOperatorsInput>;
};

export type FilterUpdateOneUserPrivacySettingsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  access_info?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_devices?: InputMaybe<Scalars["Boolean"]["input"]>;
  manage_cookies?: InputMaybe<Scalars["Boolean"]["input"]>;
  personalised_ads?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_geolocation?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FilterUpdateOneUserReviewInput = {
  AND?: InputMaybe<Array<FilterUpdateOneUserReviewInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneUserReviewInput>>;
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneUserReviewOperatorsInput>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  flagged_by?: InputMaybe<Scalars["MongoID"]["input"]>;
  flagged_reason?: InputMaybe<Scalars["String"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_flagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  reviewer?: InputMaybe<Scalars["MongoID"]["input"]>;
  star_rating?: InputMaybe<Scalars["Float"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumUserReviewType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserReviewOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneUserReview_IdOperatorsInput>;
};

export type FilterUpdateOneUserReviewScoresAskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneUserReviewScoresInput = {
  asker?: InputMaybe<FilterUpdateOneUserReviewScoresAskerInput>;
  overall?: InputMaybe<FilterUpdateOneUserReviewScoresOverallInput>;
  tasker?: InputMaybe<FilterUpdateOneUserReviewScoresTaskerInput>;
};

export type FilterUpdateOneUserReviewScoresOverallInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneUserReviewScoresTaskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneUserReview_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneUserRolesOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneUserSaved_LocationsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterUpdateOneUserSkillsOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type FilterUpdateOneUserUsernameOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  regex?: InputMaybe<Scalars["RegExpAsString"]["input"]>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["MongoID"]["input"]>;
  gte?: InputMaybe<Scalars["MongoID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  lt?: InputMaybe<Scalars["MongoID"]["input"]>;
  lte?: InputMaybe<Scalars["MongoID"]["input"]>;
  ne?: InputMaybe<Scalars["MongoID"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
};

export type HelpPageCategory = {
  __typename?: "HelpPageCategory";
  _id: Scalars["MongoID"]["output"];
  children?: Maybe<Array<Maybe<HelpPageCategoryChildren>>>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  parent?: Maybe<HelpPageCategory>;
  slug?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type HelpPageCategoryParentArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneHelpPageCategoryInput>;
};

export type HelpPageCategoryChildren = {
  __typename?: "HelpPageCategoryChildren";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  children?: Maybe<Array<Maybe<HelpPageCategoryChildrenChildren>>>;
  slug?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type HelpPageCategoryChildrenChildren = {
  __typename?: "HelpPageCategoryChildrenChildren";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type HelpPageCategoryChildrenChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type HelpPageCategoryChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  children?: InputMaybe<
    Array<InputMaybe<HelpPageCategoryChildrenChildrenInput>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type LatestTaskOffers = {
  __typename?: "LatestTaskOffers";
  _id?: Maybe<Scalars["String"]["output"]>;
  offers?: Maybe<Array<Maybe<TaskOffer>>>;
};

export type LikedTaskResponse = {
  __typename?: "LikedTaskResponse";
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type MessageCreateSuccess = {
  __typename?: "MessageCreateSuccess";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MessageReplySuccess = {
  __typename?: "MessageReplySuccess";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MessageReportSuccess = {
  __typename?: "MessageReportSuccess";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MessageSuccess = {
  __typename?: "MessageSuccess";
  thread?: Maybe<Scalars["ID"]["output"]>;
};

export type MessageThread = {
  __typename?: "MessageThread";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  from?: Maybe<User>;
  from_name?: Maybe<Scalars["String"]["output"]>;
  is_flagged?: Maybe<MessageThreadIs_Flagged>;
  messages?: Maybe<Array<Maybe<MessageThreadMessages>>>;
  offer?: Maybe<TaskOffer>;
  task?: Maybe<Task>;
  task_id?: Maybe<Scalars["MongoID"]["output"]>;
  task_name?: Maybe<Scalars["String"]["output"]>;
  to?: Maybe<User>;
  type?: Maybe<EnumMessageThreadType>;
  /** Find the number of asker tasks */
  unreadMessages?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type MessageThreadFromArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type MessageThreadOfferArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskOfferInput>;
};

export type MessageThreadTaskArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskInput>;
};

export type MessageThreadToArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type MessageThreadIs_Flagged = {
  __typename?: "MessageThreadIs_flagged";
  date?: Maybe<Scalars["Date"]["output"]>;
  flaggedBy?: Maybe<Scalars["MongoID"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
};

export type MessageThreadMessages = {
  __typename?: "MessageThreadMessages";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  from?: Maybe<Scalars["MongoID"]["output"]>;
  image?: Maybe<Scalars["JSON"]["output"]>;
  is_read?: Maybe<Scalars["Boolean"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  sent?: Maybe<Scalars["Date"]["output"]>;
};

export type MongoError = ErrorInterface & {
  __typename?: "MongoError";
  /** MongoDB error code */
  code?: Maybe<Scalars["Int"]["output"]>;
  /** MongoDB error message */
  message?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  acceptOffer?: Maybe<MessageSuccess>;
  activateUser?: Maybe<ActivateResponse>;
  addSavedLocation?: Maybe<SavedLocationResponse>;
  adminLogin?: Maybe<AdminUser>;
  ammendOffer?: Maybe<TaskOffer>;
  changeEmail?: Maybe<User>;
  changePassword?: Maybe<User>;
  confirmEmailChangeCode?: Maybe<CodeResponse>;
  confirmPasswordChangeCode?: Maybe<CodeResponse>;
  createAdminUser?: Maybe<AdminUser>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createPermission?: Maybe<CreateOnePermissionPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createPermissionRole?: Maybe<CreateOnePermissionRolePayload>;
  createReviewFromContext?: Maybe<UserReview>;
  createUser?: Maybe<User>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createUserReview?: Maybe<CreateOneUserReviewPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  currencyCreate?: Maybe<CreateOneCurrencyPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  currencyEdit?: Maybe<UpdateOneCurrencyPayload>;
  deactivateUser?: Maybe<ActivateResponse>;
  deleteAdminUsers?: Maybe<DeletedAmount>;
  deleteUsers?: Maybe<DeletedAmount>;
  editAdminUser?: Maybe<AdminUser>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  editPermission?: Maybe<UpdateOnePermissionPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  editPermissionRole?: Maybe<UpdateOnePermissionRolePayload>;
  editUser?: Maybe<User>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  editUserReview?: Maybe<UpdateOneUserReviewPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  enquiryCreate?: Maybe<CreateOneEnquiryPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  enquiryEdit?: Maybe<UpdateOneEnquiryPayload>;
  forgotAdminPassword?: Maybe<AdminUser>;
  forgotPassword?: Maybe<User>;
  googleLogin?: Maybe<CurrentUser>;
  googleRegister?: Maybe<CurrentUser>;
  helpPageCategoryCreate?: Maybe<HelpPageCategory>;
  helpPageCategoryEdit?: Maybe<HelpPageCategory>;
  inviteUsersToBid?: Maybe<Scalars["JSON"]["output"]>;
  likeTask?: Maybe<LikedTaskResponse>;
  login?: Maybe<CurrentUser>;
  markNotificationAsRead?: Maybe<UserNotification>;
  markTaskAsComplete?: Maybe<MessageThread>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  pageCreate?: Maybe<CreateOnePagePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  pageEdit?: Maybe<UpdateOnePagePayload>;
  passwordCheck?: Maybe<PasswordCheck>;
  reinstateTask?: Maybe<SuspendTaskResponse>;
  rejectOffer?: Maybe<Scalars["JSON"]["output"]>;
  removeSavedSearch?: Maybe<Scalars["JSON"]["output"]>;
  replyMessage?: Maybe<MessageReplySuccess>;
  reportMessageThread?: Maybe<MessageReportSuccess>;
  reportReview?: Maybe<ReviewReportSuccess>;
  resetAdminPassword?: Maybe<AdminUser>;
  resetPassword?: Maybe<User>;
  savePushKey?: Maybe<SavedPnKey>;
  sendMessage?: Maybe<MessageCreateSuccess>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  skillCreate?: Maybe<CreateOneSkillPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  skillEdit?: Maybe<UpdateOneSkillPayload>;
  suspendTask?: Maybe<SuspendTaskResponse>;
  swipeTask?: Maybe<Scalars["Boolean"]["output"]>;
  taskCategoryCreate?: Maybe<TaskCategory>;
  taskCategoryDelete?: Maybe<DeletedAmount>;
  taskCategoryEdit?: Maybe<TaskCategory>;
  taskCreate?: Maybe<Task>;
  taskDetailsVerification?: Maybe<TaskDetailsVerificationResponse>;
  taskEdit?: Maybe<Task>;
  taskOfferCreate?: Maybe<TaskOffer>;
  taskOfferDelete?: Maybe<DeletedAmount>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  taskReportCreate?: Maybe<CreateOneTaskReportPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  taskReportEdit?: Maybe<UpdateOneTaskReportPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  taskTypeCreate?: Maybe<CreateOneTaskTypePayload>;
  taskTypeDelete?: Maybe<DeletedAmount>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  taskTypeEdit?: Maybe<UpdateOneTaskTypePayload>;
  toggleSavedSearch?: Maybe<SavedSearch>;
  verifyAdminToken?: Maybe<AdminUser>;
  verifyCode?: Maybe<CodeResponse>;
  withdrawOffer?: Maybe<Scalars["JSON"]["output"]>;
};

export type MutationAcceptOfferArgs = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  offer_id?: InputMaybe<Scalars["ID"]["input"]>;
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationActivateUserArgs = {
  user_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationAddSavedLocationArgs = {
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationAmmendOfferArgs = {
  offer_id?: InputMaybe<Scalars["ID"]["input"]>;
  record?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MutationChangeEmailArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationChangePasswordArgs = {
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationConfirmEmailChangeCodeArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationConfirmPasswordChangeCodeArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateAdminUserArgs = {
  record: CreateOneAdminUserInput;
};

export type MutationCreatePermissionArgs = {
  record: CreateOnePermissionInput;
};

export type MutationCreatePermissionRoleArgs = {
  record: CreateOnePermissionRoleInput;
};

export type MutationCreateReviewFromContextArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  star_rating?: InputMaybe<Scalars["Int"]["input"]>;
  task?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationCreateUserArgs = {
  record: CreateOneUserInput;
};

export type MutationCreateUserReviewArgs = {
  record: CreateOneUserReviewInput;
};

export type MutationCurrencyCreateArgs = {
  record: CreateOneCurrencyInput;
};

export type MutationCurrencyEditArgs = {
  filter?: InputMaybe<FilterUpdateOneCurrencyInput>;
  record: UpdateOneCurrencyInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneCurrencyInput>;
};

export type MutationDeactivateUserArgs = {
  user_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationDeleteAdminUsersArgs = {
  input?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationDeleteUsersArgs = {
  input?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationEditAdminUserArgs = {
  filter?: InputMaybe<FilterUpdateOneAdminUserInput>;
  record: UpdateOneAdminUserInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneAdminUserInput>;
};

export type MutationEditPermissionArgs = {
  filter?: InputMaybe<FilterUpdateOnePermissionInput>;
  record: UpdateOnePermissionInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOnePermissionInput>;
};

export type MutationEditPermissionRoleArgs = {
  filter?: InputMaybe<FilterUpdateOnePermissionRoleInput>;
  record: UpdateOnePermissionRoleInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOnePermissionRoleInput>;
};

export type MutationEditUserArgs = {
  filter?: InputMaybe<FilterUpdateOneUserInput>;
  record: UpdateOneUserInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneUserInput>;
};

export type MutationEditUserReviewArgs = {
  filter?: InputMaybe<FilterUpdateOneUserReviewInput>;
  record: UpdateOneUserReviewInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneUserReviewInput>;
};

export type MutationEnquiryCreateArgs = {
  record: CreateOneEnquiryInput;
};

export type MutationEnquiryEditArgs = {
  filter?: InputMaybe<FilterUpdateOneEnquiryInput>;
  record: UpdateOneEnquiryInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneEnquiryInput>;
};

export type MutationForgotAdminPasswordArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationForgotPasswordArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGoogleLoginArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGoogleRegisterArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationHelpPageCategoryCreateArgs = {
  record: CreateOneHelpPageCategoryInput;
};

export type MutationHelpPageCategoryEditArgs = {
  filter?: InputMaybe<FilterUpdateOneHelpPageCategoryInput>;
  record: UpdateOneHelpPageCategoryInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneHelpPageCategoryInput>;
};

export type MutationInviteUsersToBidArgs = {
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
  user_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationLikeTaskArgs = {
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationMarkNotificationAsReadArgs = {
  notification_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationMarkTaskAsCompleteArgs = {
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationPageCreateArgs = {
  record: CreateOnePageInput;
};

export type MutationPageEditArgs = {
  filter?: InputMaybe<FilterUpdateOnePageInput>;
  record: UpdateOnePageInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOnePageInput>;
};

export type MutationPasswordCheckArgs = {
  email: Scalars["String"]["input"];
};

export type MutationReinstateTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRejectOfferArgs = {
  offer_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationRemoveSavedSearchArgs = {
  savedSearchId: Scalars["String"]["input"];
};

export type MutationReplyMessageArgs = {
  image?: InputMaybe<Scalars["JSON"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  thread_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationReportMessageThreadArgs = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationReportReviewArgs = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetAdminPasswordArgs = {
  password?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetPasswordArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSavePushKeyArgs = {
  key?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSendMessageArgs = {
  image?: InputMaybe<Scalars["JSON"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  offer_id?: InputMaybe<Scalars["ID"]["input"]>;
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationSkillCreateArgs = {
  record: CreateOneSkillInput;
};

export type MutationSkillEditArgs = {
  filter?: InputMaybe<FilterUpdateOneSkillInput>;
  record: UpdateOneSkillInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneSkillInput>;
};

export type MutationSuspendTaskArgs = {
  id: Scalars["ID"]["input"];
  suspended_reason: Scalars["String"]["input"];
};

export type MutationSwipeTaskArgs = {
  record: CreateOneSwipedTaskInput;
};

export type MutationTaskCategoryCreateArgs = {
  record: CreateOneTaskCategoryInput;
};

export type MutationTaskCategoryDeleteArgs = {
  input?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationTaskCategoryEditArgs = {
  filter?: InputMaybe<FilterUpdateOneTaskCategoryInput>;
  record: UpdateOneTaskCategoryInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneTaskCategoryInput>;
};

export type MutationTaskCreateArgs = {
  record: CreateOneTaskInput;
};

export type MutationTaskDetailsVerificationArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTaskEditArgs = {
  filter?: InputMaybe<FilterUpdateOneTaskInput>;
  record: UpdateOneTaskInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneTaskInput>;
};

export type MutationTaskOfferCreateArgs = {
  record: CreateOneTaskOfferInput;
};

export type MutationTaskOfferDeleteArgs = {
  input?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationTaskReportCreateArgs = {
  record: CreateOneTaskReportInput;
};

export type MutationTaskReportEditArgs = {
  filter?: InputMaybe<FilterUpdateOneTaskReportInput>;
  record: UpdateOneTaskReportInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneTaskReportInput>;
};

export type MutationTaskTypeCreateArgs = {
  record: CreateOneTaskTypeInput;
};

export type MutationTaskTypeDeleteArgs = {
  input?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationTaskTypeEditArgs = {
  filter?: InputMaybe<FilterUpdateOneTaskTypeInput>;
  record: UpdateOneTaskTypeInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortUpdateOneTaskTypeInput>;
};

export type MutationToggleSavedSearchArgs = {
  savedSearchId: Scalars["String"]["input"];
};

export type MutationVerifyAdminTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationVerifyCodeArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationWithdrawOfferArgs = {
  offer_id?: InputMaybe<Scalars["ID"]["input"]>;
  withdrawal_reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type OffersByGroup = {
  __typename?: "OffersByGroup";
  _id?: Maybe<Scalars["String"]["output"]>;
  count?: Maybe<Scalars["Int"]["output"]>;
  offers?: Maybe<Array<Maybe<TaskOffer>>>;
};

export type Page = {
  __typename?: "Page";
  _id: Scalars["MongoID"]["output"];
  content?: Maybe<Scalars["JSON"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type PaginationInfo = {
  __typename?: "PaginationInfo";
  currentPage: Scalars["Int"]["output"];
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
  itemCount?: Maybe<Scalars["Int"]["output"]>;
  pageCount?: Maybe<Scalars["Int"]["output"]>;
  perPage: Scalars["Int"]["output"];
};

export type PasswordCheck = {
  __typename?: "PasswordCheck";
  email?: Maybe<Scalars["String"]["output"]>;
  hasPassword?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Permission = {
  __typename?: "Permission";
  _id: Scalars["MongoID"]["output"];
  code: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

/** List of items with pagination. */
export type PermissionPagination = {
  __typename?: "PermissionPagination";
  /** Total object count. */
  count?: Maybe<Scalars["Int"]["output"]>;
  /** Array of objects. */
  items?: Maybe<Array<Permission>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PermissionRole = {
  __typename?: "PermissionRole";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  permissions: Array<Permission>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type PermissionRolePermissionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyPermissionInput>;
};

/** List of items with pagination. */
export type PermissionRolePagination = {
  __typename?: "PermissionRolePagination";
  /** Total object count. */
  count?: Maybe<Scalars["Int"]["output"]>;
  /** Array of objects. */
  items?: Maybe<Array<PermissionRole>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Query = {
  __typename?: "Query";
  checkEmailExists?: Maybe<User>;
  checkUsernameExists?: Maybe<Scalars["Boolean"]["output"]>;
  currencyGet?: Maybe<Currency>;
  currencyList: Array<Currency>;
  currentAdminUser?: Maybe<CurrentAdminUser>;
  currentUser?: Maybe<CurrentUser>;
  enquiryGet?: Maybe<Enquiry>;
  enquiryList: Array<Enquiry>;
  getAdminUser?: Maybe<AdminUser>;
  getLikedSearches?: Maybe<Array<Maybe<SavedSearch>>>;
  getLikedTasks?: Maybe<Array<Maybe<Task>>>;
  getMessageThread?: Maybe<MessageThread>;
  getMessageThreads?: Maybe<Array<Maybe<MessageThread>>>;
  getMostPopularTasks?: Maybe<Array<Maybe<Task>>>;
  getMyRecommendedTasks?: Maybe<Array<Maybe<Task>>>;
  getPermission?: Maybe<Permission>;
  getPermissionRole?: Maybe<PermissionRole>;
  getRecentlyViewedTasks?: Maybe<Array<Maybe<Task>>>;
  getRelatedTasks?: Maybe<Array<Maybe<Task>>>;
  getSavedSearches?: Maybe<Array<Maybe<SavedSearch>>>;
  getSingleMessageThread?: Maybe<MessageThread>;
  getSwipableTasks?: Maybe<Array<Maybe<Task>>>;
  getTaskOffersByType?: Maybe<Array<Maybe<OffersByGroup>>>;
  getUser?: Maybe<User>;
  getUserJobs?: Maybe<Array<Maybe<Task>>>;
  getUserNotifications?: Maybe<Array<Maybe<UserNotification>>>;
  getUserReview?: Maybe<UserReview>;
  getUserTasks?: Maybe<Array<Maybe<Task>>>;
  getUsersBySkills?: Maybe<Array<Maybe<User>>>;
  helpPageCategoryGet?: Maybe<HelpPageCategory>;
  helpPageCategoryList: Array<HelpPageCategory>;
  listAdminUsers: Array<AdminUser>;
  listMessageThreads: Array<MessageThread>;
  listPermission?: Maybe<PermissionPagination>;
  listPermissionRoles?: Maybe<PermissionRolePagination>;
  listUserReview?: Maybe<UserReviewPagination>;
  listUsers: Array<User>;
  mostPopularCategories?: Maybe<Scalars["JSON"]["output"]>;
  pageGet?: Maybe<Page>;
  pageList: Array<Page>;
  skillGet?: Maybe<Skill>;
  skillList: Array<Skill>;
  skillSearch?: Maybe<Array<Maybe<Skill>>>;
  taskCategoryGet?: Maybe<TaskCategory>;
  taskCategoryGuestimation?: Maybe<Array<Maybe<TaskCategory>>>;
  taskCategoryList: Array<TaskCategory>;
  taskGet?: Maybe<Task>;
  taskGetNucleus?: Maybe<Task>;
  taskList: Array<Task>;
  taskOfferGet?: Maybe<TaskOffer>;
  taskReportGet?: Maybe<TaskReport>;
  taskReportList: Array<TaskReport>;
  taskSearch?: Maybe<Array<Maybe<Task>>>;
  taskTypeGet?: Maybe<TaskType>;
  taskTypeList: Array<TaskType>;
  tasksExpiringToday?: Maybe<Array<Maybe<Task>>>;
  userNotificationGet?: Maybe<UserNotification>;
  userNotificationList: Array<UserNotification>;
};

export type QueryCheckEmailExistsArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCheckUsernameExistsArgs = {
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCurrencyGetArgs = {
  filter?: InputMaybe<FilterFindOneCurrencyInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneCurrencyInput>;
};

export type QueryCurrencyListArgs = {
  filter?: InputMaybe<FilterFindManyCurrencyInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyCurrencyInput>;
};

export type QueryEnquiryGetArgs = {
  filter?: InputMaybe<FilterFindOneEnquiryInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneEnquiryInput>;
};

export type QueryEnquiryListArgs = {
  filter?: InputMaybe<FilterFindManyEnquiryInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyEnquiryInput>;
};

export type QueryGetAdminUserArgs = {
  filter?: InputMaybe<FilterFindOneAdminUserInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneAdminUserInput>;
};

export type QueryGetMessageThreadArgs = {
  thread_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetMostPopularTasksArgs = {
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  filter?: InputMaybe<FilterFindManyTaskInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskInput>;
};

export type QueryGetMyRecommendedTasksArgs = {
  filter?: InputMaybe<FilterFindManyTaskInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskInput>;
};

export type QueryGetPermissionArgs = {
  _id: Scalars["MongoID"]["input"];
};

export type QueryGetPermissionRoleArgs = {
  _id: Scalars["MongoID"]["input"];
};

export type QueryGetRelatedTasksArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetSingleMessageThreadArgs = {
  filter?: InputMaybe<FilterFindOneMessageThreadInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneMessageThreadInput>;
};

export type QueryGetSwipableTasksArgs = {
  distance?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetTaskOffersByTypeArgs = {
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetUserArgs = {
  filter?: InputMaybe<FilterFindOneUserInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type QueryGetUserJobsArgs = {
  filter?: InputMaybe<Scalars["JSON"]["input"]>;
  user_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetUserNotificationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetUserReviewArgs = {
  filter?: InputMaybe<FilterFindOneUserReviewInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserReviewInput>;
};

export type QueryGetUserTasksArgs = {
  user_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetUsersBySkillsArgs = {
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryHelpPageCategoryGetArgs = {
  filter?: InputMaybe<FilterFindOneHelpPageCategoryInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneHelpPageCategoryInput>;
};

export type QueryHelpPageCategoryListArgs = {
  filter?: InputMaybe<FilterFindManyHelpPageCategoryInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyHelpPageCategoryInput>;
};

export type QueryListAdminUsersArgs = {
  filter?: InputMaybe<FilterFindManyAdminUserInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyAdminUserInput>;
};

export type QueryListMessageThreadsArgs = {
  filter?: InputMaybe<FilterFindManyMessageThreadInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyMessageThreadInput>;
};

export type QueryListPermissionArgs = {
  filter?: InputMaybe<FilterFindManyPermissionInput>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyPermissionInput>;
};

export type QueryListPermissionRolesArgs = {
  filter?: InputMaybe<FilterFindManyPermissionRoleInput>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyPermissionRoleInput>;
};

export type QueryListUserReviewArgs = {
  filter?: InputMaybe<FilterFindManyUserReviewInput>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyUserReviewInput>;
};

export type QueryListUsersArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyUserInput>;
};

export type QueryMostPopularCategoriesArgs = {
  filter?: InputMaybe<FilterFindManyTaskInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskInput>;
};

export type QueryPageGetArgs = {
  filter?: InputMaybe<FilterFindOnePageInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOnePageInput>;
};

export type QueryPageListArgs = {
  filter?: InputMaybe<FilterFindManyPageInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyPageInput>;
};

export type QuerySkillGetArgs = {
  filter?: InputMaybe<FilterFindOneSkillInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneSkillInput>;
};

export type QuerySkillListArgs = {
  filter?: InputMaybe<FilterFindManySkillInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManySkillInput>;
};

export type QuerySkillSearchArgs = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTaskCategoryGetArgs = {
  filter?: InputMaybe<FilterFindOneTaskCategoryInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskCategoryInput>;
};

export type QueryTaskCategoryGuestimationArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTaskCategoryListArgs = {
  filter?: InputMaybe<FilterFindManyTaskCategoryInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskCategoryInput>;
};

export type QueryTaskGetArgs = {
  filter?: InputMaybe<FilterFindOneTaskInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskInput>;
};

export type QueryTaskGetNucleusArgs = {
  filter?: InputMaybe<FilterFindOneTaskInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskInput>;
};

export type QueryTaskListArgs = {
  filter?: InputMaybe<FilterFindManyTaskInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskInput>;
};

export type QueryTaskOfferGetArgs = {
  filter?: InputMaybe<FilterFindOneTaskOfferInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskOfferInput>;
};

export type QueryTaskReportGetArgs = {
  filter?: InputMaybe<FilterFindOneTaskReportInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskReportInput>;
};

export type QueryTaskReportListArgs = {
  filter?: InputMaybe<FilterFindManyTaskReportInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskReportInput>;
};

export type QueryTaskSearchArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  minimum_asker_rating?: InputMaybe<Scalars["Int"]["input"]>;
  payment_terms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTaskTypeGetArgs = {
  filter?: InputMaybe<FilterFindOneTaskTypeInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskTypeInput>;
};

export type QueryTaskTypeListArgs = {
  filter?: InputMaybe<FilterFindManyTaskTypeInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskTypeInput>;
};

export type QueryUserNotificationGetArgs = {
  filter?: InputMaybe<FilterFindOneUserNotificationInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserNotificationInput>;
};

export type QueryUserNotificationListArgs = {
  filter?: InputMaybe<FilterFindManyUserNotificationInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyUserNotificationInput>;
};

export type ReviewReportSuccess = {
  __typename?: "ReviewReportSuccess";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: "RuntimeError";
  /** Runtime error message */
  message?: Maybe<Scalars["String"]["output"]>;
};

export type SavedLocationResponse = {
  __typename?: "SavedLocationResponse";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SavedPnKey = {
  __typename?: "SavedPNKey";
  key?: Maybe<Scalars["String"]["output"]>;
};

export type SavedSearch = {
  __typename?: "SavedSearch";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  like?: Maybe<Scalars["Boolean"]["output"]>;
  search_term: Scalars["String"]["output"];
  tasks?: Maybe<Array<Maybe<Scalars["MongoID"]["output"]>>>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<Scalars["MongoID"]["output"]>;
};

export type Skill = {
  __typename?: "Skill";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export enum SortFindManyAdminUserInput {
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyCurrencyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyEnquiryInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyHelpPageCategoryInput {
  ParentAsc = "PARENT_ASC",
  ParentDesc = "PARENT_DESC",
  SlugAsc = "SLUG_ASC",
  SlugDesc = "SLUG_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyMessageThreadInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyPageInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyPermissionInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyPermissionRoleInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManySkillInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyTaskCategoryInput {
  ParentAsc = "PARENT_ASC",
  ParentDesc = "PARENT_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyTaskInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyTaskReportInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyTaskTypeInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyUserInput {
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  RolesAsc = "ROLES_ASC",
  RolesDesc = "ROLES_DESC",
  SkillsAsc = "SKILLS_ASC",
  SkillsDesc = "SKILLS_DESC",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyUserNotificationInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyUserReviewInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneAdminUserInput {
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneCurrencyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneEnquiryInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneHelpPageCategoryInput {
  ParentAsc = "PARENT_ASC",
  ParentDesc = "PARENT_DESC",
  SlugAsc = "SLUG_ASC",
  SlugDesc = "SLUG_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneMessageThreadInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOnePageInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOnePermissionRoleInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneSkillInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneTaskCategoryInput {
  ParentAsc = "PARENT_ASC",
  ParentDesc = "PARENT_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneTaskInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneTaskOfferInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneTaskReportInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneTaskTypeInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneUserInput {
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  RolesAsc = "ROLES_ASC",
  RolesDesc = "ROLES_DESC",
  SkillsAsc = "SKILLS_ASC",
  SkillsDesc = "SKILLS_DESC",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneUserNotificationInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneUserReviewInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneAdminUserInput {
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneCurrencyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneEnquiryInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneHelpPageCategoryInput {
  ParentAsc = "PARENT_ASC",
  ParentDesc = "PARENT_DESC",
  SlugAsc = "SLUG_ASC",
  SlugDesc = "SLUG_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOnePageInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOnePermissionInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOnePermissionRoleInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneSkillInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneTaskCategoryInput {
  ParentAsc = "PARENT_ASC",
  ParentDesc = "PARENT_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneTaskInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneTaskReportInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneTaskTypeInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneUserInput {
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  RolesAsc = "ROLES_ASC",
  RolesDesc = "ROLES_DESC",
  SkillsAsc = "SKILLS_ASC",
  SkillsDesc = "SKILLS_DESC",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortUpdateOneUserReviewInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export type SuspendTaskResponse = {
  __typename?: "SuspendTaskResponse";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Task = {
  __typename?: "Task";
  _id: Scalars["MongoID"]["output"];
  accepted_offer_id?: Maybe<Scalars["MongoID"]["output"]>;
  addressInput?: Maybe<TaskAddressInput>;
  categories?: Maybe<Array<Maybe<TaskCategories>>>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  distance?: Maybe<Scalars["BSONDecimal"]["output"]>;
  duration?: Maybe<TaskDuration>;
  end_date?: Maybe<Scalars["Date"]["output"]>;
  /** Human friendly end date */
  human_friendly_end_date?: Maybe<Scalars["String"]["output"]>;
  images?: Maybe<Scalars["JSON"]["output"]>;
  is_active?: Maybe<Scalars["Boolean"]["output"]>;
  is_remote?: Maybe<Scalars["Boolean"]["output"]>;
  is_suspended?: Maybe<Scalars["Boolean"]["output"]>;
  /** Find the latest offers for the task */
  latestOffers?: Maybe<Array<Maybe<LatestTaskOffers>>>;
  location?: Maybe<TaskLocation>;
  number_of_likes?: Maybe<Scalars["Float"]["output"]>;
  number_of_offers?: Maybe<Scalars["Float"]["output"]>;
  payment_terms_accepted?: Maybe<Array<Maybe<EnumTaskPayment_Terms_Accepted>>>;
  reminders?: Maybe<Scalars["JSON"]["output"]>;
  /** Find any reports made about this task */
  reports?: Maybe<Array<Maybe<TaskReport>>>;
  start_date?: Maybe<Scalars["Date"]["output"]>;
  status?: Maybe<EnumTaskStatus>;
  suspended_reason?: Maybe<Scalars["String"]["output"]>;
  /** How many hours/days left in task */
  time_left?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type?: Maybe<EnumTaskType>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user_id?: Maybe<User>;
  visible_from?: Maybe<Scalars["Date"]["output"]>;
  xxx?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TaskLatestOffersArgs = {
  task_id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TaskUser_IdArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type TaskAddressInput = {
  __typename?: "TaskAddressInput";
  place_id?: Maybe<Scalars["String"]["output"]>;
  term?: Maybe<Scalars["String"]["output"]>;
  town?: Maybe<Scalars["String"]["output"]>;
};

export type TaskAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type TaskCategories = {
  __typename?: "TaskCategories";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  category?: Maybe<TaskCategory>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskCategoriesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TaskCategory = {
  __typename?: "TaskCategory";
  _id: Scalars["MongoID"]["output"];
  ancestors?: Maybe<Array<Maybe<TaskCategoryAncestors>>>;
  /** Array of children */
  children?: Maybe<Array<Maybe<TaskCategory>>>;
  colour?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  icon?: Maybe<Scalars["JSON"]["output"]>;
  parent?: Maybe<TaskCategory>;
  task_types: Array<TaskType>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type TaskCategoryChildrenArgs = {
  parent?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TaskCategoryParentArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskCategoryInput>;
};

export type TaskCategoryTask_TypesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyTaskTypeInput>;
};

export type TaskCategoryAncestors = {
  __typename?: "TaskCategoryAncestors";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskCategoryAncestorsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TaskDetailsVerificationResponse = {
  __typename?: "TaskDetailsVerificationResponse";
  error?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TaskDuration = {
  __typename?: "TaskDuration";
  unit?: Maybe<EnumTaskDurationUnit>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskDurationInput = {
  unit?: InputMaybe<EnumTaskDurationUnit>;
  value?: InputMaybe<Scalars["Float"]["input"]>;
};

export type TaskLocation = {
  __typename?: "TaskLocation";
  coordinates?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  place_id?: Maybe<Scalars["String"]["output"]>;
  term?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type TaskLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type TaskOffer = {
  __typename?: "TaskOffer";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  exchange_method?: Maybe<Scalars["String"]["output"]>;
  images?: Maybe<Scalars["JSON"]["output"]>;
  is_accepted?: Maybe<Scalars["Boolean"]["output"]>;
  is_anonymous?: Maybe<Scalars["Boolean"]["output"]>;
  is_rejected?: Maybe<Scalars["Boolean"]["output"]>;
  is_withdrawn?: Maybe<Scalars["Boolean"]["output"]>;
  payment_method?: Maybe<EnumTaskOfferPayment_Method>;
  save_why_me?: Maybe<Scalars["Boolean"]["output"]>;
  swap_summary?: Maybe<Scalars["String"]["output"]>;
  swap_task_id?: Maybe<Scalars["MongoID"]["output"]>;
  task?: Maybe<Scalars["MongoID"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<User>;
  value?: Maybe<Scalars["String"]["output"]>;
  value_type?: Maybe<Scalars["String"]["output"]>;
  why_me?: Maybe<Scalars["String"]["output"]>;
  withdrawal_reason?: Maybe<Scalars["String"]["output"]>;
};

export type TaskOfferUserArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type TaskReport = {
  __typename?: "TaskReport";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  task?: Maybe<Scalars["MongoID"]["output"]>;
  type?: Maybe<EnumTaskReportType>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<Scalars["MongoID"]["output"]>;
};

export type TaskType = {
  __typename?: "TaskType";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  synonyms?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type UpdateOneAdminUserInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Scalars["MongoID"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOneCurrencyInput = {
  abbreviation?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOneCurrencyPayload = {
  __typename?: "UpdateOneCurrencyPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Currency>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneEnquiryInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type UpdateOneEnquiryPayload = {
  __typename?: "UpdateOneEnquiryPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Enquiry>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneHelpPageCategoryChildrenChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneHelpPageCategoryChildrenInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  children?: InputMaybe<
    Array<InputMaybe<UpdateOneHelpPageCategoryChildrenChildrenInput>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneHelpPageCategoryInput = {
  children?: InputMaybe<
    Array<InputMaybe<UpdateOneHelpPageCategoryChildrenInput>>
  >;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOnePageInput = {
  content?: InputMaybe<Scalars["JSON"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOnePagePayload = {
  __typename?: "UpdateOnePagePayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Page>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOnePermissionInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOnePermissionPayload = {
  __typename?: "UpdateOnePermissionPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Permission>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOnePermissionRoleInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOnePermissionRolePayload = {
  __typename?: "UpdateOnePermissionRolePayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<PermissionRole>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneSkillInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOneSkillPayload = {
  __typename?: "UpdateOneSkillPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Skill>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneTaskAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneTaskCategoriesInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneTaskCategoryAncestorsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneTaskCategoryInput = {
  ancestors?: InputMaybe<
    Array<InputMaybe<UpdateOneTaskCategoryAncestorsInput>>
  >;
  colour?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  icon?: InputMaybe<Scalars["JSON"]["input"]>;
  parent?: InputMaybe<Scalars["MongoID"]["input"]>;
  task_types?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOneTaskDurationInput = {
  unit?: InputMaybe<EnumTaskDurationUnit>;
  value?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateOneTaskInput = {
  accepted_offer_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  addressInput?: InputMaybe<UpdateOneTaskAddressInputInput>;
  categories?: InputMaybe<Array<InputMaybe<UpdateOneTaskCategoriesInput>>>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  distance?: InputMaybe<Scalars["BSONDecimal"]["input"]>;
  duration?: InputMaybe<UpdateOneTaskDurationInput>;
  end_date?: InputMaybe<Scalars["Date"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_remote?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_suspended?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<UpdateOneTaskLocationInput>;
  number_of_likes?: InputMaybe<Scalars["Float"]["input"]>;
  number_of_offers?: InputMaybe<Scalars["Float"]["input"]>;
  payment_terms_accepted?: InputMaybe<
    Array<InputMaybe<EnumTaskPayment_Terms_Accepted>>
  >;
  reminders?: InputMaybe<Scalars["JSON"]["input"]>;
  start_date?: InputMaybe<Scalars["Date"]["input"]>;
  status?: InputMaybe<EnumTaskStatus>;
  suspended_reason?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<EnumTaskType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user_id?: InputMaybe<Scalars["MongoID"]["input"]>;
  visible_from?: InputMaybe<Scalars["Date"]["input"]>;
  xxx?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UpdateOneTaskLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneTaskReportInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumTaskReportType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type UpdateOneTaskReportPayload = {
  __typename?: "UpdateOneTaskReportPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<TaskReport>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneTaskTypeInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  synonyms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateOneTaskTypePayload = {
  __typename?: "UpdateOneTaskTypePayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<TaskType>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneUserAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneUserInput = {
  addressInput?: InputMaybe<UpdateOneUserAddressInputInput>;
  asker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  asker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  has_password?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_email_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_profile_complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  liked_tasks?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  location?: InputMaybe<UpdateOneUserLocationInput>;
  notification_preferences?: InputMaybe<Scalars["JSON"]["input"]>;
  notifications_sent?: InputMaybe<Scalars["JSON"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  permission_role?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  privacySettings?: InputMaybe<UpdateOneUserPrivacySettingsInput>;
  profile_description?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["JSON"]["input"]>;
  pushKey?: InputMaybe<Scalars["String"]["input"]>;
  reset_token?: InputMaybe<Scalars["String"]["input"]>;
  reviewScores?: InputMaybe<UpdateOneUserReviewScoresInput>;
  roles?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  saved_locations?: InputMaybe<
    Array<InputMaybe<UpdateOneUserSaved_LocationsInput>>
  >;
  saved_task_messages?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  skills?: InputMaybe<Array<InputMaybe<Scalars["MongoID"]["input"]>>>;
  tasker_review_average?: InputMaybe<Scalars["Float"]["input"]>;
  tasker_review_count?: InputMaybe<Scalars["Float"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  tokenExpiry?: InputMaybe<Scalars["Date"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneUserLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneUserPrivacySettingsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  access_info?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_devices?: InputMaybe<Scalars["Boolean"]["input"]>;
  manage_cookies?: InputMaybe<Scalars["Boolean"]["input"]>;
  personalised_ads?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_geolocation?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UpdateOneUserReviewInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  flagged_by?: InputMaybe<Scalars["MongoID"]["input"]>;
  flagged_reason?: InputMaybe<Scalars["String"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_flagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_rejected?: InputMaybe<Scalars["Boolean"]["input"]>;
  reviewer?: InputMaybe<Scalars["MongoID"]["input"]>;
  star_rating?: InputMaybe<Scalars["Float"]["input"]>;
  task?: InputMaybe<Scalars["MongoID"]["input"]>;
  type?: InputMaybe<EnumUserReviewType>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  user?: InputMaybe<Scalars["MongoID"]["input"]>;
};

export type UpdateOneUserReviewPayload = {
  __typename?: "UpdateOneUserReviewPayload";
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<UserReview>;
  /** Document ID */
  recordId?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UpdateOneUserReviewScoresAskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneUserReviewScoresInput = {
  asker?: InputMaybe<UpdateOneUserReviewScoresAskerInput>;
  overall?: InputMaybe<UpdateOneUserReviewScoresOverallInput>;
  tasker?: InputMaybe<UpdateOneUserReviewScoresTaskerInput>;
};

export type UpdateOneUserReviewScoresOverallInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneUserReviewScoresTaskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOneUserSaved_LocationsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  _id: Scalars["MongoID"]["output"];
  addressInput?: Maybe<UserAddressInput>;
  asker_review_average?: Maybe<Scalars["Float"]["output"]>;
  asker_review_count?: Maybe<Scalars["Float"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  dob?: Maybe<Scalars["Date"]["output"]>;
  email: Scalars["String"]["output"];
  first_name: Scalars["String"]["output"];
  gender?: Maybe<Scalars["String"]["output"]>;
  goal?: Maybe<Scalars["String"]["output"]>;
  has_password?: Maybe<Scalars["Boolean"]["output"]>;
  is_active?: Maybe<Scalars["Boolean"]["output"]>;
  is_admin?: Maybe<Scalars["Boolean"]["output"]>;
  is_email_verified?: Maybe<Scalars["Boolean"]["output"]>;
  is_profile_complete?: Maybe<Scalars["Boolean"]["output"]>;
  last_name: Scalars["String"]["output"];
  liked_tasks?: Maybe<Array<Maybe<Scalars["MongoID"]["output"]>>>;
  location?: Maybe<UserLocation>;
  notification_preferences?: Maybe<Scalars["JSON"]["output"]>;
  notifications_sent?: Maybe<Scalars["JSON"]["output"]>;
  /** Find the number of asker tasks */
  number_of_asker_tasks?: Maybe<Scalars["Int"]["output"]>;
  /** Find the number of tasker tasks */
  number_of_tasker_tasks?: Maybe<Scalars["Int"]["output"]>;
  permission_role: Array<PermissionRole>;
  phone?: Maybe<Scalars["String"]["output"]>;
  privacySettings?: Maybe<UserPrivacySettings>;
  profile_description?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["JSON"]["output"]>;
  pushKey?: Maybe<Scalars["String"]["output"]>;
  reset_token?: Maybe<Scalars["String"]["output"]>;
  reviewScores?: Maybe<UserReviewScores>;
  roles?: Maybe<Array<Maybe<Scalars["MongoID"]["output"]>>>;
  saved_locations?: Maybe<Array<Maybe<UserSaved_Locations>>>;
  saved_task_messages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  skills: Array<Skill>;
  tasker_review_average?: Maybe<Scalars["Float"]["output"]>;
  tasker_review_count?: Maybe<Scalars["Float"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  tokenExpiry?: Maybe<Scalars["Date"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UserPermission_RoleArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManyPermissionRoleInput>;
};

export type UserSkillsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindManySkillInput>;
};

export type UserAddressInput = {
  __typename?: "UserAddressInput";
  place_id?: Maybe<Scalars["String"]["output"]>;
  term?: Maybe<Scalars["String"]["output"]>;
  town?: Maybe<Scalars["String"]["output"]>;
};

export type UserAddressInputInput = {
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
  town?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserLocation = {
  __typename?: "UserLocation";
  coordinates?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UserLocationInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNotification = {
  __typename?: "UserNotification";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  date_sent?: Maybe<Scalars["Date"]["output"]>;
  from?: Maybe<Scalars["MongoID"]["output"]>;
  message?: Maybe<Scalars["JSON"]["output"]>;
  read?: Maybe<Scalars["Boolean"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user_id?: Maybe<Scalars["MongoID"]["output"]>;
};

export type UserPrivacySettings = {
  __typename?: "UserPrivacySettings";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  access_info?: Maybe<Scalars["Boolean"]["output"]>;
  link_devices?: Maybe<Scalars["Boolean"]["output"]>;
  manage_cookies?: Maybe<Scalars["Boolean"]["output"]>;
  personalised_ads?: Maybe<Scalars["Boolean"]["output"]>;
  use_geolocation?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UserPrivacySettingsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  access_info?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_devices?: InputMaybe<Scalars["Boolean"]["input"]>;
  manage_cookies?: InputMaybe<Scalars["Boolean"]["input"]>;
  personalised_ads?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_geolocation?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReview = {
  __typename?: "UserReview";
  _id: Scalars["MongoID"]["output"];
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  flagged_by?: Maybe<User>;
  flagged_reason?: Maybe<Scalars["String"]["output"]>;
  is_anonymous?: Maybe<Scalars["Boolean"]["output"]>;
  is_flagged?: Maybe<Scalars["Boolean"]["output"]>;
  is_rejected?: Maybe<Scalars["Boolean"]["output"]>;
  reviewer?: Maybe<User>;
  star_rating?: Maybe<Scalars["Float"]["output"]>;
  task?: Maybe<Task>;
  type?: Maybe<EnumUserReviewType>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<User>;
};

export type UserReviewFlagged_ByArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type UserReviewReviewerArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

export type UserReviewTaskArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneTaskInput>;
};

export type UserReviewUserArgs = {
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFindOneUserInput>;
};

/** List of items with pagination. */
export type UserReviewPagination = {
  __typename?: "UserReviewPagination";
  /** Total object count. */
  count?: Maybe<Scalars["Int"]["output"]>;
  /** Array of objects. */
  items?: Maybe<Array<UserReview>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type UserReviewScores = {
  __typename?: "UserReviewScores";
  asker?: Maybe<UserReviewScoresAsker>;
  overall?: Maybe<UserReviewScoresOverall>;
  tasker?: Maybe<UserReviewScoresTasker>;
};

export type UserReviewScoresAsker = {
  __typename?: "UserReviewScoresAsker";
  average?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["String"]["output"]>;
};

export type UserReviewScoresAskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserReviewScoresInput = {
  asker?: InputMaybe<UserReviewScoresAskerInput>;
  overall?: InputMaybe<UserReviewScoresOverallInput>;
  tasker?: InputMaybe<UserReviewScoresTaskerInput>;
};

export type UserReviewScoresOverall = {
  __typename?: "UserReviewScoresOverall";
  average?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["String"]["output"]>;
};

export type UserReviewScoresOverallInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserReviewScoresTasker = {
  __typename?: "UserReviewScoresTasker";
  average?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["String"]["output"]>;
};

export type UserReviewScoresTaskerInput = {
  average?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserSaved_Locations = {
  __typename?: "UserSaved_locations";
  _id?: Maybe<Scalars["MongoID"]["output"]>;
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
  place_id?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type UserSaved_LocationsInput = {
  _id?: InputMaybe<Scalars["MongoID"]["input"]>;
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type ValidationError = ErrorInterface & {
  __typename?: "ValidationError";
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars["String"]["output"]>;
};

export type ValidatorError = {
  __typename?: "ValidatorError";
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars["Int"]["output"];
  /** Validation error message */
  message?: Maybe<Scalars["String"]["output"]>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars["String"]["output"]>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars["JSON"]["output"]>;
};

export type CurrentAdminUser = {
  __typename?: "currentAdminUser";
  isAdmin?: Maybe<Scalars["Boolean"]["output"]>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  user?: Maybe<AdminUser>;
};

export type GetTaskListQueryVariables = Exact<{ [key: string]: never }>;

export type GetTaskListQuery = {
  __typename?: "Query";
  taskList: Array<{
    __typename?: "Task";
    _id: any;
    title: string;
    description?: string | null;
    status?: EnumTaskStatus | null;
    type?: EnumTaskType | null;
    is_active?: boolean | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    number_of_offers?: number | null;
    number_of_likes?: number | null;
    human_friendly_end_date?: string | null;
    time_left?: string | null;
  }>;
};

export type GetUserTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserTasksQuery = {
  __typename?: "Query";
  getUserTasks?: Array<{
    __typename?: "Task";
    _id: any;
    title: string;
    description?: string | null;
    status?: EnumTaskStatus | null;
    type?: EnumTaskType | null;
    is_active?: boolean | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    number_of_offers?: number | null;
    number_of_likes?: number | null;
    human_friendly_end_date?: string | null;
    time_left?: string | null;
  } | null> | null;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?: {
    __typename?: "CurrentUser";
    isSuperAdmin?: boolean | null;
    unReadMessages?: number | null;
    user?: { __typename?: "User"; _id: any; email: string } | null;
  } | null;
};

import type { CodegenConfig } from "@graphql-codegen/cli";

//used codegen to help generate types for graphql queries and mutations
const config: CodegenConfig = {
  schema: "https://asktask-api.stagelab.co.uk/graphql",
  documents: ["lib/graphql/**/*.ts"],
  generates: {
    "lib/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;

import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "tu-2u",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
  ssr: {
    noExternal: [/@syncfusion/]
    }
  };
});
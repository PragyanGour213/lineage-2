import { createApp } from "vue";
import App from "./App.vue";
import "@cldcvr/flow-core/dist/types/vue3";
import "@cldcvr/flow-lineage/dist/types/vue3";

import("@cldcvr/flow-core").then(async () => {
  await import("@cldcvr/flow-system-icon");
  await import("@cldcvr/flow-product-icon");
  await import("@cldcvr/flow-aws-icon");
  await import("@cldcvr/flow-gcp-icon");
  await import("@cldcvr/flow-lineage");
  createApp(App).mount("#app");
});

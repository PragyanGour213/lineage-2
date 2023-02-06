<template>
  <f-div height="100%" width="100%">
    <FlowLineage />
  </f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlowLineage from "./components/FlowLineage.vue";

export default defineComponent({
  name: "App",
  components: {
    FlowLineage,
  },
});
</script>
<style>
@import "@cldcvr/flow-core/dist/style.css";
@import "@cldcvr/flow-lineage/dist/style.css";
</style>

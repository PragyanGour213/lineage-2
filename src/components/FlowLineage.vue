<template>
  <f-lineage
    direction="horizontal"
    :padding="28"
    :gap="100"
    :node-size.prop="{ width: 240, height: 53 }"
    :children-node-size.prop="{ width: 240, height: 32 }"
    :max-childrens="8"
    :links.prop="links"
    :nodes.prop="nodes"
    :node-template="nodeTemplate"
    :children-node-template="childNodeTemplate"
  ></f-lineage>
</template>

<script lang="ts">
import { LineageNodeLinks, LineageNodes } from "@cldcvr/flow-lineage";
import { defineComponent } from "vue";
/**
 * Reading data from JSON file, we can use objects directly as well (check FlowLineageWithObjects.vue)
 */
import LineageData from "./LineageData.json";

export default defineComponent({
  name: "FlowLineageWithObjects",
  data(): {
    nodes: LineageNodes;
    links: LineageNodeLinks;
    nodeTemplate: string;
    childNodeTemplate: string;
  } {
    return {
      nodes: LineageData.nodes as LineageNodes,
      links: LineageData.links as LineageNodeLinks,
      nodeTemplate: `
				<f-div width="100%" state="secondary" height="100%" padding="small" align="top-left" variant="curved" gap="small">
					<f-pictogram variant="circle" source="\${node.templateData.fullName}"></f-pictogram>
					<f-div direction="column">
						<f-text size="small" ellipsis>\${node.templateData.fullName}</f-text>
						<f-text size="x-small" ellipsis>\${node.templateData.description}</f-text>
					</f-div>
					\${node.childrenToggle}
				</f-div>
				`,
      childNodeTemplate: `
				<f-div state="secondary" width="100%" height="100%"padding="none medium" align="middle-left" gap="small" border="small solid default bottom" >
					<f-icon source="\${node.templateData.icon}" size="small"></f-icon>
					<f-text  size="small" ellipsis>\${node.templateData.title}</f-text>
			  </f-div>
				`,
    };
  },
});
</script>

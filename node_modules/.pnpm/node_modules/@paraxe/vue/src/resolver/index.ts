import type { ComponentResolver } from "unplugin-vue-components/types";

export function ParaxeResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name) => {
      return {
        name,
        from: "@paraxe/vue",
      };
    },
  };
}
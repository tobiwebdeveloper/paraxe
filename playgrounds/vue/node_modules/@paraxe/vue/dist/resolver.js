function r() {
  return {
    type: "component",
    resolve: (e) => ({
      name: e,
      from: "@paraxe/vue"
    })
  };
}
export {
  r as ParaxeResolver
};

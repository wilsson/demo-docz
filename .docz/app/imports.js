export const imports = {
  'Guide.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "guide" */ 'Guide.mdx'),
  'docs/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-button" */ 'docs/Button.mdx'),
  'docs/Field.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-field" */ 'docs/Field.mdx'),
  'docs/introducttion.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-introducttion" */ 'docs/introducttion.mdx'),
}

declare module "*.mdx" {
  interface Metadata {
      title: string;
      description: string;
  }
  export const meta: Metadata
}
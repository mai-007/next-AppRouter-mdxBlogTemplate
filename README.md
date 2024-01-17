# Next.js(AppRouter)+MDX
Next.jsにてAppRouterを使用しMDXでページ作成出来るtemplateです。

## styling
  TailwindCSS

## QuickStart
First, run the development server:

```bash
pnpm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 出来ること
- MDXでのページ作成(JSX/カスタムComponent利用可)
  @next/mdx @mdx-js/loader @mdx-js/react @types/mdx

- GitHub Flavored Markdown(GFM)をサポート
  remark-gfm
  プレビューファイル：src/app/contents/article04

- 数式の利用/表示
　remark-math rehype-katex
　TeXのデザインを適用するため<Link>の追加を行なっている。
　src/app/contents/layout.tsx
　プレビューファイル：src/app/contents/article05

- コードブロックのシンタックスハイライト
  @mapbox/rehype-prism
  src/app/contents/layout.tsxにてCDN読み込み
  プレビューファイル：src/app/contents/article06/page.mdx
　
- 目次の追加
　rehype-slug remark-toc
　プレビューファイル：src/app/contents/article07/page.mdx

- MDXに改行を追加
　remark-breaks
  プレビューファイル：src/app/contents/article08/page.mdx


## 注意点
Rust ベースの MDX コンパイラーは使わない設定にしています。
(GFMがエラーとなる)

## theme
tailwind.configに記述する

## MDXのテンプレート作成
### MDXページ全体のLayout(header/footerなど)
src/contents/layoutに記述する

### 記事のテンプレート
mdx-components.tsxの以下に記載
```
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
```

--
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

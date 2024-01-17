import { Metadata } from "next";

/*サイト情報*/
const siteName = "next.js + MDX";
const description = "next.jsのAppRouterとMDXでBlogのようなものを作成";
const url = "https://www.localhost.com/";


export const SEO_DEFAULT: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
};
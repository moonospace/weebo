type MetaTagsInput = {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
};

export function generateMetaTags({
  title,
  description,
  image,
  keywords,
}: MetaTagsInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        keywords ||
        "Product Designer, UI UX Designer, Web Designer, Shopify Developer, Web Developer, Webflow Expert, Framer Expert, Squarespace, Wix Developer, Fullstack, Mobile Developer, Indie Hacker",
    },
    { name: "creator", content: "Weebo" },
    { name: "publisher", content: "Weebo" },
    { name: "application-name", content: "Weebo" },
    {
      name: "google-site-verification",
      content: "uJ4nZwWkaO0JcSSuUdkkxjTiWLPI61o95zrtFuXPeQM",
    },
    { name: "category", content: "Websites" },
    { name: "generator", content: "Tanstack start" },
    { name: "pinterest-rich-pin", content: "true" },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764831318505/81289659-934b-4765-8ed4-970c1ae19db1.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "Weebo" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764831318505/81289659-934b-4765-8ed4-970c1ae19db1.png",
    },
  ];
}

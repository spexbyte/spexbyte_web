import { Html, Head, Main, NextScript } from "next/document";

const descriptionContent =
  "Spexbyte Digital is a freelance web development, web design and digital experience agency in Ghana. We build your websites, provide UI/UX design services and create digital interfaces that will boost your customers and increase sales ";
const titleContent = "Spexbyte Digital - Freelance Web Agency in Ghana";
const urlContent = "spexbyte-web.vercel.app";
const author = "Spexbyte Digital";
const twitterHandle = "@spexbyte";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={descriptionContent} />
        <meta name="author" content={author} />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />

        <meta name="robots" content="follow, index" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlContent} />
        <meta property="og:title" content={titleContent} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:image" content="/assets/favicon.png" />
        {/* Twitter  */}
        <meta property="twitter:card" content="twitter_card" />
        <meta property="twitter:url" content={urlContent} />
        <meta property="twitter:title" content={titleContent} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta property="twitter:description" content={descriptionContent} />
        <meta property="twitter:image" content="/assets/favicon.png" />
        {/* others */}
        <link rel="canonical" href={urlContent} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

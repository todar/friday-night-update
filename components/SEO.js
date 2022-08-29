import React from "react";

const SEO = () => {
  return (
    <React.Fragment>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e1f20" />
      <meta name="msapplication-TileColor" content="#1e1f20" />
      <meta name="theme-color" content="#1e1f20" />

      <meta property="og:image:width" content="1199" />
      <meta property="og:image:height" content="628" />
      <meta property="og:title" content="Friday Night Church" />
      <meta
        property="og:description"
        content="Friday Night Fellowship is a group that meets every Friday in North Phoenix."
      />
      <meta property="og:url" content="https://fridaynight.info/" />
      <meta
        property="og:image"
        content="https://fridaynight.info/og-image.jpg"
      ></meta>
    </React.Fragment>
  );
};

export default SEO;
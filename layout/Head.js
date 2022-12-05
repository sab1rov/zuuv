import NextHead from "next/head";

// import image from "";

function Head() {
  return (
    <NextHead>
      {/* Title */}
      <title>ZUV EXPRESS</title>
      <meta name="og:title" content="ZUV EXPRESS" />

      {/* Description */}
      <meta name="description" content="zuv express" />
      <meta name="og:description" content="zuv express" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Finlite" />
      <meta name="author" content="appx group" />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* <meta property="og:image" content={image} /> */}
    </NextHead>
  );
}

export default Head;

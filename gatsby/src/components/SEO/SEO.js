import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ children, location, title, image }) => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        title
        description
        lang
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${data.sanitySiteSettings.title}`}>
      <html lang={data.sanitySiteSettings.lang} />
      <title>{title}</title>

      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={data.sanitySiteSettings.description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={data.sanitySiteSettings.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={data.sanitySiteSettings.description}
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
};
export default SEO;

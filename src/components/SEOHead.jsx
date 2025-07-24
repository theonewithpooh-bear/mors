import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "MORS - Movement of Real Skills | Education Reform UK",
  description = "MORS is revolutionizing education through practical, skills-based learning that prepares students for the real world. Join our movement for education reform in the UK.",
  keywords = "education reform, skills-based learning, GCSE reform, UK education, practical skills, real world learning",
  canonical,
  type = "website"
}) => {
  const baseUrl = "https://mors.org.uk";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="MORS - Movement of Real Skills" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="MORS - Movement of Real Skills" />
      <meta name="language" content="EN" />
    </Helmet>
  );
};

export default SEOHead;
module.exports = {
  plugins: [
  {
    
    resolve: "gatsby-theme-portfolio-minimal",
    options: {
      siteUrl: "https://www.mihnearad.com", // Used for sitemap generation
      manifestSettings: {
        favicon: "./content/images/facesmile.png", // Path is relative to the root
        siteName: "Mihnea Rad", // Used in manifest.json
        shortName: "MR Portfolio", // Used in manifest.json
        startUrl: "/", // Used in manifest.json
        backgroundColor: "#FFFFFF", // Used in manifest.json
        themeColor: "#000000", // Used in manifest.json
        display: "minimal-ui", // Used in manifest.json
      },
      contentDirectory: "./content",
      blogSettings: {
        path: "/blog", // Defines the slug for the blog listing page
        usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
      },
      googleAnalytics: {
           trackingId: "UA-106809989-2",
           anonymize: true, // Default true
           environments: ["production"] // Default ["production"]
       }
    },
  },
],
};
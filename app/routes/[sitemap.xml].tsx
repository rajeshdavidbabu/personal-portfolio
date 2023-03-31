export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://www.rajeshdavidbabu.com/</loc>
	<lastmod>2023-03-31T19:31:58+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog</loc>
	<lastmod>2023-03-31T19:31:58+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/code-splitting-i18n</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/modular-architecture-react-ts</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/robust-frontend-techstack</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/how-does-graphql-work</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/simple-guide-es6-generators</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/js-promise-api-guide</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/webpack-react-heroku</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/clone-aws-nodejs</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.rajeshdavidbabu.com/blog/array-vs-map-vs-set-vs-object</loc>
	<lastmod>2023-03-31T19:31:59+01:00</lastmod>
	<priority>0.8</priority>
</url>
</urlset>
    `;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};

### My Gatsby Markdown starter

My Gatsby starter site based upon Gatsby's hello-world boilerplate, and prepared for Markdown usage, initially coded thanks to Andrew Mead's [Great Gatsby Bootcamp](https://www.youtube.com/watch?v=8t0vNu2fCCM), before moving to a more advanced version.

The starter includes:
- Pages for:
    - home including the latest blog post and event
    - about
    - contact
    - 404
- a blog section with a (paginated) list of blog posts
- a calendar section with a list of events
- 5 dummy posts (1 event + 4 blog posts including one with an image) and their engine-generated page
- sass (modules) turned on
- the dotenv environment variable file for GraphQL Playground

In order to use this starter:

1. gatsby new your-project-name https://github.com/flopreynat/myGatsbyMarkdownStarter
2. cd your-project-name
3. gatsby develop
4. uncomment the dotenv environment variable file in the _.gitignore_ (see GraphQL Playground comment above)

Note that the following installs were run on top of [Gatsby's Hello World Starter](https://github.com/gatsbyjs/gatsby-starter-hello-world)
- npm install node-sass gatsby-plugin-sass
- npm install --save-dev env-cmd
- npm install gatsby-source-filesystem
- npm install --save gatsby-transformer-remark
- npm install gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images
- npm install gatsby-plugin-react-helmet react-helmet
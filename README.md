### My Gatsby Markdown starter

My Gatsby starter site based upon Gatsby's hello-world boilerplate, and prepared for Markdown usage, as shown in Andrew Mead's [Great Gatsby Bootcamp](https://www.youtube.com/watch?v=8t0vNu2fCCM).

The starter includes:
- Pages for home, about, contact, blog and 404 (+ generated page/blog post)
- sass (modules) turned on
- 2 dummy posts, including one with an image
- the dotenv environment variable file for GraphQL Playground_

1. Fork
2. run following installs
    npm install
    npm install node-sass gatsby-plugin-sass
    npm install --save-dev env-cmd
    npm install gatsby-source-filesystem
    npm install --save gatsby-transformer-remark
    npm install gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images
    npm i gatsby-plugin-react-helmet react-helmet
3. change the develop line in your package.json to "develop": _"env-cmd -f .env.development gatsby develop"_
4. uncomment the dotenv environment variable file in the _.gitignore_
5. done
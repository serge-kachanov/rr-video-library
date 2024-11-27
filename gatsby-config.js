/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Ready Rosie Library",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "RRapi",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "rrapi",
        // Url to query from
        url: "http://localhost:3000/graphql",
        headers: {
          APP_ID: "family_app_id_example",
          APP_SECRET: "family_app_secret_example",
        },
      },
    },
  ],
};

// exports.sourceNodes = async ({ actions }) => {
//   const { createNode } = actions;
//
//   // fetch raw data from the api
//   const fetchAge = () => axios.get(`localhost:3000/graphql/`);
//   // await for results
//   const res = await fetchAge();
//
//   // map into these results and create nodes
//   res.data.results.map((age, i) => {
//     // Create your node object
//     const ageNode = {
//       // Required fields
//       id: `${i}`,
//       parent: `__SOURCE__`,
//       internal: {
//         type: `Age`, // name of the graphQL query --> allAge {}
//         // contentDigest will be added just after
//         // but it is required
//       },
//       children: [],
//
//       // Other fields that you want to query with graphQl
//       name: age.name,
//       id: age.id,
//       spanish_name: age.spanish_name
//       // etc...
//     }
//
//     // Get content digest of node. (Required field)
//     const contentDigest = crypto
//       .createHash(`md5`)
//       .update(JSON.stringify(ageNode))
//       .digest(`hex`);
//     // add it to ageNode
//     ageNode.internal.contentDigest = contentDigest;
//
//     // Create node with the gatsby createNode() API
//     createNode(ageNode);
//   });
//
//   return;
// }

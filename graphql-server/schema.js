const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
exports.typeDefs = gql`
  type Query {
    companyNewsByIdAndTicker(id: String, related: String): CompanyNews
    companyNewsByTicker(related: String): [CompanyNews]
  }
  
  type CompanyNews @key(fields: "id related") {
    id: String!
    related: String!
    category: String
    datetime: Int
    headline: String
    image: String
    source: String
    summary: String
    url: String
  }
`;
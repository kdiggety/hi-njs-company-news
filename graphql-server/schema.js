// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
exports.typeDefs = `#graphql
  type Query {
    companyNewsByTicker(related: String): [CompanyNews]
  }
  
  type CompanyNews {
    category: String
    datetime: Int
    headline: String
    id: Int
    image: String
    related: String
    source: String
    summary: String
    url: String
  }
`;
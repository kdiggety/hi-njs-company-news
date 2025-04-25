TODO :: This appears to be an experimental project with a bunch of different functions that need to be broken out to prevent future confusion 

A. Load Company News into Mongo
===============================
1. Run the Company News Loader in a terminal
node services/company-news-processor.js

B. GraphQL
=======
1. Run the Apollo Server in a terminal
node graphql-server/server.js

2. Point GraphQL client to http://localhost:4001/companyNewsByTicker

Example GraphQL query:

```
query CompanyNews {
    companyNewsByTicker(related: "STX") {
        related
        summary
        url
    }
}
```
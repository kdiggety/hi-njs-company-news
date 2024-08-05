Example query:

```
query CompanyNews {
    companyNewsByTicker(related: "STX") {
        related
        summary
        url
    }
}
```
const { MongoClient } = require("mongodb");

const uri = "mongodb://macdaddy.local:27017/";

exports.mongo = async function () {
    const client = await MongoClient.connect(uri)
    return client.db('hobbyInvestor')
}

/*
main()
    .then(console.log('🎉 connected to database successfully'))
    .catch((error) => console.error(error))
*/
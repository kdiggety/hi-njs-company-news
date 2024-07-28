// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const {mongo} = require("../clients/mongo");

exports.resolvers = {
    Query: {
        async companyNewsByTicker(parent, args, contextValue, info) {
            const companyNewsCollection = await db.collection("companyNews");
            return await companyNewsCollection.find({related: args.related}).toArray();
        },
    },
};

let db;

async function init() {
    db = await mongo().then(
        thisDb => {
            console.log('🎉 connected to database successfully')
            return thisDb;
        }
    ).catch((error) => console.error(error));

    console.log('Connected to DB!');
}

init()
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "companyNews" MongoDB collection.
const { ObjectId } = require('mongodb');
const { mongo } = require("../clients/mongo");

exports.resolvers = {
    Query: {
        async companyNewsByIdAndTicker(parent, args, contextValue, info) {
            const companyNewsCollection = await db.collection("companyNews");
            return await companyNewsCollection.findOne({_id: new ObjectId(args.id), related: args.related});
        },
        async companyNewsByTicker(parent, args, contextValue, info) {
            const companyNewsCollection = await db.collection("companyNews");
            return await companyNewsCollection.find({related: args.related}).toArray();
        },
        CompanyNews: {
            __resolveReference(companyNews, { companyNewsByIdAndTicker }){
                return companyNewsByIdAndTicker(companyNews.id, companyNews.related)
            }
        }
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
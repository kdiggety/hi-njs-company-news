const { kafka } = require("../clients/kafka");
const {mongo} = require("../clients/mongo");

let db;

async function init() {
    // Get the database and collection on which to run the operation
    db = await mongo().then(
        thisDb => {
            console.log('🎉 connected to database successfully')
            return thisDb;
        }
    ).catch((error) => console.error(error));

    console.log('Connected to DB!');

    const companyNewsCollection = db.collection("companyNews");

    const group = "111222333444";

    const consumer = kafka.consumer({ groupId: group });
    await consumer.connect();

    await consumer.subscribe({ topics: ["companyNewsUpdate"], fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(
                `${group}: [${topic}]: PART:${partition}:`,
                message.value.toString()
            );
            let docs = JSON.parse(message.value.toString());

            if (docs && docs.length > 0) {
                // Prevent additional documents from being inserted if one fails
                const options = {ordered: true};
                // Execute insert operation
                const result = await companyNewsCollection.insertMany(docs, options);

                // Print result
                console.log(`${result.insertedCount} documents were inserted`);
            } else {
                console.warn("Empty message!");
            }
        },
    });
}

init();
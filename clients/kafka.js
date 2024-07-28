const {Kafka} = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "company-news-reader",
    brokers: ["macdaddy.local:29093"]
})
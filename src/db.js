import { MongoClient } from 'mongodb';
// const MongoClient = require('mongodb').MongoClient;
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const url = `mongodb://${encodeURIComponent(MONGO_USERNAME)}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_HOSTNAME}:${MONGO_PORT}/?authMechanism=DEFAULT`;

// const client = new MongoClient(url, {
//     useUnifiedTopology: true,
//     reconnectInterval: 1000,
//     reconnectTries: Number.MAX_VALUE
// })

// const connection = client.connect(function(err) {
//     if (err) {
//         console.log(err)
//         console.log("Error connecting to mongodb")
//         return
//     }
//     console.log("Connected correctly to server");
//     const db = client.db(MONGO_DB)
//     db.collection('employees').insertOne({ name: 'aaaaa' })
//     db.listCollections().toArray(function(err, collInfos) {
//         console.log(collInfos)
//     });
// });

const mongoWrapper = {
    client: new MongoClient(url, {
        useUnifiedTopology: true,
        reconnectInterval: 1000,
        reconnectTries: Number.MAX_VALUE
    }),
    connect: function() {
        this.client.connect(function(err) {
            if (err) {
                console.log(err)
                console.log("Error connecting to mongodb")
                return
            }
            console.log("Connected correctly to server");
            mongoWrapper.db = mongoWrapper.client.db(MONGO_DB)
                // mongoWrapper.db.collection('employees').insertOne({ name: 'aaaaa' })
                // mongoWrapper.db.listCollections().toArray(function(err, collInfos) {
                //     console.log(collInfos)
                // });
        });
    },
    db: null

}

export default mongoWrapper
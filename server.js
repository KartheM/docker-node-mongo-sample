

const MongoClient = require('mongodb').MongoClient

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    // const url = 'mongodb://127.0.0.1:27017'
     const dbName = 'notes'
     let db
     
     MongoClient.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true }, (err, client) => {
       if (err) return console.log(err)
     
       // Storing a reference to the database so you can use it later
       db = client.db(dbName)
    //    console.log(`Connected MongoDB: ${url}`)
       console.log(`Database: ${dbName}`)
     })
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
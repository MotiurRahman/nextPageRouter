const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://morahman:motiur08034@hero-one.z3ku6ig.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    const newsCollection = client.db("doctors").collection("doctors");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }

    if (req.method === "POST") {
      const news = req.body;
      const result = await newsCollection.insertOne(news);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
export default run;

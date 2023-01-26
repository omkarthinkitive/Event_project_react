import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    // "mongodb+srv://mongoUser:HETlWokI8xPNjwZK@cluster0.umtoy3y.mongodb.net/events?retryWrites=true&w=majority"
    'mongodb+srv://omkar:JJZk6ByLgyKtW1l5@cluster0.gb0c3vo.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

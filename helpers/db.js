import { MongoClient } from 'mongodb'

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://henri:iTDD2952vnkhZMbS@cluster0.todca.mongodb.net/next-blog?retryWrites=true&w=majority'
    );

    return client;
}

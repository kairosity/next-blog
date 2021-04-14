import { MongoClient } from 'mongodb'
import { hashPassword } from '../../../helpers/auth';
import { connectToDatabase } from '../../../helpers/db-connect';


async function handler(request, response){

  if (request.method === "POST"){
    const data = request.body;

    const { username, email, password } = data;

    if(!email || !email.includes('@') || !password || password.trim().length < 7){
      response.status(422).json({message: 'Invalid input.'});
    }

    const client = await connectToDatabase();

    const db = client.db();

    const existingUser = await db.collection('users').findOne({"email": email})

    if (existingUser){
      response.status(422).json({message: 'User already exists.'})
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
      username: username,
      email: email,
      password: hashedPassword
    });

    response.status(201).json({message: 'Created new user!'})
    client.close();
  }
}

export default handler;



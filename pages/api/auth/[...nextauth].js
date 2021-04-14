import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { checkPassword } from '../../../helpers/auth';
import { connectToDatabase } from '../../../helpers/db';

export default NextAuth({
    session:{
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials){
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({email: credentials.email})

                if(!user){
                    client.close();
                    throw new Error('This user does not exist')
                }

                const isValid = await checkPassword(credentials.password, user.password);

                if (!isValid){
                    client.close();
                    throw new Error('Password is invalid, sorry, cannot log you in.')
                }

                client.close();
                return {
                        name: user.username, 
                        email: user.email 
                        };

                
            }
        })
    ]
});

import { getSession } from 'next-auth/client'
import UserDashboard from '../components/UserDashboard'

function userDash() {
    return <UserDashboard />;
}

export async function getServerSideProps(context){
    const session = await getSession( {req: context.req} )

    console.log(session)

    if(!session){
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
    return {
        props: { session },
    }
}

export default userDash;







import {useState, useEffect} from 'react';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router'

export function checkSession(){

    const [isLoading, setIsLoading] = useState(true);
        const router = useRouter();

        useEffect(() => {
            getSession().then(session => {
                if(session){
                    router.replace('/blog')
                } else {
                    setIsLoading(false);
                }
            });
        }, [router]);

        if (isLoading){
            return <p>Loading...</p>
        }

}


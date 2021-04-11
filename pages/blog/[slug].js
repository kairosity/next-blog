export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:8000/posts`);
    const data = await response.json();

    const paths = data.map((post) => {
        
        return {
            params: {
                slug: post.slug.toString()
            }
        }
    })

    return { 
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug  = context.params.slug;

    const id = slug.split('-')[2].toString()

    const response = await fetch(`http://localhost:8000/posts/${id}`);
    const data = await response.json();

    return {
        props: {
            post: data
        }
    }
}


const Post = ({ post }) => {
    return ( 
        <div>
            <h1>{ post.title }</h1>
        </div>
    );
}

export default Post;
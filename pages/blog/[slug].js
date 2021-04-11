import Link from 'next/link'
import QuoteHeader from "../../components/QuoteHeader";

// Fetches all posts and returns slug paths
export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:8000/posts`);
    const data = await response.json();

    const paths = data.map((post) => {
        
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return { 
        paths: paths,
        fallback: false
    }
}

// Uses slug paths to fetch single post using post id
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
            <main class="blog-post-container container-fluid">
{/* Blog Post Header / Inspirational Quotes */}
                <QuoteHeader id={post.id}/>
                <section id="main" class="blog-post">
                    <div class="row">
{/* Back to All Posts Link */}
                        <div class="col-sm-3 offset-sm-1 col-md-3 offset-md-1 mx-5 back-col">
                            <Link href="/blog"><a class="hvr-underline-from-center">
                                <p class="back-button"><i class="fas fa-long-arrow-alt-left"></i> Back to all posts</p>
                            </a></Link>
                        </div>
{/* Blog Post  */}
                        <article class="post col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 post-container d-flex flex-column">
                            <h1 class="post-title align-self-center p-3">
                                { post.title }
                            </h1>
                            <p class="align-self-center">
                                { post.publish_date }
                            </p>

                            <div class="author-container d-flex mx-3">
                                <div class="headshot-container">
                                    <img class="author-headshot" src={ post.author_headshot } alt="" />
                                </div>
                                <a class="author-link align-self-center" href="#">
                                    <p>
                                        { post.author }
                                    </p>
                                </a>
                            </div>
                            <hr class="mb-4" />
                            <div class="post-content-container mx-2 d-flex align-items-center row">
                                <p class="post-content p-4 col col-12 col-xl-7">
                                    { post.content } 
                                </p>
                                <div class="post-photo-container col-12 col-xl-5">
                                    <img class="col" src={ post.photo } alt="" />
                                </div>
                            </div>
                        </article>
{/* Blog Post End */}
                    </div>
                </section>
            </main>
    );
}

export default Post;
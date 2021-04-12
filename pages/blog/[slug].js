import Link from 'next/link'
import AddComment from '../../components/AddComment';
import Comments from '../../components/Comments';
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

    const responsePosts = await fetch(`http://localhost:8000/posts?slug=${slug}`);
    const rawData = await responsePosts.json();
    const data = rawData[0]

    return {
        props: {
            post: data
        }
    }
}



const Post = ({ post }) => {

    // Cleanses the post content of all the <p></p> tags:
    const regex1 = /<p>/g;
    const regex2 = /<\/p>/g;
    let sanitizedContent1 = post.content.replace(regex1, "");
    let sanitizedContent2 = sanitizedContent1.replace(regex2, "");

    return ( 
            <main className="blog-post-container container-fluid">
{/* Blog Post Header / Inspirational Quotes */}
                <QuoteHeader id={ post.id }/>
                <section id="main" className="blog-post">
                    <div className="row">
{/* Back to All Posts Link */}
                        <div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 mx-5 back-col">
                            <Link href="/blog"><a className="hvr-underline-from-center">
                                <p className="back-button"><i className="fas fa-long-arrow-alt-left"></i> Back to all posts</p>
                            </a></Link>
                        </div>
{/* Blog Post  */}
                        <article className="post col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 post-container d-flex flex-column">
                            <h1 className="post-title align-self-center p-3">
                                { post.title }
                            </h1>
                            <p className="align-self-center">
                                { post.publish_date }
                            </p>
                            <div className="author-container d-flex mx-3">
                                <div className="headshot-container">
                                    <img className="author-headshot" src={ post.author_headshot } alt="" />
                                </div>
                                <a className="author-link align-self-center" href="#">
                                    <p>
                                        { post.author }
                                    </p>
                                </a>
                            </div>
                            <hr className="mb-4" />
                            <div className="post-content-container mx-2 d-flex align-items-center row">
                                <p className="post-content p-4 col col-12 col-xl-7">
                                    { sanitizedContent2 } 
                                </p>
                                <div className="post-photo-container col-12 col-xl-5">
                                    <img className="col" src={ post.photo } alt="" />
                                </div>
                            </div>
                        </article>
{/* Blog Post End */}
                    </div>
                </section>
                < Comments postId={ post.id } />
            </main>
    );
}

export default Post;
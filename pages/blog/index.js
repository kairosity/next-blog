import Head from 'next/head'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import SkipToMain from '../../components/SkipToMain';

// Blog Posts Fetched & Loaded at Build Time
export const getStaticProps = async () => {
    const response = await fetch('http://localhost:8000/posts?_sort=publish_date&_order=desc');
    const data = await response.json();

    return {
        props: { posts: data }
    }
}

const Blog = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Health Blog | Blog</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content="healthblog, health, blog, health blog, nutrition, medicine, healthy living, login"/>
                <meta name="description" content='Health Blog is a healthy living blog with lots of interesting articles about health, nutrition, healthy living
                and exercise.' />
                <meta name="geo.region" content="IE-D" />
                <meta name="geo.placename" content="Dublin" />
                <meta name="geo.position" content="53.349765;-6.260273" />
                <meta name="ICBM" content="53.349765, -6.260273" />
            </Head>
            
            <main className="flex-container">
{/* Header */}
                <section className="feature">
                    <SkipToMain />
                        <div className="container d-flex flex-column">
                            <h1 className="main-heading dark-text">Welcome to this Health Blog</h1>
                            <p className="lead">This is an interesting blog featuring lots of different articles about
                                health, nutrition and longevity.
                                It is designed to catch your attention in a calming manner. This area could also be used
                                to display the most recent
                                blog article, but I'm using it currently as an introduction to the site as a whole.
                                Either way, this is a short snippet
                                to entice the reader to stay longer and peruse the site.
                            </p>
                            <div className="content-hint align-self-center d-flex flex-column">
                                <Link href="#firstSection"><a className="align-self-center d-flex flex-column">
                                    <h4 id="main" className="align-self-center">Scroll down to learn more...</h4>
                                    <i className="fas fa-chevron-down align-self-center"></i>
                                </a></Link>
                            </div>
                        </div>
                </section>
{/* Header Ends */}

            <section className="posts mt-4">
                <div className="container">
                    <div id="firstSection" className="row post-row row-cols-1 row-cols-md-2 row-cols-lg-3">

            { posts.map(post => (

                <div key={ post.id } className="col post-col mb-4 d-flex">
                    <Card  className="card post-card rounded d-flex">
                        <Link href={`/blog/${post.slug}`}><a><Card.Img variant="top" src={ post.photo } className="card-img-top" alt={ post.title }/></a></Link>
                        <Card.Body className="card-body d-flex flex-column justify-content-between m-2">
                            <Link href={`/blog/${post.slug}`}><a className="post-title-link">
                                <Card.Title className="subheading dark-text card-title">
                                    { post.title }
                                </Card.Title>
                            </a></Link>
                            <p className="author dark-text lead">
                                { post.author }
                            </p>
                            <p className="post-date dark-text lead">
                                { post.publish_date }
                            </p>
                            <Card.Text className="card-text">
                                { post.description }
                            </Card.Text>
                            <Link href={`/blog/${post.slug}`}><a className="read-more dark-text btn btn-primary">Read More</a></Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
                </div>
                </div>
            </section>
        </main>
        </>
    );
}

export default Blog;
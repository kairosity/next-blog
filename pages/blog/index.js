import Head from 'next/head'
import Card from 'react-bootstrap/Card'

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
            <h1>Welcome to this Health Blog</h1>
            <section className="posts mt-4">
                <div className="container">
                    <div id="firstSection" className="row post-row row-cols-1 row-cols-md-2 row-cols-lg-3">

            { posts.map(post => (
                <div className="col post-col mb-4 d-flex">
                    <Card className="card post-card rounded d-flex">
                        <a href=""><Card.Img variant="top" src={post.photo} classNameName="card-img-top" alt={post.title}/></a>
                        <Card.Body className="card-body d-flex flex-column justify-content-between m-2">
                            <a className="post-title-link" href="">
                                <Card.Title className="subheading dark-text card-title">
                                    {post.title}
                                </Card.Title>
                            </a>
                            <p className="author dark-text lead">
                                {post.author}
                            </p>
                            <p className="post-date dark-text lead">
                                { post.publish_date }
                            </p>
                            <Card.Text className="card-text">
                                { post.description }
                            </Card.Text>
                            <a className="read-more dark-text btn btn-primary" href="">Read More</a>
                        </Card.Body>
                    </Card>
                </div>
            ))}
                </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
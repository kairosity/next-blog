import Head from 'next/head'
import SkipToMain from '../components/SkipToMain'
import { useSession } from 'next-auth/client';

const userDashboard = () => {

    const [session, loading] = useSession();
    const sessUsername = session ? session.user.name : null;

    return ( 

// Navigation 
    <>
    <Head>
        <title>Health Blog | {sessUsername}'s Dashboard</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="healthblog, health, blog, health blog, nutrition, medicine, healthy living, login"/>
        <meta name="description" content='This is your very own Health Blog dashboard where you can access exclusive information and other 
        resources.'></meta>
        <meta name="geo.region" content="IE-D" />
        <meta name="geo.placename" content="Dublin" />
        <meta name="geo.position" content="53.349765;-6.260273" />
        <meta name="ICBM" content="53.349765, -6.260273" />
    </Head>
    <main className="flex-container">
{/* Header  */}
        <section className="feature">
            <SkipToMain />
                <div className="container d-flex flex-column">
                    <h1 className="main-heading dark-text">Welcome {sessUsername.replace(/^\w/, (c) => c.toUpperCase())}. This is your Health Blog
                            Dashboard</h1>
                    <p className="lead">This is where you can view the articles you've saved.</p>
                </div>
        </section>
{/* List of Saved Posts */}
        <section id="main">
            <div
                className="post col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 post-container d-flex justify-content-center">
                <h2 className="main-heading align-self-center dashboard-posts-heading">Your Saved Blog Posts</h2>
            </div>
        </section>
        <section className="posts mt-4">
            <div className="container d-flex justify-content-end">
                <div className="row post-row row-cols-1 row-cols-md-2 row-cols-lg-3" id="firstSection">
                    <div className="col post-col mb-4 d-flex">
                        <div className="card post-card rounded d-flex">
                            <a href="#"><img alt="" className="card-img-top" src="" /></a>
                            <div className="card-body d-flex flex-column justify-content-between m-2">
                                <a className="post-title-link" href="#">
                                    <h3 className="subheading dark-text card-title">Article Title</h3>
                                </a>
                                <p className="author dark-text lead">Sharmina McGonagel</p>
                                <p className="post-date dark-text lead">2021/02/24</p>
                                <p className="card-text">A brief description of the article...</p><a
                                    className="read-more dark-text btn btn-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col post-col mb-4 d-flex">
                        <div className="card post-card rounded d-flex">
                            <a href="#"><img alt="" className="card-img-top" src="" /></a>
                            <div className="card-body d-flex flex-column justify-content-between m-2">
                                <a className="post-title-link" href="#">
                                    <h3 className="subheading dark-text card-title">Another Article Title</h3>
                                </a>
                                <p className="author dark-text lead">Roland Sanchez</p>
                                <p className="post-date dark-text lead">2020/04/26</p>
                                <p className="card-text">A brief description of the article...</p><a
                                    className="read-more dark-text btn btn-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col post-col mb-4 d-flex">
                        <div className="card post-card rounded d-flex">
                            <a href="#"><img alt="" className="card-img-top" src="" /></a>
                            <div className="card-body d-flex flex-column justify-content-between m-2">
                                <a className="post-title-link" href="#">
                                    <h3 className="subheading dark-text card-title">A Title</h3>
                                </a>
                                <p className="author dark-text lead">Tiago Montoya</p>
                                <p className="post-date dark-text lead">2019/08/26</p>
                                <p className="card-text">A brief description of the article...</p><a
                                    className="read-more dark-text btn btn-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col post-col mb-4 d-flex">
                        <div className="card post-card rounded d-flex">
                            <a href="#"><img alt="" className="card-img-top" src="" /></a>
                            <div className="card-body d-flex flex-column justify-content-between m-2">
                                <a className="post-title-link" href="#">
                                    <h3 className="subheading dark-text card-title">A Fourth Title</h3>
                                </a>
                                <p className="author dark-text lead">Anna Karenina</p>
                                <p className="post-date dark-text lead">2019/04/02</p>
                                <p className="card-text">A brief description of the article...</p><a
                                    className="read-more dark-text btn btn-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
    );
}

export default userDashboard;
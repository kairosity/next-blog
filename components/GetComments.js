import { useEffect, useState } from 'react'


const GetComments = ({postId}) => {

    const [comments, setComments] = useState();
    
    // Fetch Comments here.
    useEffect(() => {
        fetch(`http://localhost:8000/posts/${postId}/comments/?_sort=date&_order=desc`)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setComments(data)
            })
    }, []);

    // Determine the number of comments once comments has loaded.
    const commentStatement = (comments) => {
        if (comments) {
            if (comments.length === 1){
                return <h4 className="comment-count">1 Comment</h4>
            } else if (comments.length === 0) {
                return <h4 className="comment-count">{ comments && comments.length } Comments. Be the first!</h4>
            } else {
                return <h4 className="comment-count">{ comments && comments.length } Comments</h4>
            }
        }
    }

    return ( 
        <section className="blog-comments col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            
            <div className="blog-comments-container">
                
                { commentStatement(comments) }

                { comments && comments.map(comment => (

                    <div key={ comment.id }>
                        <p className="comment-username">{ comment.user } </p>
                        <p className="comment-date">Posted on: { comment.date }</p>
                        <p className="comment-content"> { comment.content }</p>

                        <a href="" className="replyComment btn btn-outline-primary btn-sml"
                            type="button" aria-expanded="false" aria-controls="collapseExample">Reply</a>
                        <a className="deleteComment btn btn-outline-danger" data-commentid={ comment.id }>Delete </a>

                        <div className="collapse" id="replyTo${comment.id}">
                            <div className="">
                                <form className="reply-comment-form">
                                    <div className="mb-3">
                                        <input type="text" name="user" className="form-control"
                                                placeholder="Name" id="user" aria-describedby="user" required />
                                        {/* <input type="hidden" name="postId" id="postId" value={post.id} /> */}
                                        <input type="hidden" name="id" id="id" value={ comment.id + 1 } />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control form-control-lg"
                                                name="content" id="content" cols="30" rows="3" required></textarea>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr className="comment-divider" />
                    <div/>
                </div>
                )) }
            </div>
        </section>
    )
}
                


export default GetComments;

    // const getComments = async (postId) => {
    //     const uri = await fetch(`http://localhost:8000/posts/${postId}/comments/?_sort=date&_order=desc`)
        
    //     const fetch_response = await uri.json();
        
    //     const commentsToUse = fetch_response

    //     return { 
    //         commentsToUse
    //         // id
    //     };
    // };
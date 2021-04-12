import { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'


const Comments = ({postId}) => {

    const [comments, setComments] = useState();
    const [name, setName] = useState('');
    const [newComment, setNewComment] = useState('');
    const [commentCount, setCommentCount] = useState(null)
    
    // Fetch All Comments
    useEffect(async() => {
        const response = await fetch(`http://localhost:8000/posts/${postId}/comments/?_sort=date&_order=desc`)
        const data = await response.json()
        setComments(data)
        setCommentCount(data.length)
        console.log(commentCount)
    }, [commentCount]);

    // Determine the number of comments once they have loaded.
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

    // Submit Handler for when a new comment is POSTED
    const handleSubmit = (e) => {

        // Don't reload the page on form submit
        e.preventDefault();

        // New Comment Data to Post
        const newCommentToPost = { 
            postId: postId,
            parentId: null, 
            user: name, 
            date: new Date().toISOString().substr(0, 10),
            content: newComment,
        }

        
        // Post new comment to Comments api
        fetch(`http://localhost:8000/comments?_sort=date&_order=asc`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCommentToPost),
        }).then(() => {
            console.log("New comment added")

            fetch(`http://localhost:8000/posts/${postId}/comments/?_sort=date&_order=desc`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setCommentCount(data.length)
                    console.log(commentCount)
                })
            
        })
    }
    // Comment Delete Handler
    const handleDelete = (commentId) => {

        // Post new comment to Comments api
        fetch(`http://localhost:8000/comments/${commentId}`, {
            method: 'DELETE',
        }).then(() => {
            // Another fetch req and comment count
            fetch(`http://localhost:8000/posts/${postId}/comments/?_sort=date&_order=desc`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setCommentCount(data.length)
                    console.log(commentCount)
                })
                console.log("Comment deleted.")
        })
    }

    return ( 

    <>
    <section className="add-comment">
        <form onSubmit={ handleSubmit } className="commentForm col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <hr/>
            <h3 className="mt-3"><i className="fas fa-pen-nib"></i> Add a Comment</h3>
            <p>We're happy for you to leave a comment that is appropriate and in line with our <Link href="#"><a
                    >comments policy</a></Link>. Please
                try not to leave spam, as our links are all nofollow. Let's just have an interesting
                conversation.</p>

            <div className="mb-3">
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    name="user"  
                    placeholder="Name" 
                    id="user"
                    aria-describedby="user" 
                    required />
            </div>
            <div className="mb-3"></div>
            <textarea
                value={ newComment }
                onChange={(e) => setNewComment(e.target.value)}
                className="form-control form-control-lg" 
                name="content" 
                id="content" 
                cols="30" 
                rows="3"
                required ></textarea>

            <div className="mt-3">
                <button type="submit" className="btn btn-primary">Add Your Comment</button>
            </div>
            <hr className="mt-4" />
        </form>
    </section>
    <section className="blog-comments col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            
    <div className="blog-comments-container">
        
        { commentStatement(comments) }

        { comments && comments.map(comment => (

            <div key={ comment.id }>
                <p className="comment-username">{ comment.user } </p>
                <p className="comment-date">Posted on: { comment.date }</p>
                <p className="comment-content"> { comment.content }</p>

                <button href="" className="replyComment btn btn-outline-primary btn-sml"
                    type="button" aria-expanded="false" aria-controls="collapseExample">Reply</button>
                <button type="submit" className="deleteComment btn btn-outline-danger" onClick={ (e) => handleDelete(comment.id) }>Delete </button>

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
    </>
    );
}

export default Comments;
import { useState } from 'react';
import Link from 'next/link';


const AddComment = ({postId}) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = { 
            postId: postId,
            parentId: null, 
            user: name, 
            date: new Date().toISOString().substr(0, 10),
            content: comment,
        }

        fetch(`http://localhost:8000/comments`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newComment),
        }).then(() => {
            console.log("New blog added")
        })
        
    }

    return ( 
// Add Comment Form
    <section className="add-comment">
        <form onSubmit={ handleSubmit } className="commentForm col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
            action="/blog/<%= post.slug %>" method="post">
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
                {/* <input type="hidden" name="postId" id="postId" value="" />
                <input type="hidden" name="id" id="id" value="" /> */}
            </div>
            <div className="mb-3"></div>
            <textarea
                value={ comment }
                onChange={(e) => setComment(e.target.value)}
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
    );
}

export default AddComment;
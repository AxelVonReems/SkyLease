import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <div key={comment.id} className="comment-card">
                    <div className="comment-header">
                        <span className="comment-user">{comment.user}</span>
                        <span className="comment-date">{comment.date}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                </div>
            ))}
            {comments.length === 0 && (
                <p className="no-comments-message">Sé el primero en dejar un comentario.</p>
            )}
        </div>
    );
};

export default CommentList;
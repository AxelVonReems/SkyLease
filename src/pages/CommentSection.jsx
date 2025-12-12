import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentSection = ({ comments, addComment }) => {
    return (
        <section className="comment-section">
            <h2 className="section-title">Comentarios de la Comunidad ({comments.length})</h2>

            {/* Formulario para añadir un nuevo comentario */}
            <div className="comment-form-container">
                <CommentForm addComment={addComment} />
            </div>

            {/* Lista de comentarios existentes */}
            <CommentList comments={comments} />

        </section>
    );
};

export default CommentSection;
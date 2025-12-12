import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            addComment(comment.trim());
            setComment(''); // Limpiar el campo
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <div className="form-group">
                <label htmlFor="comment-text">Añade tu Comentario</label>
                <textarea
                    id="comment-text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Escribe tu opinión o pregunta sobre este helicóptero..."
                    rows="4"
                    required
                ></textarea>
            </div>
            {/* Usamos la clase btn-register (Naranja) como CTA */}
            <button type="submit" className="btn btn-register comment-submit-btn">
                Publicar Comentario
            </button>
        </form>
    );
};

export default CommentForm;
import { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment.trim());
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="comment-text" className="block font-bold text-azul-oscuro mb-2">Añade tu Comentario</label>
        <textarea
          id="comment-text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu opinión o pregunta sobre este helicóptero..."
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-azul-claro focus:ring-2 focus:ring-azul-claro/20 transition-all font-body text-gris"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-azul-oscuro text-white font-bold py-3 px-6 rounded-lg hover:bg-naranja transition-colors">
        Publicar Comentario
      </button>
    </form>
  );
};

export default CommentForm;
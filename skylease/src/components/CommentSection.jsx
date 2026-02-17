import { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';

const CommentForm = ({ addComment, user, comments }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addComment(text);
    setText('');
  };

  if (!user) {
    return (
      <>
        <div className="text-center">
          <p className="text-gris mb-4">Inicia sesión para compartir tu experiencia</p>
          <Link to="/login" className="mb-4 inline-block bg-naranja text-white px-6 py-2 rounded font-bold hover:bg-azul-oscuro transition-colors">
            Iniciar Sesión
          </Link>
        </div>
        <CommentList comments={comments} />
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-bold text-azul-oscuro mb-2">
          Escribe tu opinión
        </label>
        <textarea
          className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-naranja/20 focus:border-naranja outline-none transition-all min-h-[120px] resize-none"
          placeholder={`¿Qué te pareció este helicóptero, ${user.username}?`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="mt-4 flex justify-end">
          <button 
            type="submit" 
            className="mb-4 bg-azul-claro text-white font-bold py-2 px-6 rounded hover:bg-azul-oscuro transition-colors"
          >
            Publicar Comentario
          </button>
        </div>
      </form>

      <CommentList comments={comments} />
    </>
  );
};

export default CommentForm;
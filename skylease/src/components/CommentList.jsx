const CommentList = ({ comments }) => {

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-100 border-dashed">
            <span className="font-heading font-bold text-azul-oscuro text-lg">
              {comment.username || "Usuario Anónimo"}
            </span>
            <span className="text-sm text-gray-400">
              {formatDate(comment.created_at)}
            </span>
          </div>
          <p className="text-gris leading-relaxed">
            {comment.content}
          </p>
        </div>
      ))}

      {comments.length === 0 && (
        <p className="text-center text-gray-400 italic py-8">
          Sé el primero en dejar un comentario.
        </p>
      )}
    </div>
  );
};

export default CommentList;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../components/UserContext';
import ProductInfo from '../components/ProductInfo';
import CommentSection from '../components/CommentSection';

const DetailPage = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [helicopter, setHelicopter] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [heliRes, commentRes] = await Promise.all([
          fetch(`http://localhost:3000/api/helicopters/${id}`),
          fetch(`http://localhost:3000/api/comments/helicopter/${id}`)
        ]);

        if (!heliRes.ok) throw new Error("Error cargando helicóptero");
        const heliData = await heliRes.json();
        const commentData = await commentRes.json();

        setHelicopter(heliData);
        setComments(commentData);
      } catch (err) {
        console.error("Error cargando datos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const addComment = async (text) => {
    if (!user) return alert("Debes iniciar sesión para comentar");

    try {
      const response = await fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          helicopter_id: id,
          content: text
        })
      });

      if (response.ok) {
        const res = await fetch(`http://localhost:3000/api/comments/helicopter/${id}`);
        const data = await res.json();
        setComments(data);
      } else {
        alert("Error al enviar comentario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="text-center py-20 font-bold text-azul-oscuro">Cargando datos...</div>;
  
  if (!helicopter) return <div className="text-center py-20">Helicóptero no encontrado</div>;

  return (
    <main className="pt-8 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <ProductInfo helicopter={helicopter} />
        </div>
        <div className="max-w-4xl mx-auto">
          <CommentSection 
              comments={comments} 
              addComment={addComment} 
              user={user} 
          />
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
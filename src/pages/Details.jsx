import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUser } from '../components/UserContext';
import ProductInfo from '../components/ProductInfo';
import CommentSection from '../components/CommentSection';
import './Details.css';
import helicopters from "../assets/data/helicopters.json";

// Comentarios de prueba
const initialComments = [
  { id: 1, user: 'Javier L.', date: '12/12/2025', text: 'Una experiencia de vuelo inigualable. El R44 es muy cómodo y ágil.' },
  { id: 2, user: 'Aleksei S.', date: '10/12/2025', text: 'Excelente servicio VIP y la flota se ve muy moderna. ¡Recomendado!' },
];

const DetailPage = () => {
  const [comments, setComments] = useState(initialComments);
  const { id } = useParams();
  const { user } = useUser();

  const helicopter = helicopters.find(h => h.id === parseInt(id));

  const addComment = (newComment) => {
    const commentWithMeta = {
      id: Date.now(),
      user: user ? user.name : 'Usuario SKYLEASE',
      date: new Date().toLocaleDateString('es-ES'),
      text: newComment,
    };
    setComments([commentWithMeta, ...comments]);
  };

  if (!helicopter) {
    return (
      <div className="detail-page-wrapper" style={{textAlign: 'center', paddingTop: '5rem'}}>
        <h2>Helicóptero no encontrado</h2>
        <Link to="/helicopteros" className="btn btn-secondary" style={{marginTop: '1rem', display: 'inline-block'}}>
            Volver a la flota
        </Link>
      </div>
    );
  }

  return (
    <main className="detail-page-wrapper">
        <div className="detail-container">
          <ProductInfo helicopter={helicopter} />
          <CommentSection comments={comments} addComment={addComment} />
      </div>
    </main>
  );
};

export default DetailPage;
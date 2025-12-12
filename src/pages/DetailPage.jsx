import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import CommentSection from './CommentSection';
import './DetailPageStyles.css'; // Importa los estilos específicos de la página de detalle

const initialComments = [
    { id: 1, user: 'Javier L.', date: '12/12/2025', text: 'Una experiencia de vuelo inigualable. El R44 es muy cómodo y ágil.' },
    { id: 2, user: 'Aleksei S.', date: '10/12/2025', text: 'Excelente servicio VIP y la flota se ve muy moderna. ¡Recomendado!' },
];

const mockProduct = {
    name: 'Robinson R44 Raven II',
    description: 'El Robinson R44 Raven II es un helicóptero ligero de cuatro plazas conocido por su fiabilidad y bajo coste operativo. Ideal para tours panorámicos, fotografía aérea y transporte personal de corta distancia.',
    // NOTA: Asegúrate de que esta ruta de imagen sea accesible en tu proyecto (ej: en la carpeta public/)
    imageUrl: '/assets/images/helicopteros/r44.jpg',
    features: [
        'Capacidad: 4 Personas (incl. piloto)',
        'Velocidad Máxima: 240 km/h',
        'Autonomía: 560 km',
        'Perfecto para vuelos turísticos y corporativos.',
    ],
};

const DetailPage = () => {
    const [comments, setComments] = useState(initialComments);

    const addComment = (newComment) => {
        // Genera un ID simple y la fecha actual
        const commentWithMeta = {
            id: Date.now(),
            user: 'Usuario SKYLEASE',
            date: new Date().toLocaleDateString('es-ES'),
            text: newComment,
        };
        // Añade el nuevo comentario al inicio de la lista
        setComments([commentWithMeta, ...comments]);
    };

    return (
        <div className="detail-page-wrapper">
            <main>
                <div className="detail-container">
                    {/* Información del Producto */}
                    <ProductInfo product={mockProduct} />

                    {/* Sección de Comentarios */}
                    <CommentSection comments={comments} addComment={addComment} />
                </div>
            </main>
        </div>
    );
};

export default DetailPage;
import { Link, useParams } from 'react-router-dom';
import { SquareArrowLeft } from 'lucide-react';

function ItemsDetail() {
    const { id } = useParams();
    console.log(id);
    return <div>
        <Link to={`/contact`}>Contact</Link>
        <Link to={`/items`}><SquareArrowLeft />Revenir a la page des films</Link>
        <p>Détail de l'élément {id}</p>
        </div>;
}

export default ItemsDetail;
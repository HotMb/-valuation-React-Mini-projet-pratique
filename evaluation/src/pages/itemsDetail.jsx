import { useParams } from 'react-router-dom';
function ItemsDetail() {
    const { id } = useParams();
    console.log(id);
    return <div>Détail de l'élément {id}</div>;
}

export default ItemsDetail;
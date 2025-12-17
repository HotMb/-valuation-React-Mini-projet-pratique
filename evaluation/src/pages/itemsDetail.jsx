import { Link, useParams, useNavigate } from 'react-router-dom';
import { SquareArrowLeft } from 'lucide-react';
import { useEffect, useState } from "react";

const API_KEY = "eb04f91c";

function ItemsDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItem() {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
            );
            const data = await response.json();

            if (data.Response === "False") {
                setError(data.Error || "Erreur API");
                setItem(null);
            } else {
                setItem(data);
            }
        } catch (err) {
            setError("Erreur réseau");
        } finally {
            setIsLoading(false);
        }}
        fetchItem();
    }, [id]);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>Erreur : {error}</p>;
    }

    if (!item) {
        return <p>Aucun élément trouvé.</p>;
    }

    return (
        <div>
            <Link to={`/contact`}>Contact</Link> <br></br>
            <Link to={`/items`}><SquareArrowLeft />Revenir a la page des films</Link>

            <h1>{item.Title}</h1>
            <p><strong>Année :</strong> {item.Year}</p>
            <p><strong>Genre :</strong> {item.Genre}</p>
            <p><strong>Réalisateur :</strong> {item.Director}</p>
            <p><strong>Acteurs :</strong> {item.Actors}</p>
            <p><strong>Note IMDb :</strong> {item.imdbRating}</p>
            <p><strong>Synopsis :</strong> {item.Plot}</p>
        </div>
    );
}

export default ItemsDetail;
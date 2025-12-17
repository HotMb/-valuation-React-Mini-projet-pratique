import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "eb04f91c";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=star&type=movie`
        );
        const data = await response.json();

        if (data.Response === "False") {
          setError(data.Error || "Erreur API");
          setItems([]);
        } else {
          setItems(data.Search || []);
        }
      } catch (err) {
        setError("Erreur réseau");
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      <h1>Liste des films</h1>
      <ul>
        {items.map((item) => (
          <li key={item.imdbID}>
            <h2>{item.Title}</h2>
            <p>{item.Year}</p>

            {item.Poster && item.Poster !== "N/A" && (
              <img
                src={item.Poster}
              />
            )}

            <div>
              <Link to={`/items/${item.imdbID}`}>Voir le détail</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
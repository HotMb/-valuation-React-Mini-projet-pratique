import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "eb04f91c";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);


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
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  function Favorite(imdbID) {
    setFavorites((prev) => {
      let updated;
      if (prev.includes(imdbID)) {
        updated = prev.filter((id) => id !== imdbID);
      } else {
        updated = [...prev, imdbID];
      }
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    }
  );}

  return (
    <div>
      <h1>Liste des films</h1>
      <p>
        Nombre de favoris : <strong>{favorites.length}</strong>
      </p>
      <ul>
        {items.map((item) => {
          const isFavorite = favorites.includes(item.imdbID);
          return(
          <li key={item.imdbID}>
            <h2>{item.Title}</h2>
            <p>{item.Year}</p>

            {item.Poster && item.Poster !== "N/A" && (
              <img
                src={item.Poster}
              />
            )}

            <div>
              <button onClick={() => Favorite(item.imdbID)}>
                  {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              </button>
            </div>

            <div>
              <Link to={`/items/${item.imdbID}`}>Voir le détail</Link>
            </div>
          </li>
        );})}
      </ul>
    </div>
  );
}

export default Items;
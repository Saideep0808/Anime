import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard"; // Correct the case of the file name

function App() {
  const [animes, setAnimes] = useState([]);
  const [term, setTerm] = useState("naruto");

  // Function to fetch anime data based on search term
  const getAnime = async (name) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
      const data = await response.json();
      setAnimes(data.data);  // Update state with fetched data
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };

  // Fetch default anime (naruto) on initial render
  useEffect(() => {
    getAnime(term);
  }, []); // Empty array means this runs only once on mount

  return (
    <>
      <h1>Anime Search</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search for anime e.g Naruto"
          value={term}
          onChange={(e) => setTerm(e.target.value)} // Update search term state
        />
        <button onClick={() => getAnime(term)}>Search</button> {/* Trigger search */}
      </div>

      {/* Display anime results */}
      <div className="container">
        {animes?.length > 0 ? (
          animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))
        ) : (
          <div>Not found</div>
        )}
      </div>
    </>
  )
}

export default App


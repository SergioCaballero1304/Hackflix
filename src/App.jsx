import movies from "./data/movies.json";
import "./App.css";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

function App() {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleReset = () => {
        setRating(0);
    };

    const stars = rating;

    let min = 0;
    let max = 10;
    if (rating > 0) {
        min = (stars - 1) * 2 + 0.1;
        max = stars * 2;
        if (stars === 1) min = 0;
    }

    const filteredMovies =
        rating === 0
            ? movies
            : movies.filter(
                  (movie) =>
                      movie.vote_average &&
                      movie.vote_average >= min &&
                      movie.vote_average <= max
              );

    return (
        <>
            <header>
                <a>Hackflix</a>
                <a>Home</a>
            </header>
            <main>
                <section>
                    <h1>¡Tus películas favoritas!</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                </section>
                <div className="rating">
                    Filtrar por rating:
                    <span>
                        <Rating onClick={handleRating} initialValue={rating} />
                        <button onClick={handleReset}>Restablecer</button>
                    </span>
                </div>
                <div className="cards">
                    {filteredMovies.map((movie) => {
                        return (
                            <div className="movies" key={movie.id}>
                                <img
                                    src={movie.poster_path}
                                    alt={movie.title}
                                />
                            </div>
                        );
                    })}
                    {filteredMovies.length === 0 && (
                        <div className="no-movies">
                            <p>
                                Lo sentimos, no hay películas que coincidan con
                                el filtro.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

export default App;

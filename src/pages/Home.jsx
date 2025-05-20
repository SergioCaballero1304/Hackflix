import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "../App.css";

function Home() {
    const [rating, setRating] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${
                    import.meta.env.VITE_API_KEY
                }`
            )
            .then((response) => {
                setMovies(response.data.results);
            });
    }, []);

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
                    {filteredMovies.length === 0 ? (
                        <div className="no-movies">
                            <p>
                                Lo sentimos, no hay películas que coincidan con
                                el filtro.
                            </p>
                        </div>
                    ) : (
                        filteredMovies.map((movie) => {
                            return (
                                <div className="movies" key={movie.id}>
                                    <Link
                                        to={`/pelicula/` + movie.id}
                                        key={movie.id}
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            alt={movie.title}
                                            className="movie-poster"
                                        />
                                    </Link>
                                </div>
                            );
                        })
                    )}
                </div>
            </main>
        </>
    );
}

export default Home;

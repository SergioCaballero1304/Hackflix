import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import "../Search.css";

function Search() {
    const [movies, setMovies] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");

    useEffect(() => {
        if (searchInputValue === "") {
            return;
        } else {
            axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${
                        import.meta.env.VITE_API_KEY
                    }&query=${searchInputValue}`
                )
                .then((response) => {
                    setMovies(response.data.results);
                });
        }
    }, [searchInputValue]);

    return (
        <>
            <h1>Búsqueda de películas por título</h1>
            <form>
                <input
                    type="text"
                    value={searchInputValue}
                    onInput={(event) => setSearchInputValue(event.target.value)}
                />
            </form>
            <div className="cards">
                {movies.map((movie) => {
                    return (
                        <div className="movies" key={movie.id}>
                            <Link to={`/pelicula/` + movie.id} key={movie.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="movie-poster"
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Search;

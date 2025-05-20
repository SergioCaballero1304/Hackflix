import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../MovieDetail.css";

function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/" +
                    params.id +
                    "?api_key=" +
                    import.meta.env.VITE_API_KEY_DETAIL +
                    "&language=es-ES&page=1"
            )
            .then((response) => {
                setMovieDetail(response.data);
            });
    }, []);

    return (
        <>
            <div className="movie-detail">
                <div className="movie-detail-image">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                        alt={movieDetail.title}
                    />
                </div>
                <div className="movie-detail-info">
                    <h1>
                        {movieDetail.title} (
                        {movieDetail.release_date?.slice(0, 4)})
                    </h1>
                    {movieDetail.genres && (
                        <p>
                            {movieDetail.tagline} <br />
                            <strong>Géneros:</strong>{" "}
                            {movieDetail.genres
                                .map((genre) => genre.name)
                                .join(", ")}
                        </p>
                    )}
                    <h2>Descripción</h2>
                    <p>{movieDetail.overview}</p>
                    <h3>Valoración</h3>{" "}
                    <p>{movieDetail.vote_average?.toFixed(1)} / 10</p>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;

import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

function App() {
    return (
        <>
            <header>
                <Link to="/" className="to-home">
                    Hackflix
                </Link>
                <Link to="/" className="to-home">
                    Home
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pelicula/:id" element={<MovieDetail />} />
            </Routes>

            <footer>Sergio Caballero, 2025.</footer>
        </>
    );
}

export default App;

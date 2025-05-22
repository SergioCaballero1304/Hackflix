import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
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
                <Link to="/buscar" className="search">
                    Buscar
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pelicula/:id" element={<MovieDetail />} />
                <Route path="/buscar" element={<Search />} />
            </Routes>

            <footer>Sergio Caballero, 2025.</footer>
        </>
    );
}

export default App;

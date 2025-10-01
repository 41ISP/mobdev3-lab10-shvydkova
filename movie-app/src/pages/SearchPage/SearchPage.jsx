import { useEffect, useState } from "react"
import "./SearchPage.css"
import Stats from "../../components/stats/stats"
import MovieCard from "../../components/movieCard/movieCard"
const SearchPage = () => {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
        console.log(movies)
    }, [movies])
    const handleSearch = async () => {
        try {

            const parameters = new URLSearchParams({
            apikey: import.meta.env.VITE_MOVIE_APP_APYKEY, s: movieName, page: 1
            })
            const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
            const json = await res.json()
            setMovies(json);
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="container">
            <div className="header">
                <h1>🎬 Movie Search Results</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for movies..." value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
                {movies && <Stats {...movies} />}

            </div>

            <div className="movie-grid">
                {movies && movies.Search.map((movie) => <MovieCard {...movie}/>)}
                {/* <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">2019</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt7286456</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Joker: Folie à Deux" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Joker: Folie à Deux</div>
                        <div className="movie-meta">
                            <span className="movie-year">2024</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt11315808</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
                            alt="Batman Beyond: Return of the Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">
                            Batman Beyond: Return of the Joker
                        </div>
                        <div className="movie-meta">
                            <span className="movie-year">2000</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt0233298</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BMjE0NjIxODMxN15BMl5BanBnXkFtZTcwMjM5MDcxOA@@._V1_SX300.jpg"
                            alt="Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">2012</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt1918886</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BODAwNWQ1ZjgtZTRiOC00MTcwLTg2ZjEtNjRhNzI5ODFkZjNlXkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Mera Naam Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Mera Naam Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">1970</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt0066070</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNWEzNDBiNzItMDQwMy00ZDAwLWExOGUtNDJhNGYwNjA2OTJlXkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">2021–2024</span>
                            <span className="movie-type">series</span>
                        </div>
                        <div className="movie-id">IMDb: tt16409108</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BMTg3NzU5Mzg1MF5BMl5BanBnXkFtZTgwODIxMDg4MDI@._V1_SX300.jpg"
                            alt="Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">2016</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt5611648</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BMjU0MzBkNTctNjUyOC00YTU3LTg5YTctNDA1ZGE0NzI3MDIzXkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Jack & Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">Jack & Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">2024–2025</span>
                            <span className="movie-type">series</span>
                        </div>
                        <div className="movie-id">IMDb: tt33054648</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BMWM5NTEyMWQtZmZiYS00NDJjLThlNGUtNTMyNTA0NjA0Yjk5XkEyXkFqcGc@._V1_SX300.jpg"
                            alt="The Joker Is Wild" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">The Joker Is Wild</div>
                        <div className="movie-meta">
                            <span className="movie-year">1957</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt0050569</div>
                    </div>
                </div>

                <div className="movie-card">
                    <div className="poster-container">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BZTA2YWYxYWUtODA3Ni00MTI4LTkxYjktMDQ2M2M3MzZmZGU4XkEyXkFqcGc@._V1_SX300.jpg"
                            alt="The People's Joker" />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">The People's Joker</div>
                        <div className="movie-meta">
                            <span className="movie-year">2022</span>
                            <span className="movie-type">movie</span>
                        </div>
                        <div className="movie-id">IMDb: tt21651430</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default SearchPage
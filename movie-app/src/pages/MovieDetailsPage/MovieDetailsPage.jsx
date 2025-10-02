import { Link, useParams } from "react-router-dom"
import "./MovieDetailsPage.css"
import { useEffect } from "react"
import { useState } from "react"
const MovieDetailsPage = ({Actors, Awards, Country, Director, Genre, Language, Metascore, 
    Plot, Poster, Rated, Ratings, Released, Response, Runtime, Title, Type, Writer, Year, 
    imdbID, imdbRating, imdbVotes, totalSeasons}) => {
    const [movie, setMovie] = useState(undefined)
    const { id } = useParams()
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    apikey: import.meta.env.VITE_MOVIE_APP_APYKEY, i: id
                })
                const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
                const json = await res.json()
                if (json.Response === "False") throw new Error("Не получилось получить фильм")
                setMovie(json);
                console.log(json);
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch();
    }, [])
    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>

            <div className="movie-detail-card">
                <div className="movie-header">
                    <div className="poster-section">
                        <img
                            src={Poster}
                            alt={Title}
                            className="poster-image" />
                        <div className="rating-badge">{movie.imdbRating}</div>
                    </div>

                    <div className="info-section">
                        <h1 className="movie-title">{movie.Title}</h1>
                        <div className="movie-tagline">
                            <span className="tag">{movie.Year}</span>
                            <span className="tag rated">{movie.Rated}</span>
                            <span className="tag">{movie.Runtime}</span>
                            <span className="tag">{Genre}</span>
                        </div>

                        <div className="movie-meta">
                            <div className="meta-item">
                                <span className="meta-label">Released:</span>
                                <span className="meta-value">04 Oct 2019</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Language:</span>
                                <span className="meta-value">English, German</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Country:</span>
                                <span className="meta-value">
                                    United States, Canada, Australia
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">IMDb ID:</span>
                                <span className="meta-value">tt7286456</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movie-body">
                    <div className="section">
                        <h2 className="section-title">Plot Summary</h2>
                        <p className="plot-text">
                            Arthur Fleck, a party clown and a failed stand-up
                            comedian, leads an impoverished life with his ailing
                            mother. However, when society shuns him and brands
                            him as a freak, he decides to embrace the life of
                            chaos in Gotham City.
                        </p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Cast & Crew</h2>
                        <div className="info-grid">
                            <div className="info-box">
                                <div className="info-box-title">Director</div>
                                <div className="info-box-content">
                                    Todd Phillips
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Writer</div>
                                <div className="info-box-content">
                                    Todd Phillips, Scott Silver, Bob Kane
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Actors</div>
                                <div className="info-box-content">
                                    Joaquin Phoenix, Robert De Niro, Zazie Beetz
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Ratings & Reviews</h2>
                        <div className="ratings-container">
                            <div className="rating-box">
                                <div className="rating-source">
                                    Internet Movie Database
                                </div>
                                <div className="rating-value">8.3/10</div>
                            </div>
                            <div className="rating-box">
                                <div className="rating-source">Rotten Tomatoes</div>
                                <div className="rating-value">68%</div>
                            </div>
                            <div className="rating-box">
                                <div className="rating-source">Metacritic</div>
                                <div className="rating-value">59/100</div>
                            </div>
                        </div>

                        <div className="awards-box">
                            <div className="awards-icon">🏆</div>
                            <div className="awards-text">
                                Won 2 Oscars. 120 wins & 246 nominations total
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Box Office & Statistics</h2>
                        <div className="box-office-section">
                            <div className="box-office-card">
                                <div className="box-office-label">Box Office</div>
                                <div className="box-office-value">$335.5M</div>
                            </div>
                            <div className="box-office-card">
                                <div className="box-office-label">IMDb Votes</div>
                                <div className="box-office-value">1,637,986</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetailsPage
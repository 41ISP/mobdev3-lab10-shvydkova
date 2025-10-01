const MovieCard = ({ Title, Year, Type, ImdbID, Poster }) => {
    return (
        <div className="movie-card">
            <div className="poster-container">
                <img
                    src={Poster}
                    alt={Title} />
            </div>
            <div className="movie-info">
                <div className="movie-title">{Title}</div>
                <div className="movie-meta">
                    <span className="movie-year">{Year}</span>
                    <span className="movie-type">{Type}</span>
                </div>
                <div className="movie-id">{ImdbID}</div>
            </div>
        </div>
    )
}
export default MovieCard

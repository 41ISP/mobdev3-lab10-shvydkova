import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import { createBrowserRouter } from "react-router-dom"
export const router = createBrowserRouter([

    {
        path: "/",
        element: <SearchPage />
    },
    {
        path: "movie/:id",
        element: <MovieDetailsPage />
    }
]
)
export default router
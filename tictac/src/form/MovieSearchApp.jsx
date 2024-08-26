import React, { useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";
import MovieLayout from "./MovieLayout";
import MovieItemLoading from "./MovieItemLoading";
// https://api.themoviedb.org/3/movie/550?api_key=2082c4773982ec3d3963baba69d7990d
// https://api.themoviedb.org/3/search/movie?api_key=2082c4773982ec3d3963baba69d7990d&query=''
const MovieSearchApp = () => {
    const [movies, setMovie] = useState([]);
    const [query, setQuery] = useState("r");
    const [loading, setLoading] = useState(true);
    const handleChange = lodash.debounce((event) => {
        setQuery(event.target.value);
    }, 500);
    useEffect(() => {
        async function fetchApi() {
            setLoading(true);
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=2082c4773982ec3d3963baba69d7990d`
            );
            if (response.data.results) {
                setMovie(response.data.results);
                setLoading(false);
            }
        }
        fetchApi();
    }, [query]);
    return (
        <div className="p-10 ">
            <div className="w-full max-w-[500px] mx-auto mb-[137px]">
                <input
                    type="text"
                    className="w-full p-5 rounded-lg border border-purple-500 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] ;"
                    placeholder="Search movie"
                    onChange={handleChange}
                />
            </div>
            {loading && <MovieItemLoading />}
            {!loading && (
                <div className="grid grid-cols-3 gap-[50px]">
                    {movies.length > 0 &&
                        movies.map((item, index) => (
                            <MovieLayout key={item.id} data={item} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default MovieSearchApp;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const dispatch = useDispatch();

  const favorites = useSelector((depo) => depo.favoriReducer.favorites);
  const display = useSelector((depo) => depo.favoriReducer.displayFavorites);

  const favorite = favorites.find((favorite) => favorite.id);

  function deleteFavoriFonk() {
    dispatch(removeFavorite(favorite.id));
  }

  return (
    display && (
      <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
        <h5 className="font-bold">Favori Filmler</h5>
        <div className="pt-3 text-sm">
          {favorites?.map((movie) => (
            <Link
              key={movie.id}
              className="py-1 flex gap-2 justify-between"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span
                onClick={deleteFavoriFonk}
                className="material-icons hover:text-red-600 text-[18px]"
              >
                remove_circle
              </span>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default FavoriteMovieList;

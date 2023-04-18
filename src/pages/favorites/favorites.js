import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/Select";
import classes from "../imageList/imageList.module.css";
import { orderArr, limitArr } from "../../config/selectConfig";
import { fetchFavorites } from "../../store/FavSlice";
import { useEffect } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";

const Favorites = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.fav);

  console.log(state);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div>
      {/* <Select
        title={"Order"}
        value={filtersState}
        selectHandler={filtersHandler}
        options={orderArr}
      /> */}
      <ul>
        {state.fav.map((fav, index) => (
          <img
            alt="qqq"
            src={fav.image.url}
            className={classes.img}
            key={fav.image_id + index}
            {...fav}
          />
        ))}
      </ul>
      {state.status === "pending" && <LoadingSpinner />}
      {state.error?.message && <h2>{state.error?.message}</h2>}
      {/* <Select
        title={"Page"}
        value={filtersState.selectedLimit}
        selectHandler={filtersHandler}
        options={limitArr} */}
      {/* /> */}
    </div>
  );
};
export default Favorites;

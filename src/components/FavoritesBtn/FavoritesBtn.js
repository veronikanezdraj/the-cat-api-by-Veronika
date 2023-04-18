import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../store/FavSlice";

const FavoritesBtn = ({ id, image_id, url }) => {
  const dispatch = useDispatch();
  console.log(image_id, url);
  return (
    <>
      <button onClick={() => dispatch(addFav({ image_id, url }))}>
        FAV IT
      </button>
      {/* <span
        className="delete"
        onClick={() => dispatch(deleteFav({ id }))}
      ></span> */}
    </>
  );
};
export default FavoritesBtn;
//
// JSON.stringify ??

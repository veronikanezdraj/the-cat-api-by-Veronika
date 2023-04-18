import { useEffect, useState } from "react";
import classes from "./vote.module.css";
import { METHOD_TYPES, request } from "../../api/index";

import FavoritesBtn from "../../components/FavoritesBtn/FavoritesBtn";
import LoadingSpinner from "../../UI/LoadingSpinner";

const valueTypes = {
  like: 1,
  dislike: 0,
};

const Vote = () => {
  const [imageInfo, setImageInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getImage = async () => {
    setLoading(true);
    const imageInfo = await request("/images/search");
    setImageInfo(imageInfo[0]);
    setLoading(false);
  };

  const imageActionRequest = async (image_id, value) => {
    const data = {
      image_id,
      value,
    };
    await request("/votes", METHOD_TYPES.POST, data);
    await getImage();
  };

  useEffect(() => {
    getImage();
  }, []);
  console.log(imageInfo);
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.voteWrapper}>
      <div className={classes.buttonWrapper}>
        <button
          onClick={() => imageActionRequest(imageInfo.id, valueTypes.like)}
          className={classes.buttonLike}
        >
          Like
        </button>
        <button
          onClick={() => imageActionRequest(imageInfo.id, valueTypes.dislike)}
          className={classes.buttonDis}
        >
          Dislike
        </button>
      </div>
      <div className={classes.imageWrapper}>
        <img src={imageInfo.url} alt="cat" />
        <div>
          <FavoritesBtn image_id={imageInfo.id} url={imageInfo.url} />
        </div>
      </div>
    </div>
  );
};
export default Vote;

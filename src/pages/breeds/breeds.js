import { request } from '../../api';
import { useEffect, useState } from 'react';
import classes from './breeds.module.css';

const Breeds = () => {
  const [breedsArray, setBreedsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectName, setSelectName] = useState();
  const [infoArr, setInfoArr] = useState([]);
  const [imageInfo, setImageInfo] = useState(null);

  const getBreeds = async () => {
    setLoading(true);
    const response = await request('/breeds');
    setBreedsArray(response);
    setLoading(false);
    setSelectName(response[0].name);
  };

  const BreedsInfo = async (arg) => {
    const searchInfoBreeds = await request(`/breeds/search?q=${arg}`);
    setInfoArr(searchInfoBreeds);
  };

  const getImage = async (lol) => {
    const response = await request(`/images/search?breed_id=${lol}`);

    setImageInfo(response);
  };

  useEffect(() => {
    getBreeds();
  }, []);

  useEffect(() => {
    if (infoArr[0]?.id) {
      getImage(infoArr[0]?.id);
    }
  }, [infoArr]);

  const selectHandler = (event) => {
    setSelectName(event.target.value);
    BreedsInfo(event.target.value);
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <select
          className={classes.drop}
          value={selectName}
          onChange={selectHandler}
        >
          {breedsArray.map((breed) => (
            <option value={breed.name} key={breed.name}>
              {breed.name}
            </option>
          ))}
        </select>
      )}
      <div>
        {infoArr.map((info) => (
          <div key={info.id}>
            <div>
              {imageInfo && (
                <img
                  className={classes.img}
                  src={imageInfo[0]?.url}
                  alt="  cat  "
                />
              )}
              <div className={classes.container_box}>
                <div className={classes.name}>{info.name} </div>
                <div className={classes.description}>ID: {info.id}</div>
                <div className={classes.description}>{info.description}</div>
                <div className={classes.description}>{info.temperament}</div>
                <div className={classes.description}>
                  {info.origin}
                  <div className={classes.container_description}>
                    Average life span :{info.life_span}
                  </div>
                  <button
                    className={classes.button}
                    onClick={() => window.open(info.wikipedia_url)}
                  >
                    WIKIPEDIA
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breeds;
// console.log(breedsArray);
// const BreedsInfoRequest = async (image_id, value) => {
//   const data = {
//     image_id,
//     value,
//   };
//   await request('/breeds', data);
//   await
// };

import { request } from "../../api";
import { useEffect, useState } from "react";
import classes from "./imageList.module.css";
import Select from "../../components/Select";
import { limitArr, typeArr, orderArr } from "../../config/selectConfig";

const ImageSearch = () => {
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [breedsArray, setBreedsArray] = useState([]);
  const [allImg, setAllImg] = useState();
  const [loading, setLoading] = useState(true);

  // const [selectedLimit, setSelectedLimit] = useState(limitArr[0]);

  // const [selectedType, setSelectedType] = useState();

  // const [selectedOrder, setSelectedOrder] = useState();

  // const [selectedCategory, setSelectedCategory] = useState();

  // const [selectedBreed, setSelectedBreed] = useState();

  const [filtersState, setFiltersState] = useState({
    Limit: limitArr[0],
    Type: "",
    Order: "",
    Breed: "",
    Category: "",
  });

  const getAllImg = async (filtersState) => {
    setLoading(true);
    const response = await request(
      `/images/search?limit=${filtersState.Limit.id}&order=${filtersState.Order}&mime_types=${filtersState.Type}&category_ids=${filtersState.Category}&breed_id=${filtersState.Breed}`
    );
    setAllImg(response);
    setLoading(false);
  };

  const getCategories = async () => {
    const response = await request("/categories");
    setCategoriesArr(response);
  };

  const getBreeds = async () => {
    const response = await request("/breeds");
    setBreedsArray(response);
  };

  useEffect(() => {
    getBreeds();
    getCategories();
  }, []);

  useEffect(() => {
    if (breedsArray.length && categoriesArr.length) {
      getAllImg(filtersState);
    }
  }, [breedsArray, categoriesArr, filtersState]);

  const filtersHandler = (value, type) => {
    setFiltersState((prevState) => {
      return { ...prevState, [type]: value };
    });
  };

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name] :value});
  // };
  // const breedHandler = (event) => {
  //   setSelectedBreed(event.target.value);
  // };
  // const limitImgHandler = (event) => {
  //   setSelectedLimit(event.target.value);
  // };
  // const typeHandler = (event) => {
  //   setSelectedType(event.target.value);
  // };

  // // const orderHandler = (event) => {
  // //   setSelectedOrder(event.target.value);
  // // };
  // const categoryHandler = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  return (
    <div className={classes.container}>
      <div className={classes.drop_box}>
        <Select
          title={"Order"}
          value={filtersState.selectedOrder}
          selectHandler={filtersHandler}
          options={orderArr}
        />

        <Select
          title={"Type"}
          value={filtersState.selectedType}
          selectHandler={filtersHandler}
          options={typeArr}
        />

        <Select
          title={"Category"}
          value={filtersState.selectedCategory}
          selectHandler={filtersHandler}
          options={categoriesArr}
        />

        <Select
          title={"Breed"}
          value={filtersState.selectedBreed}
          selectHandler={filtersHandler}
          options={breedsArray}
        />
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          allImg.map((img) => (
            <img
              alt="ikkg"
              src={img.url}
              key={img.id}
              className={classes.img}
            ></img>
          ))
        )}
      </div>
      <Select
        title={"Page"}
        value={filtersState.selectedLimit}
        selectHandler={filtersHandler}
        options={limitArr}
      />
    </div>
  );
};

export default ImageSearch;
// 'none',
// 'boxes',
// 'clothes',
// 'hats',
// 'sinks',
// 'space',
// 'sunglasses',
// 'ties',
// const sortOrder = (order, ascending) => {
//   return order.sort((desc, asc) => {
//     if (ascending) {
//       return desc.id > asc.id ? 1 : -1;
//     } else {
//       return desc.id < asc.id ? 1 : -1;
//     }
//   });
// };
/* <label htmlFor="Breed" className={classes.label}>
Breed
</label>
<select
name="Breed"
value={selectedBreed}
onChange={breedHandler}
className={classes.drop}
>
{breedsArray.map((breed) => (
  <option value={breed.id} key={breed.id} className={classes.drop}>
    {breed.name}
  </option>
))}
</select> */
// [{ name: 9,id:9 }, { name: 18,id
//   :19}, { name: 20,id:20 }];
/* <label htmlFor="Order" className={classes.label}>
          Order
        </label>
        <select
          name="Order"
          className={classes.drop}
          value={selectedOrder}
          onChange={orderHandler}
        >
          {orderArr.map((order) => (
            <option key={order}>{order}</option>
          ))}
        </select> */
/* <label htmlFor="Category" className={classes.label}>
          Category
        </label>
        <select
          name="Category"
          value={selectedCategory}
          onChange={categoryHandler}
          className={classes.drop}
        >
          {categoriesArr.map((categ) => (
            <option key={categ.id} value={categ.id}>
              {categ.name}
            </option>
          ))}
        </select> */
//   <label htmlFor="Per Page" className={classes.label}>
//   Per Page
// </label>
// <select
//   name="Per Page"
//   className={classes.drop}
//   value={selectedLimit}
//   onChange={limitImgHandler}
// >
//   {limitArr.map((nmb) => (
//     <option key={nmb}>{nmb}</option>
//   ))}
// </select>

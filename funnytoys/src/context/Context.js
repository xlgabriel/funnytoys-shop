import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import imgbarbie1 from 'D:/React.js/funnytoys-gabriel-jeannot/funnytoys/src/assets/barbie1.jpg';
import imgbarbie2 from 'D:/React.js/funnytoys-gabriel-jeannot/funnytoys/src/assets/barbie2.jpg';
import imglol1 from 'D:/React.js/funnytoys-gabriel-jeannot/funnytoys/src/assets/lol1.jpg';
import imglol2 from 'D:/React.js/funnytoys-gabriel-jeannot/funnytoys/src/assets/lol2.jpg';

const Cart = createContext();
faker.seed(99);

let imgArray=[
  {img: imgbarbie1, name: '¡Nueva promoción!'},
  {img: imgbarbie2, name: 'Colección de verano'},
  {img: imglol1, name: 'Megapromo'},
  {img: imglol2, name: 'Tu juguete favorito'},
]

const Context = ({ children }) => {
  const products = [...Array(15)].map(() => ({
    id: faker.datatype.uuid(),
    name: imgArray[Math.floor(Math.random()*imgArray.length)].name,
    price: faker.random.arrayElement(['65000', '90000', '105000', '120000', '135000', '200000']),
    image: imgArray[Math.floor(Math.random()*imgArray.length)].img,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    subgroup: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    bySubgroup: false,
    bySubgroupLOL: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

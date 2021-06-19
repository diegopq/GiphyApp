import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  //ejecuta codigo de manera condicional cuando lo que esta dentro del
  //arreglo del segundo parametro cambia
  useEffect(() => {
    getGifts(category).then((imgs) => {
      setstate({ data: imgs, loading: false });
    });
  }, [category]);

  return state;
};

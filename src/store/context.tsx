import React, { useState, useEffect, createContext } from "react";
import data from "../db/data";
import { IStoreContext } from "../InterfaceAndTypes/Interface";
import { TData } from "../InterfaceAndTypes/types";

const StoreContext = createContext<IStoreContext | null>(null);

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState<TData[]>([]);

  const handleTab = (num: number) => {
    setIndex(num);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = data?.filter((prd) =>
      prd.name.toLowerCase().includes(inputValue)
    );

    setProduct(output);
    setIndex(4);
  };

  const fruit = data.filter((item) => item.type === "fruit");
  const vegetable = data.filter((item) => item.type === "vegetables");
  const protein = data.filter((item) => item.type === "Proteins");

  useEffect(() => {
    if (index === 0 || inputValue === "") {
      setProduct(data);
    }
    if (index === 1) {
      setProduct(fruit);
    }

    if (index === 2) {
      setProduct(vegetable);
    }

    if (index === 3) {
      setProduct(protein);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, inputValue]);

  return (
    <StoreContext.Provider
      value={{
        product,
        index,
        handleTab,
        handleSearch,
        inputChange,
        inputValue,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };

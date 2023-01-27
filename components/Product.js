import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import Image from "next/image";
/*
lg:hover:transform lg:hover:scale-150
*/
const Product = ({ _id, name, price, picture }) => {
  const { setSelectedProducts } = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id]);
  }
  return (
    <div className="flex flex-col justify-center items-center rounded-xl m-3">
      <div className="relative h-40 lg:h-60 w-40 lg:w-60 p-5 mt-8 flex justify-center items-center overflow-hidden rounded-xl">
        <Image
          layout="fill"
          objectFit="cover"
          width={500}
          height={500}
          src={picture}
        />
      </div>
      <div className="mt-1">
        <h3 className="font-bold text-lg capitalize text-center">{name}</h3>
        <h3 className="text-lg capitalize text-center">
          {price?.toFixed(3)} VNĐ
        </h3>
      </div>
    </div>
  );
};

export default Product;

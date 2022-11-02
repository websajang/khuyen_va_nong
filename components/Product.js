import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"
/*
lg:hover:transform lg:hover:scale-150
*/
const Product = ({ _id, name, price, picture }) => {
    const { setSelectedProducts } = useContext(ProductsContext);
    function addProduct() {
        setSelectedProducts(prev => [...prev, _id]);
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='p-5 mt-8 w-40 lg:w-48 h-40 lg:h-48 flex justify-center items-center overflow-hidden rounded-xl'>
                <img className="flex-shrink-0 min-w-full min-h-full transform scale-150" src={picture} />
            </div>
            <div className='mt-1'>
                <h3 className='font-bold text-lg capitalize text-center'>{name}</h3>
                <h3 className='text-lg capitalize text-center'>{price?.toFixed(3)} VNĐ</h3>
            </div>
        </div>
    )
}

export default Product
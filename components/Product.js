import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"
/*
lg:hover:transform lg:hover:scale-150
*/
const Product = ({ _id, name, description, picture }) => {
    const { setSelectedProducts } = useContext(ProductsContext);
    function addProduct() {
        setSelectedProducts(prev => [...prev, _id]);
    }
    return (
        <div className=''>
            <div className='p-5 w-64 h-64 flex justify-center items-center overflow-hidden rounded-xl'>
                <img className="flex-shrink-0 min-w-full min-h-full transform scale-125 lg:hover:scale-150" src={picture} />
            </div>
            <div className='mt-1'>
                <h3 className='font-bold text-lg capitalize text-center'>{name}</h3>
            </div>
        </div>
    )
}

export default Product
import React, { useEffect , useState, useContext} from 'react'
import { ShopContext } from '../context/ShopContext'; // adjust path as needed
import Title from './Title';
import ProductItem from './productItem';
const RelatedProduct = ({category, subCategory}) => {

   const {products} = useContext(ShopContext);
   const [related, setRelated] = useState([]);

   useEffect(() =>{
    if(products.length > 0){
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category ===  item.category);
      productsCopy = productsCopy.filter((item) => subCategory ===  item.subCategory);
      setRelated(productsCopy.slice(0,4));
    }
   },[products]);
  return (
    <div className='my-24'>
      <div className='text-center text-2xl font-semibold mb-8'>
        <Title text1={'Related'}text2={'Products'} />
      </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {related.map((item,index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))}
        </div>
    </div>
  )
}

export default RelatedProduct
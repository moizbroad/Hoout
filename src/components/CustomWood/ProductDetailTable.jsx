import React from 'react'
import Button from '../Common/Button'

const ProductDetailTable = () => {
const productDetails =[{


}]

  return (
   <>
  
<section className='px-[100px] pt-[61px]'>

<table>
  <tr className="bg-[#D1D1D1] px-1">
    <td className='font-bold text-15 py-[8px] min-w-[291px]'>Variant</td>
    <td className='font-bold text-15 py-[8px] min-w-[200px]'>Articlenumber</td>
    <td className='font-bold text-15 py-[8px] min-w-[150px]'>Price</td>
    <td className='font-bold text-15 py-[8px] min-w-[300px]'>Stock</td>
    <td className='font-bold text-15 py-[8px] min-w-[200px]'>Number</td>
    <td className='font-bold text-15 py-[8px] min-w-[184px]'>Winkelwagen</td>
  </tr>
</table>


   <section className='pt-[20px]' >
   <div className='flex  w-[100%]'>
      <div className='flex-col min-w-[291px]'>
        <div className='font-bold text-14'> Variant</div>
        <div>100cm</div>

      </div>

      <div className='flex-col min-w-[200px]'> 
      <div className='font-bold text-14'>Article number</div>
      <div>BEZ2098_C_100</div>
      </div>

      <div className='flex-col min-w-[150px]'>
         <div className='font-bold text-14'>Price Inc BTW</div>
         <div>$10,91</div>
         </div>


      <div className='flex-col  min-w-[300px]'>
        <div className='font-bold text-14'>Inventory quantity</div>
        <div>If you are interested, please contact us</div>
      </div>


      <div className='min-w-[200px]'> add</div>
      <div className='min-w-[184px]'>Out of stock  </div>
    </div>
   </section>

   

  </section>    


<div className='flex justify-center pt-[50px]'>  <Button btnText="Add to Cart" paddingX="200px" py="21px"/></div>
    
   </>
  )
}

export default ProductDetailTable
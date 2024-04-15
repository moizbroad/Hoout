import React from 'react'
import rightArrow from "../assets/customWoodPage/rightArrow.svg";
import ShoppingCart from '../components/CartSections/ShoppingCart';
const AddToCart = () => {
  return (
    <>
    <section className="px-[100px] bg-[#F4F5F7]">
    <tr className="gap-x-6 flex  items-center  py-[40px]">
      <td className="text-[#9F9F9F] text-16">Home </td>
      <td>
        <img src={rightArrow} />
      </td>
      <td className="text-[#9F9F9F] text-16"> Shop</td>
      <td>
        <img src={rightArrow} />
      </td>
      <td className="h-[px] font-bold text-[#9F9F9F] ">| </td>
      <td>Cart </td>
    </tr>
  </section>


  <section className='pt-[50px] flex justify-center'>
    <div className='font-medium  text-54  '> Cart </div>
  </section>

  <section className='pt-[50px] flex justify-center gap-x-28'>
    <div className='font-medium  text-22  '> Cart </div>
    <div className='font-medium  text-22  '> Chekout  </div>
    <div className='font-medium  text-22  '> Order Complete </div>
  </section>
  


  <section> </section>

  <ShoppingCart/>


  
    
    </>
  )
}

export default AddToCart
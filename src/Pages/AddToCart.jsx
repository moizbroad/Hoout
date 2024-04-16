import React from 'react'
import rightArrow from "../assets/customWoodPage/rightArrow.svg";
import ShoppingCart from '../components/CartSections/ShoppingCart';
import CheckoutDetail from '../components/CartSections/CheckoutDetail';
import OrderComplete from '../components/CartSections/OrderComplete';
import { Stepper , Step} from 'react-form-stepper';
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
  

  <Stepper activeStep={3}>
  <Step label="Children Step 1" />
  <Step label="Children Step 2" />
  <Step label="Children Step 3" />
</Stepper>


  <section className='pt-[50px] flex justify-center'>
    <div className='font-medium  text-54  '> Cart </div>
  </section>

  {/* <section className='pt-[50px] flex justify-center gap-x-28'>
    <div className='font-medium  text-22  '> Cart </div>
    <div className='font-medium  text-22  '> Chekout  </div>
    <div className='font-medium  text-22  '> Order Complete </div>
  </section> */}
  


  <section> </section>

  {/* <ShoppingCart/> */}
  <CheckoutDetail/>


  
    
    </>
  )
}

export default AddToCart
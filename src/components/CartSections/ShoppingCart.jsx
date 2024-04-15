import React from 'react'
import cross  from "../../assets/addToCart/cross.svg";
import image1  from "../../assets/addToCart/image1.svg";
import image2  from "../../assets/addToCart/image2.svg";
import image3  from "../../assets/addToCart/image3.svg";
import plus from "../../assets/addToCart/plus.svg";
import minus  from "../../assets/addToCart/minus.svg";



const ShoppingCart = () => {
  return (
   <>
   <section className='pt-[80px] grid grid-cols-2 px-[100px] gap-x-36 '>

<section className='min-w-[792px]'>

    <table>
        <thead className=''>
            <tr className='border-b-2 pb-1 border-[#979797] '>
                <td className='text-18 min-w-[300px] '>Product</td>
                <td className='text-18 min-w-[140px] '>Quantity</td>
                <td className='text-18  min-w-[140px]'>Price</td>
                <td className='text-18  min-w-[140px]'>Subtotal</td>
                
            </tr>

            
        </thead>


    </table>
       <section className='flex items-center  gap-x-2'>
         <section className='flex items-center gap-x-2 pt-5'>
        <div><img src={cross}/></div>
        <div> <img src={image1}/></div>


       <section className='flex-col'>
       <div className='text-18'> Tray Table</div>
        <section> 
         
        <div className='text-12  font-medium '>thickness</div>
        <div className=''>25 mm </div></section>
       </section>


        <section className='pt-6'> 
            <div className='text-12  font-medium '>width</div>
            <div>220 mm </div>
        </section>


        <section  className='pt-6'> 
            <div className='text-12  font-medium '>Length</div>
            <div>220 mm </div>
        </section>
        
         </section>
        <div className='flex gap-x-3 border items-center px-1  rounded-md' >
        <td><img src={minus}/></td>
        <td>2</td>
        <td><img src={plus}/></td>
        
        
         </div>


        <div className='min-w-[140px]'>$19.00</div>
        <div className='min-w-[140px]'>$38.00</div>
         </section>

</section >


{/* Right side of grid  */}
<section className='max-w-[447px]'>

    <section cla >
        <section>
        <div></div>
        <div></div>
    </section>
    
    <section>
    <div></div>
    <div></div>
    </section>
    <section>
    <div></div>
    <div></div>
    </section>
    <section>
    <div></div>
        <div></div>
    </section>
    </section> 



        </section>   

</section>
   </>
  )
}

export default ShoppingCart
import React from 'react'
import Button from '../Common/Button'
import cartIcon from "../../assets/customWoodPage/cart-icon.svg";
const ProductDetailTable = () => {
const productDetails =[{


}]

  return (
   <>
      <section className='wood-stock-table px-[30px] pt-[61px] max-w-[1240px] mx-auto reso'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
                <tr className="bg-[#F8F8F8]">
                  <th className='font-bold text-15 p-[10px]'>Variant</th>
                  <th className='font-bold text-15 p-[10px]'>Articlenumber</th>
                  <th className='font-bold text-15 p-[10px]'>Price</th>
                  <th className='font-bold text-15 p-[10px]'>Stock</th>
                  <th className='font-bold text-15 p-[10px]'>Number</th>
                  <th className='font-bold text-15 p-[10px]'>Winkelwagen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[2px]'>
                        <div className='font-bold text-14 text-[#111727]'> Variant</div>
                        <div className='text-14 text-[#111727]'>100cm</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[2px]'> 
                        <div className='font-bold text-14 text-[#111727]'>Article number</div>
                        <div className='text-14 text-[#111727]'>BEZ2098_C_100</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[3px]'>
                        <div className='font-bold text-14 text-[#111727]'>Price <span className='text-[#888888] text-[11px] font-normal'>Inc BTW</span></div>
                        <div className='text-14 text-[#111727] font-medium'>$10,91</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='text-14 text-[#111727]'>If you are interested, please contact us</div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='number-box flex items-center justify-center text-[#111727]'>
                        0
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <button className='cart-button flex items-center justify-center'>
                        <img src={cartIcon} alt="" srcset="" />
                      </button>
                    </td>
                </tr>
                <tr>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[2px]'>
                        <div className='font-bold text-14 text-[#111727]'> Variant</div>
                        <div className='text-14 text-[#111727]'>100cm</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[2px]'> 
                        <div className='font-bold text-14 text-[#111727]'>Article number</div>
                        <div className='text-14 text-[#111727]'>BEZ2098_C_100</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[3px]'>
                        <div className='font-bold text-14 text-[#111727]'>Price <span className='text-[#888888] text-[11px] font-normal'>Inc BTW</span></div>
                        <div className='text-14 text-[#111727] font-medium'>$10,91</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='text-14 text-[#111727]'>If you are interested, please contact us</div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='number-box flex items-center justify-center text-[#111727]'>
                        0
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='text-14 text-[#111727]'>Out of stock</div>
                    </td>
                </tr>
                <tr>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[2px]'>
                        <div className='font-bold text-14 text-[#111727]'> Variant</div>
                        <div className='text-14 text-[#111727]'>100cm</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[2px]'> 
                        <div className='font-bold text-14 text-[#111727]'>Article number</div>
                        <div className='text-14 text-[#111727]'>BEZ2098_C_100</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='flex flex-col gap-[3px]'>
                        <div className='font-bold text-14 text-[#111727]'>Price <span className='text-[#888888] text-[11px] font-normal'>Inc BTW</span></div>
                        <div className='text-14 text-[#111727] font-medium'>$10,91</div>
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='text-14 text-[#111727]'>If you are interested, please contact us</div>
                    </td>
                    <td className='p-[10px]'>
                      <div className='number-box flex items-center justify-center text-[#111727]'>
                        0
                      </div>
                    </td>
                    <td className='p-[10px]'>
                      <button className='cart-button flex items-center justify-center'>
                        <img src={cartIcon} alt="" srcset="" />
                      </button>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </section>    
      <div className='flex justify-center pt-[50px]'>  <Button btnText="Add to Cart" paddingX="72px" py="21px"/></div>
   </>
  )
}

export default ProductDetailTable
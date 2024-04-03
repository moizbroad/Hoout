import React from 'react'
import HeaderSection from '../Home/HeaderSection'
import FooterSection from '../Home/FooterSection'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
  <section className='px-[100px]'>
  <HeaderSection />

<div >
  <Outlet />
</div>

<FooterSection />
  </section>
  
  </>
  )
}

export default Layout
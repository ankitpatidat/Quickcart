
import React from 'react'
import UserMenu from '../components/UserMenu'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const user = useSelector(state => state.user)

 
  return (
    <section className='bg-white '>
        <div className='container mx-auto p-3 grid  lg:grid-cols-[250px_auto] '>
                {/**left for menu */}
                <div className='py-4 sticky top-24 max-h-[calc(100vh-96px)] overflow-y-auto hidden lg:block border-r'>
                    <UserMenu/>
                </div>


                {/**right for content */}
                <div className='bg-white min-h-[75vh] '>
                    <Outlet/>
                </div>
        </div>
    </section>

//     <section className='bg-white h-screen overflow-hidden'>
//   <div className='container mx-auto p-3 grid lg:grid-cols-[250px,1fr] h-full'>
    
//     {/* LEFT MENU */}
//     <div className='py-4 sticky top-0 h-screen overflow-y-auto hidden lg:block border-r'>
//       <UserMenu/>
//     </div>

//     {/* RIGHT CONTENT */}
//     <div className='bg-white h-full overflow-y-auto'>
//       <Outlet/>
//     </div>

//   </div>
// </section>
  )
}

export default Dashboard
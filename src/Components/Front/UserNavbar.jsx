import React, {useState} from 'react';
import { List, X, Globe, House, CreditCard, Bank, UserCircle,SignOut, ClockCountdown } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
;



const UserNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  let data = JSON.parse(localStorage.getItem('userDetails'));

  const firstName = data.first_name
  const lastName = data.last_name

  
  return (
    <div className='container'>
      <div className='navbar px-10 pt-5'>
      <List onClick={showSidebar} className='text-darkBlack' size={32}/>
       </div>
      <div style={{left: sidebar ? '0' : '-100%'}} className='sidebar w-1/2 md:w-1/4 h-screen bg-darkBlack  text-white fixed top-0 duration-500'>
<div className='wrapper'>
      <div className='px-10 py-5'>
            <X onClick={showSidebar} size={32} />
      </div>
          <div className='flex pl-5 pt-6 gap-2 text-white'>
              <Globe className='text-[28px] md:text-[40px]' />
              <h3 className='text-[18px] md:text-[28px] font-Encode'>Global Tradez</h3>
          </div>
              <Link to='/profile' className='flex gap-2 pl-5 pt-5'>
              <UserCircle className='text-[20px] md:text-[32px]' />
              <h4 className='text-[14px] md:text-[20px] font-Encode capitalize'>{`${firstName} ${lastName}`}</h4>
              </Link>
                  <div className='mt-4 pl-5 mb-10'>
                   <div className='flex gap-2 '>
                    <House className='text-[24px] md:text-[32px]' />
                    <Link className='text-[18px] md:text-[20px]' to='/userdashboard'>Dashboard </Link>
                   </div>
                   <div className='flex gap-2 py-5 '>
                   <CreditCard className='text-[24px] md:text-[32px]'  />
                    <Link className='text-[18px] md:text-[20px]' to='/deposit'>Deposit</Link>
                   </div>
                   <div className='flex gap-2 '>
                   <Bank className='text-[24px] md:text-[32px]' />
                    <Link className='text-[18px] md:text-[20px]' to='/withdrawal'>Withdrawal </Link>
                   </div>
                   <div className='flex gap-2 py-5'>
                   <ClockCountdown className='text-[24px] md:text-[32px]' />
                    <Link className='text-[18px] md:text-[20px]' to='/history'>History</Link>
                   </div>
                  </div>

                  <div className=' text-center mr-5 '>
                  {/* <SignOut className='text-[24px] md:text-[32px]' /> */}
                    <Logout />
                  </div>

                  
</div>
      </div>
    </div>
  )
}

export default UserNavbar
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-[10vh] bg-white rounded-b-xl flex justify-between px-12 items-center'>
      <div>expense</div>
      <div className='flex gap-8'>
        <Link to="/help">Need help?</Link>
        <Link to="/profile" className='flex items-center gap-3'>
          <FaUserCircle fontSize={30} />
          <p>Hi, User</p>
        </Link>
      </div>
    </div>
  )
}

export default Header

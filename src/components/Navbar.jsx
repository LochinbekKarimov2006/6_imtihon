import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import Spline from '@splinetool/react-spline';

function Navbar() {
    function changeTheme(e) {
        const selectedTheme = e;
        document.documentElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
      }
    
      useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'cupcake'; // Default theme
        document.documentElement.setAttribute('data-theme', savedTheme);
      }, []);
  return (
    <div>
        <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/Cart_qoshish">Heart</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Logo</a>
    <div className='w-10 h-10'>
    {/* <Spline  scene="https://prod.spline.design/HtNn-u7PNdXiAZNv/scene.splinecode" /> */}
    </div>
  </div>
  <div className="navbar-center hidden  lg:flex"> 
    <ul className=" div-1 px-1">
      <li><NavLink className="text-gray-400 font-[500] linke" to="/">Home</NavLink></li>
      <li><NavLink className="text-gray-400 font-[500] linke" to="/">Heart</NavLink></li>
      <li><NavLink className="text-gray-400 font-[500] linke" to="/contact">Contact</NavLink></li>
      <li><NavLink className="text-gray-400 font-[500] linke" to="/toliq">Contact</NavLink></li>
    </ul>
  </div>
 
  <div className="navbar-end flex gap-[10px] pr-[16px]">
 
  <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/2903/2903603.png"  alt="" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="button menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <div className='flex gap-1'>

        <svg
    className="swap-on h-7 w-7 mr-7 fill-current "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
        <button onClick={()=>{changeTheme("cupcake")}} style={{ backgroundColor: '#f8edf8c0' }}></button>
        <button onClick={()=>{changeTheme("light")}} style={{ backgroundColor: '#fff' }}></button>
        <button onClick={()=>{changeTheme("cyberpunk")}} style={{ backgroundColor: '#fde935c0' }}></button>
        <button onClick={()=>{changeTheme("valentine")}} style={{ backgroundColor: '#ffe4ff' }}></button>
            </div>
            <div  className='flex mt-2 gap-1'>

  <svg
    className="swap-off h-7 w-7 mr-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
   <button onClick={()=>{changeTheme("dark")}} style={{ backgroundColor: '#000' }}></button>
        <button onClick={()=>{changeTheme("synthwave")}} style={{ backgroundColor: '#27074e' }}></button>
        <button onClick={()=>{changeTheme("sunset")}}style={{ backgroundColor: '#0d181e' }}></button>
            </div>
      </ul>
    </div>

    <NavLink to="/Cart_qoshish" className="btn btn-ghost btn-circle">
    <svg  className='w-5 h-5 text-slate-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>

    </NavLink>

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>

    <div className="dropdown flex flex-col items-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[50] mt-20 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <NavLink to="/carzinca" className="btn btn-primary btn-block">View cart</NavLink>
          </div>
        </div>
      </div>
    </div>

    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      {/* <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul> */}
    </div>

  </div>
  </div>
</div>
  )
}

export default Navbar
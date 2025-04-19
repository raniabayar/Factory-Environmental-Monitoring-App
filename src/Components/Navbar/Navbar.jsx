import React from 'react'
import './Navbar.css'
import logoActPharma from '../../assets/logoActPharma.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src= {logoActPharma} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div className='search-box'>
            <input type="text" placeholder="Search"/>
            <SearchOutlinedIcon className='search_icon' />
        </div>
        <DarkModeOutlinedIcon className='dark_icon' />

        
    </div>
  )
}

export default Navbar
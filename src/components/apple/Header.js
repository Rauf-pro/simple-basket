import React from 'react'
import { useApple } from '../../context/AppleContext'

const Header = () => {
    const {basketCount} = useApple();
  return (
    <div className='header'>
        <ul className=''>
            <li>E-commerce</li>
            <li>Home</li>
            <li>Basket <span>{basketCount}</span> </li>
        </ul>
    </div>
  )
}

export default Header
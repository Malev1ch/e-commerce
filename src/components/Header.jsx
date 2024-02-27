import React from 'react'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='menu'>
        <div className="nav">
          
            <span onClick={() => navigate('/')}>Главная</span>
        <span onClick={() => navigate('/contacts')}>Контакты</span>
        <span onClick={() => navigate('/cart')}>Корзина</span>
        </div>
        
    </div>
  )
}

export default Header
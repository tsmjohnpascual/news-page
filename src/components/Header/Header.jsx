import React from 'react'
import './Header.css'
import key from '../../assets/svg/key.svg'

const Header = () => {
  return (
    <section className='header-section'>
        <div className='container header'>
            <nav>
                <ul>
                    <li><a className='nolan'>MENU</a></li>
                    <li><a className='company-title'>BELMONT GRANGE</a></li>
                    <li><div className='register-container'><a className='nolan'>REGISTER</a><img className='key' src={key} alt='key-svg'/></div></li>
                </ul>
            </nav>
            <div className='title'>
                <p className='nolan'>LATEST</p>
                <h1>NEWS</h1>
            </div>
        </div>
    </section>
  )
}

export default Header
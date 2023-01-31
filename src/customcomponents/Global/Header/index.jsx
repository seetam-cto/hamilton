import React from 'react'
import Container from '../../Layout/Container'
import HeaderBar from '../HeaderBar'
import Logo from '../Logo'
import logo from "../../../assets/images/logo.svg"
import Navbar from '../../Navigation/Navbar'
import Searchbar from '../../Widget/Searchbar'
import NavUser from '../../Widget/NavUser'

const Header = ({headerbar}) => {
  return (
    <header>
        <HeaderBar>
            <i className="fa-solid fa-chevron-left"></i>
            {headerbar}
            <i className="fa-solid fa-chevron-right"></i>
        </HeaderBar>
        <div className="header-container">
            <Logo src={logo.src} />
            <Navbar menu={[
                {
                    link: '/',
                    text: 'NEW LAUNCHES'
                },
                {
                    link: '/',
                    text: 'PRODUCTS'
                },
                {
                    link: '/',
                    text: 'BRANDS'
                },
                {
                    link: '/',
                    text: 'DEALS'
                },
                {
                    link: '/',
                    text: 'MEDIA'
                },
                {
                    link: '/',
                    text: 'BLOG'
                }
            ]}/>
            <Searchbar />
            <NavUser />
        </div>
    </header>
  )
}

export default Header
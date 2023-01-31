import Link from 'next/link'
import React from 'react'

const Navbar = ({menu}) => {
  return (
    <ul className="header-navbar">
        {menu.map((item, i) => (
            <li key={i}>
                <Link href={item.link}>{item.text}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Navbar
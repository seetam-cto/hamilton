import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({src}) => {
  return (
    <Link href="/" className='header-logo-link'><Image src={src} width={282} height={93} className="header-logo"/></Link>
  )
}

export default Logo
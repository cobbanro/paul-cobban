import * as React from 'react'
import { Link , useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    subHeading,
    nav,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css'

  const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}> 
            <header className={siteTitle}> Paul Cobban </header>
            <h1 className={subHeading}>The Secrets of successful business transformation</h1>
            <nav className={nav}>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/posts" className={navLinkText}>Posts</Link></li>
                    <li className={navLinkItem}><Link to="/book" className={navLinkText}>Book</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <p>{children}</p>
            </main>
        </div>
    )
  }

  export default Layout
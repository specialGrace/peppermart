import React, { useState } from 'react'
import Link from 'next/link'
import { RiMenu2Fill } from 'react-icons/ri'
import MenuCategories from './MenuCategories'

import styles from './HeaderMenu.module.css'

const HeaderMenu = () => {
  const [openNavCategories, setOpenNavCategories] = useState(false)

  const categoriesTogglerHandler = () => {
    setOpenNavCategories((prevState) => !prevState)
  }

  // add ope class to div
  let open
  if (openNavCategories) {
    open = 'open'
  }

  const style = {
    position: 'absolute',
    top: '50px',
    left: '-40px',
    width: '300px',
    height: 'auto',
    maxHeight: '450px',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 5px rgba(0, 0, 0, .7)',
    zIndex: 999,
    transform: open ? 'translateY(0)' : 'translateY(-200%)',
    transition: 'all 0.5s ease-in-out',
    overflowY: 'auto',
  }

  return (
    <div className={`${styles.container}`}>
      <nav className={`${styles.navBarMenu}`}>
        <ul className={`${styles.vendors}`}>
          <li className={styles.categoriesToggler}>
            <RiMenu2Fill
              className={`${styles.navBarMenuIcon}`}
              onClick={categoriesTogglerHandler}
            />
            <div style={style} onMouseLeave={categoriesTogglerHandler}>
              <MenuCategories />

              <button className={styles.categoryBtn}>
                You are welcome You are welcome
              </button>
            </div>
          </li>
          <li>
            <Link href="/">
              <a style={{ color: 'var(--peppermart-dark500' }}>All Vendors</a>
            </Link>
          </li>
        </ul>

        <div className={styles.spacer}></div>

        <ul className={`${styles.navBarMenu__items} ${styles.hideNavBarMenu}}`}>
          <li>
            <Link href="/category/groceries">
              <a>Groceries</a>
            </Link>
          </li>
          <li>
            <Link href="/category/health-and-beauty">
              <a>Health and Beauty</a>
            </Link>
          </li>
          <li>
            <Link href="/category/home-and-office">
              <a>Home & Office</a>
            </Link>
          </li>
          <li>
            <Link href="/category/phones-and-tablets">
              <a>Phones and tablets</a>
            </Link>
          </li>
          <li>
            <Link href="/category/fashion">
              <a>Fashion</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Baby Products</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>More...</a>
            </Link>
          </li>
        </ul>
        <RiMenu2Fill className={`${styles.sideBarToggler}`} />
      </nav>
    </div>
  )
}

export default HeaderMenu

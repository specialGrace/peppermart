import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {
  MdSettingsVoice,
  MdControlCamera,
  MdOutlineFavoriteBorder,
} from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import logo from '../../../assets/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import CartModal from '../../Modal/CartModal/CartModal'

import styles from './HeaderTop.module.css'

const HeaderTop = ({ setSwitchTopBar }) => {
  const [cart, setCart] = useState(false)

  const handleCart = () => {
    setCart(!cart)
  }

  return (
    <div className={styles.container}>
      {cart && <CartModal />}

      <div className={`${styles.topBar}`}>
        <ul className={styles.topBarLeft}>
          <li>
            <Link href="/">
              <a>
                <Image src={logo} alt="peppermart" width={172} height={79.86} />
              </a>
            </Link>
          </li>
          <li className={styles.hideOnMobile}>
            <Link href="/vendor/vendor/registration">
              <a
                style={{
                  color: 'var(--peppermart-dark500)',
                  fontWeight: 'bold',
                }}
              >
                Sell on Pepper Mart
              </a>
            </Link>
          </li>
        </ul>

        <div className={styles.spacer}></div>

        <div className={styles.topBarSearch}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="search"
            placeholder="search"
            className={styles.input}
            onFocus={() => setSwitchTopBar(true)}
          />
          <div className="spacer"></div>
          <MdSettingsVoice className={styles.voiceIcon} />
          <MdControlCamera className={styles.cameraIcon} />
        </div>
        <ul className={styles.topBarRight}>
          <BiUser className={styles.icons} />
          <BsBookmark className={styles.icons} />
          <MdOutlineFavoriteBorder className={styles.icons} />
          <AiOutlineShoppingCart
            className={styles.icons}
            onClick={handleCart}
          />
          <Link href="/cart">
            <a>
              <div className={styles.cart}>3</div>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default HeaderTop

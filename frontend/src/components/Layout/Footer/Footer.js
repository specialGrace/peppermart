import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/images/logo.png'
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'

import styles from './Footer.module.css'

const Footer = () => {

  const company = new Date().getFullYear() > 2021 && ` ${new Date().getFullYear()}`;
  return (
    <div className={styles.container}>
      <div className={`${styles.footerContent}`} >

        <div className={styles.footerMenu}>
          <div className={styles.footerMenu__left}>
            <Link href='/'>
              <a>
                <Image src={logo} alt="titanium" width={150} height={70} />
              </a>
            </Link>


            <div className={styles.footerMenu_leftSocial}>
              <ul className={styles.footerMenuSocial}>
                <li><Link href='/'><a><FaFacebook className={`${styles.topIcons} ${styles.faFaceBook}`} /></a></Link></li>
                <li><Link href='/'><a><FaLinkedin className={`${styles.topIcons} ${styles.faLinkedin}`} /></a></Link></li>
                <li><Link href='/'><a><AiFillTwitterCircle className={`${styles.topIcons} ${styles.aiFillTwitter}`} /></a></Link></li>
                <li><Link href='/'><a><AiFillInstagram className={`${styles.topIcons} ${styles.aiFillInstagram}`} /></a></Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerMenu__right}>
            <div className={styles.footerMenu__rightItems}>
              <h4 className={styles.footerMenu__rightTitle}>Our Company</h4>
              <ul className={styles.footerMenu__rightLinks}>
                <li><Link href='/'><a>Vendors</a></Link></li>
                <li><Link href='/'><a>Categories</a></Link></li>
                <li><Link href='/'><a>Privacy policy</a></Link></li>
              </ul>
            </div>
            <div className={styles.footerMenu__rightItems}>
              <h4 className={styles.footerMenu__rightTitle}>Our Resources</h4>
              <ul className={styles.footerMenu__rightLinks} >
                <li><Link href='/'><a>The Blog</a></Link></li>
                <li><Link href='/'><a>FAQ</a></Link></li>
                <li><Link href='/'><a>Customer feedback</a></Link></li>
                <li><Link href='/'><a>Lofty heights One</a></Link></li>
              </ul>
            </div>
            <div className={styles.footerMenu__rightItems}>
              <h4 className={styles.footerMenu__rightTitle}>Our Product</h4>
              <ul className={styles.footerMenu__rightLinks} >
                <li><Link href='/'><a>New feature</a></Link></li>
                <li><Link href='/'><a>Sell on Pepper Mart</a></Link></li>
                <li><Link href='/'><a>Curate your wishlist</a></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy;{company}, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer 
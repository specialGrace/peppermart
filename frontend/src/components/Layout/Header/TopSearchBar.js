import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {BsChevronDown} from 'react-icons/bs'
import Link from 'next/link'

import styles from './TopSearchBar.module.css'

const TopSearchBar = ({setSwitchTopBar}) => {
  return (
    <div className={styles.container}>
        <div className={`${styles.topSearchContainer}`}>
            
           <div className={styles.topBarSearch}>
            <div className={styles.categories}>
                <select type="select" name="categories" id="categories">
                    <option value="">All categories</option>
                </select>
            </div>
              <div className={styles.search}>
                <input type="text" placeholder='Search for products' className={styles.input} onBlur={()=> setSwitchTopBar(false)}/> 
                <FaSearch className={styles.searchIcon}/>
              </div>
           </div>

           <div className={styles.topSearches}>
            <p>Top searches:</p>
            <ul className={styles.searchItems}>
               <li><Link href='/'><a>Clothing</a></Link></li>
               <li><Link href='/'><a>Shoes</a></Link></li>
               <li><Link href='/'><a>Jacket</a></Link></li>
               <li><Link href='/'><a>Jean</a></Link></li>
               <li><Link href='/'><a>Jewery</a></Link></li>
               <li><Link href='/'><a>Watch</a></Link></li>
            </ul>
           </div>
        </div>
    </div>
  ) 
}

export default TopSearchBar
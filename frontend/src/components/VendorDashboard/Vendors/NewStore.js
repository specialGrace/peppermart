import React from 'react'
import styles from './NewStore.module.css'
import { CgMenuGridR } from 'react-icons/cg'
import { TfiMenuAlt } from 'react-icons/tfi'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'

function NewStore() {
    return (
        <div className={styles.container}>
            <div className={styles.navcontainer}>
                <div className={styles.navLeft}>
                    <div className={styles.first}>
                        <span className={styles.firstIcon}> <CgMenuGridR /></span>
                        <span className={styles.secondIcon}><TfiMenuAlt /></span>
                    </div>
                    <div className={styles.secondLeft}>
                        <span className={styles.filterText}>Filter</span>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div className={styles.thirdLeft}>
                        <span className={styles.searchText}>Search</span>
                        <AiOutlineSearch />
                    </div>
                </div>
                <div className={styles.navRigth}>
                    <span className={styles.plusIcon}><AiOutlinePlus /></span>
                    <span className={styles.storeText}>New Store</span>
                </div>
            </div>
            <div className={styles.storeActionContainer}>
                <div className={styles.storeAction}>
                    <h2 className={styles.storeTitle}>You have no store yet</h2>
                    <p className={styles.stotewords}>Add new product and manage your store easily</p>
                    <div className={styles.storeWrapper}>
                        <span className={styles.plusIcon2}><AiOutlinePlus /></span>
                        <span className={styles.storecreation}>New Store</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStore


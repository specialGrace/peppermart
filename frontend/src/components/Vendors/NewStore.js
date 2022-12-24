import React, { useState } from 'react'
import styles from './NewStore.module.css'
import { CgMenuGridR } from 'react-icons/cg'
import { TfiMenuAlt } from 'react-icons/tfi'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import CreateStore from './CreateStore'
import ModalVariant_1 from '../../components/Modal/ModalVariant_1'


function NewStore() {
    const [openModal, setOpenModal] = useState(false);
    const modalHandler = () => {
        setOpenModal((prev) => !prev);
    };
    return (
        <div>
            {openModal && (
                <ModalVariant_1 bgColor="rgba(0,0,0,0.65)">
                    <CreateStore modalHandler={modalHandler} />
                </ModalVariant_1>
            )}

            <div className='h-screen w-full'>
                <div className='w-full bg-peppermartDarkWhite120 h-[60px] flex justify-between items-center px-[1rem]'>
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
                        <div className='w-[201px] h-[32px] px-[10px]  md:block hidden relative'>
                            <input className='h-[20px] py-4' placeholder='Search' type='text' />
                            <AiOutlineSearch className='absolute top-[7px] right-[2px]' />
                        </div>
                    </div>
                    <div className={styles.navRigth} onClick={() => modalHandler()}>
                        <span className={styles.plusIcon}><AiOutlinePlus /></span>
                        <span className={styles.storeText}>New Store</span>
                    </div>
                </div>
                <div className={styles.storeActionContainer}>
                    <div className={styles.storeAction}>
                        <h2 className={styles.storeTitle}>You have no store yet</h2>
                        <p className={styles.stotewords}>Add new product and manage your store easily</p>
                        <div className={styles.storeWrapper} onClick={() => modalHandler()}>
                            <span className={styles.plusIcon2}><AiOutlinePlus /></span>
                            <span className={styles.storecreation}>New Store</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStore


import React,{useState, useEffect, useRef} from 'react'
import {FaCaretRight} from 'react-icons/fa'
import styles from './menuCategories.module.css'

const menu = [
    {
        _id:1,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:2,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:3,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:4,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:5,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:6,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:7,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:8,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:9,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },
    {
        _id:10,
        title: 'Food and Drinks',
        submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
    },

]

const MenuCategories = () => {
    const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);


  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  // add ope class to div
  let open;
  if(dropdown){
    open = 'open'
  }  

  const style = {
    position: 'absolute',
    top:'20px',
    left: '100px',
    width: '300px',
    height: '450px',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 5px rgba(0, 0, 0, .7)',
    zIndex: 999,
    transform: open ? 'translateY(0)' : 'translateY(-200%)',
    transition: 'all 0.5s ease-in-out',
    overflowY:'auto'
  }
  return ( 
    <div className={styles.container}>
        {/* <div style={style}>
           
        </div> */}
        <ul> 
        {menu && menu.map(((item)=> (
                <li key={item._id} className={styles.categories} id={open} ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <h4>
                        {item.title}
                    </h4>  
                    <span >
                        <FaCaretRight />
                    </span>
                </li>
            )))} 
        </ul>
    </div>
  )
}

export default MenuCategories
import { useState } from 'react'
import { BsFillShareFill, BsCircle } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import ProductDetailsImageSlider from '../../Slider/ProductDetailsImageSlider'
import ProductImages from './ProductImages'
import ProductDetailsToolTips from '../../ToolTip/ProductDetailsToolTips'
import Reviews from './Reviews'
import ProductDetailSize from './ProductDetailSize'
import ProductDetailColor from './ProductDetailColor'
import QuantityComponent from './ProductDetailQuantity'
import { FaShippingFast } from 'react-icons/fa'
import { TbTruckReturn } from 'react-icons/tb'
import ProductInformation from './ProductInformation'
import ProductUpSellComponent from '../ProductCategory/Product'
import Specification from './Specification'

const product = {
  name: 'Leather boots with tall leg',
  price: '₦43,740',
  rating: 4,
  reviews: 1234,
  inStock: true,
  SKU: 'A515-56-36UT',
  category: 'CLOTHING',
  images: [
    {
      id: 1,
      name: 'Angled view',
      src:
        'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src:
        'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src:
        'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src:
        'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-[#ffff00]', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-[#000000]', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-[#fff]', selectedClass: 'ring-gray-900' },
    { name: 'Black', class: 'bg-[#fff781]', selectedClass: 'ring-gray-900' },
  ],
  description: `
    <p>The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.
    </p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
  ],
  sizes: [
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: false },
  ],
}

const productUpsell = [
  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667821886/7xm_5_unfr5g.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667821886/7xm_5_unfr5g.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667821886/7xm_5_unfr5g.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667821886/7xm_5_unfr5g.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667821886/7xm_5_unfr5g.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },
]

const relatedProducts = [
  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },

  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: '#fff515' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: '#frtuw3' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const [tooltip, setToooltip] = useState(false)

  const toolTipHandler = () => {
    setToooltip(!tooltip)
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex justify-around w-full">
            {/* Image selector */}
            <div className="hidden w-[30%] max-w-2xl mx-auto sm:block lg:max-w-none">
              {/* Rendering Other Product Images Tp Slide */}

              <ProductDetailsImageSlider>
                {product.images.map((image) => (
                  <ProductImages
                    key={image.id}
                    image={image.src}
                    name={image.name}
                  />
                ))}
              </ProductDetailsImageSlider>
            </div>

            <div className="w-[70%] aspect-w-1 aspect-h-1">
              <div>
                <img
                  src="https://res.cloudinary.com/dlhjvo4tz/image/upload/v1668112152/7xm_2_terw7f.png"
                  alt="Product Image Title"
                  className="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">{product.category}</p>
              <span className="cursor-pointer">
                <BsFillShareFill />
              </span>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight ">
                {product.name}
              </h1>

              {/* Reviews and Stock Information Here*/}
              <div className="flex items-center md:text-base text-sm">
                <div className="md:pr-5 pr-2">
                  <Reviews rating={product.rating} reviews={product.reviews} />
                </div>
                <p className="border-x-2 md:px-5 px-2 pt-2">
                  <b>SKU: </b>
                  {product.SKU}
                </p>
                <div className="md:pl-5 pl-2 pt-2">
                  {product.inStock ? (
                    <p className="text-green-500 font-bold">In Stock</p>
                  ) : (
                    <p className="text-red-500">Out of Stock</p>
                  )}
                </div>
              </div>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <span className="text-3xl text-peppermartOrange">
                  {product.price}
                </span>
                <span className="ml-5 text-xl line-through text-gray-300">
                  ₦73, 740
                </span>
              </div>
            </div>

            <div className="mt-6 pb-5 border-b-2">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base  space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            {/* RENDERING PRODUCT SIZES */}

            <div>
              <ProductDetailSize
                sizes={product.sizes}
                selectedSize={product.selectedSize}
                setSelectedSize={product.setSelectedSize}
              />
            </div>

            {/* RENDERING PRODUCT COLORS */}
            <div>
              <ProductDetailColor
                color={product.colors}
                selectedColor={product.selectedColor}
                setSelectedColor={product.setSelectedColor}
              />
            </div>

            <div className="flex flex-wrap mt-5 justify-start items-center space-x-2 ">
              <QuantityComponent />
              <button className=" text-white bg-peppermartDark500  px-20 py-2 rounded-md text-sm font-bold">
                Add to Cart
              </button>

              <ProductDetailsToolTips />
            </div>

            <div className="mt-3 pb-4 flex items-center space-x-2 text-sm font-bold border-b-2 ">
              <BsCircle size="10px" color="green" />
              <p>Ready To Ship | Order Today</p>
              <AiOutlineInfoCircle />
            </div>

            <div className="block mt-5">
              <p className="font-bold text-xl mb-3">Get It Today</p>
              <div className="text-sm flex items-center space-x-5">
                <FaShippingFast size="30px" />
                <div>
                  <p className="font-bold">Fast Delivery</p>
                  <p>Free Delivery Wheb order from ₦500</p>
                </div>
              </div>

              <div className="text-sm flex mt-5 items-center space-x-5">
                <TbTruckReturn size="30px" />
                <div>
                  <p className="font-bold">100 - Day Returns</p>
                  <p>
                    Not impressed? Get a refund. You have 100 days to break our
                    hearts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT INFIORMATION STARTS HERE */}

        <ProductInformation />

        {/* UPSELL PRODUCT STARTS HERE */}
        <div>
          <h2 className="text-center text-2xl">Upsell Products</h2>
          <div className="my-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-5 items-center justify-center self-center">
            {productUpsell.map((product, i) => (
              <ProductUpSellComponent
                key={i}
                id={product.id}
                colors={product.colors}
                image={product.imageSrc}
                title={product.title}
                sizes={product.sizes}
              />
            ))}
          </div>
        </div>

        {/* RELATED PRODUCT STARTS HERE */}
        <div>
          <h2 className="text-center text-2xl">Related Products</h2>
          <div className="my-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-5 items-center justify-center self-center">
            {relatedProducts.map((product, i) => (
              <ProductUpSellComponent
                key={i}
                id={product.id}
                colors={product.colors}
                image={product.imageSrc}
                title={product.title}
                sizes={product.sizes}
              />
            ))}
          </div>
        </div>

        {/* PRODUCT INFORMATION ENDS HERE */}
      </div>
    </div>
  )
}

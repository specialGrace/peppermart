import React from 'react'
import Filter from './Filter'
import ProductCategoryComponent from '../Product/ProductCategory/Product'

const products = [
  {
    name: 'Quilted Shoulder Bag ',
    price: '43,740',
    discountedPrice: '73,740',
    rating: 3.9,
    reviewCount: 10,
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1666981952/Rectangle_756_k6h6tf.png',
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

function Category() {
  return (
    <section>
      <Filter />
      <div className="my-16 mx-[10%] grid grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-5 items-center justify-center self-center">
        {products.map((product, i) => (
          <ProductCategoryComponent
            key={i}
            id={product.id}
            colors={product.colors}
            image={product.imageSrc}
            title={product.title}
            sizes={product.sizes}
          />
        ))}
      </div>
    </section>
  )
}

export default Category

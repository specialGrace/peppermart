import CartItems from './CartItem'
import Product from '../Product/EachProduct/Product'
import Summary from './Summary'
import { BsArrowLeft } from 'react-icons/bs'
import ProductSlider from '../Slider/ProductSlider'

const products = [
  {
    id: 1,
    name: 'Beautiful Dress',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '₦43,740',
  },

  {
    id: 2,
    name: 'Beautidul Dress',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '₦43,740',
  },

  {
    id: 3,
    name: 'Beautidul Dress',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '₦43,740',
  },

  {
    id: 4,
    name: 'Beautidul Dress',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '₦43,740',
  },
  {
    id: 5,
    name: 'Beautidul Dress',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '₦43,740',
  },
  {
    id: 6,
    name: 'Beautidul Dress',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dlhjvo4tz/image/upload/v1667135077/Rectangle_756_k6h6tf-removebg-preview_envopl.png',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '₦43,740',
  },
]

export default function Cart() {
  return (
    <div>
      <div className="max-w-2xl my-20 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
          Shopping Cart <sup>(2)</sup>
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section className="lg:col-span-7 border">
            <h2 className="sr-only">Items in your shopping cart</h2>

            <div className="flex py-2 justify-around items-center border w-full border-b-2">
              <div className="w-1/2">Products</div>
              <div>Quantity</div>

              <div>Total</div>
            </div>

            <CartItems />
          </section>

          {/* Rendering Order Information*/}
          <Summary />
        </div>

        <div className="flex items-center cursor-pointer my-5">
          <BsArrowLeft size="25" />
          <span className="font-bold pl-3 "> Continue Shopping</span>
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-2xl font-bold text-center">
            Best Sellers This Week
          </h3>
          <p className="text-center text-sm pt-3 text-gray-400">
            Top sales this week
          </p>
        </div>

        {/* RENDERING EACH TOP VENDOR PRODUCTS */}

        <section className="mb-20 md:mx-20 mx-10">
          <ProductSlider>
            {products.map((product, i) => (
              <div key={i} className="flex flex-col">
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.imageSrc}
                />

                <div className="flex flex-col font-bold  ml-5">
                  <h2 className="font-bold my-4">{product.name}</h2>
                  <p className="text-peppermartOrange">{product.price}</p>
                </div>
              </div>
            ))}
          </ProductSlider>
        </section>
      </div>
    </div>
  )
}

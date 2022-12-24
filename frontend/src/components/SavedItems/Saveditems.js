
import styles from "../../styles/items.module.css";
import { BsArrow90DegLeft } from "react-icons/bs";
import Image from "next/image";
import imgFour from "../../assets/images/img4.png";
 import imgThree from "../../assets/images/img3.png";
 import imgTwo from "../../assets/images/img2.png";
 import imgOne from "../../assets/images/img1.png";
const orders = [
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    invoiceHref: "#",
    total: "$238.00",
    products: [
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        href: "#",
        price: "$70.00",
        status: "Delivered Jan 25, 2021",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt:
          "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.",
      },
   
    ],
  },
 
];

function Saveditems() {
  return (
    <div className= "bg-white mx-20">
      <div className={`${styles.genContainer} max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8`}>
        <div className="text-center">
          <h1
            className={`${styles.heading} text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl`}
          >
            Saved Items
          </h1>
        </div>

        <div className={`${styles.savedItemsContainer} mt-16`}>
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-20">
            {orders.map((order) => (
              <div key={order.number}>
                <table className="mt-4 w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                    <tr>
                      <th
                        scope="col"
                        className={`${styles.th} sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal`}
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className={`${styles.th} hidden w-1/5 pr-8 py-3 font-normal sm:table-cell`}
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className={`${styles.th} hidden pr-8 py-3 font-normal sm:table-cell`}
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className={`${styles.th} hidden w-1/5 pr-8 py-3 font-normal sm:table-cell`}
                      >
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="py-6 pr-8">
                          <div
                            className={`${styles.productContainer} flex items-center`}
                          >
                            <div
                              className={`${styles.itemsImg} w-16 h-16 object-center object-cover rounded mr-6`}
                            >
                              <Image
                                //   src={product.imageSrc}
                                src={imgOne}
                                //   alt={product.imageAlt}
                              />
                            </div>

                            <div>
                              <div className="font-medium text-gray-900">
                                {/* {product.name} */}
                                <h6 className={styles.productname}>
                                  Black Canvas Stripe
                                  <br />
                                  Sole Trainer
                                </h6>
                                <p className={styles.productDetails}>
                                  Green.XS, Cotton
                                </p>
                                <a href="/" className={styles.remove}>
                                  Remove
                                </a>
                              </div>
                              <div className="mt-1 sm:hidden">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td>
                        <td className="py-6 pr-8 sm:table-cell">
                          <span
                            className={`${styles.qtyDecrement} ${styles.qty} `}
                          >
                            -
                          </span>
                          <span className={`${styles.qtyCount} ${styles.qty} `}>
                            100
                          </span>
                          <span
                            className={`${styles.qtyIncrement} ${styles.qty} `}
                          >
                            +
                          </span>
                        </td>
                        {/* <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td> */}
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          $170067655
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="py-6 pr-8">
                          <div
                            className={`${styles.productContainer} flex items-center`}
                          >
                            <div
                              className={`${styles.itemsImg} w-16 h-16 object-center object-cover rounded mr-6`}
                            >
                              <Image
                                //   src={product.imageSrc}
                                src={imgTwo}
                                //   alt={product.imageAlt}
                              />
                            </div>

                            <div>
                              <div className="font-medium text-gray-900">
                                {/* {product.name} */}
                                <h6 className={styles.productname}>
                                  Black Canvas Stripe
                                  <br />
                                  Sole Trainer
                                </h6>
                                <p className={styles.productDetails}>
                                  Green.XS, Cotton
                                </p>
                                <a href="/" className={styles.remove}>
                                  Remove
                                </a>
                              </div>
                              <div className="mt-1 sm:hidden">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          <span
                            className={`${styles.qtyDecrement} ${styles.qty} `}
                          >
                            -
                          </span>
                          <span className={`${styles.qtyCount} ${styles.qty} `}>
                            100
                          </span>
                          <span
                            className={`${styles.qtyIncrement} ${styles.qty} `}
                          >
                            +
                          </span>
                        </td>
                        {/* <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td> */}
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          $170067655
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="py-6 pr-8">
                          <div
                            className={`${styles.productContainer} flex items-center`}
                          >
                            <div
                              className={`${styles.itemsImg} w-16 h-16 object-center object-cover rounded mr-6`}
                            >
                              <Image
                                //   src={product.imageSrc}
                                src={imgThree}
                                //   alt={product.imageAlt}
                              />
                            </div>

                            <div>
                              <div className="font-medium text-gray-900">
                                {/* {product.name} */}
                                <h6 className={styles.productname}>
                                  Black Canvas Stripe
                                  <br />
                                  Sole Trainer
                                </h6>
                                <p className={styles.productDetails}>
                                  Green.XS, Cotton
                                </p>
                                <a href="/" className={styles.remove}>
                                  Remove
                                </a>
                              </div>
                              <div className="mt-1 sm:hidden">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          <span
                            className={`${styles.qtyDecrement} ${styles.qty} `}
                          >
                            -
                          </span>
                          <span className={`${styles.qtyCount} ${styles.qty} `}>
                            100
                          </span>
                          <span
                            className={`${styles.qtyIncrement} ${styles.qty} `}
                          >
                            +
                          </span>
                        </td>
                        {/* <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td> */}
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          $170067655
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="py-6 pr-8">
                          <div
                            className={`${styles.productContainer} flex items-center`}
                          >
                            <div
                              className={`${styles.itemsImg} w-16 h-16 object-center object-cover rounded mr-6`}
                            >
                              <Image
                                //   src={product.imageSrc}
                                src={imgFour}
                                //   alt={product.imageAlt}
                              />
                            </div>

                            <div>
                              <div className="font-medium text-gray-900">
                                {/* {product.name} */}
                                <h6 className={styles.productname}>
                                  Black Canvas Stripe
                                  <br />
                                  Sole Trainer
                                </h6>
                                <p className={styles.productDetails}>
                                  Green.XS, Cotton
                                </p>
                                <a href="/" className={styles.remove}>
                                  Remove
                                </a>
                              </div>
                              <div className="mt-1 sm:hidden">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          <span
                            className={`${styles.qtyDecrement} ${styles.qty} `}
                          >
                            -
                          </span>
                          <span className={`${styles.qtyCount} ${styles.qty} `}>
                            100
                          </span>
                          <span
                            className={`${styles.qtyIncrement} ${styles.qty} `}
                          >
                            +
                          </span>
                        </td>
                        {/* <td className="hidden py-6 pr-8 sm:table-cell">
                          {product.price}
                        </td> */}
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          $170067655
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btndiv}>
          <button
            type="button"
            className={`${styles.btn} inline-flex my-7 items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <BsArrow90DegLeft
              className={`${styles.reply} -ml-1 mr-3 h-5 w-5" aria-hidden="true`}
            />
            <p className={styles.btnName}>Back To Shop</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Saveditems;

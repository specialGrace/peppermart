
import { Fragment, useState } from "react";
import styles from "../../styles/Vendor.module.css";

import { RadioGroup, Combobox } from "@headlessui/react";
import { RiArrowDropDownLine, RiCheckLine } from "react-icons/ri";
import Image from "next/image";
import imgFive from "../../assets/images/img5.png";
import img4 from "../../assets/images/img4.png";
import Icon2 from "../../assets/images/Icon2.png";
import Icon3 from "../../assets/images/Icon (3).png";
import Icon5 from "../../assets/images/Icon (5).png";
import Icon4 from "../../assets/images/Icon (4).png";
import Icon6 from "../../assets/images/Icon (6).png";
import img3 from "../../assets/images/img3.png";
import Ellipse from "../../assets/images/ellipse.png";


const product = {
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],

  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Heather Grey",
      bgColor: " bg-orange-600",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Heather Grey",
      bgColor: " bg-blue-700",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Heather Grey",
      bgColor: "bg-green-500",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Heather Grey",
      bgColor: "bg-purple-400",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Heather Grey",
      bgColor: "bg-yellow-400",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Heather Grey",
      bgColor: "bg-violet-400",
      selectedColor: "ring-gray-400",
    },
  ],
};

const people = [
  { product: "Bags", num: "(112)" },
  { product: "Booking", num: "(32)" },
  { product: "clothing", num: "(42)" },
  { product: "men", num: "(13)" },
  { product: "music", num: "(54)" },
  { product: "posters", num: "(93)" },
  { product: "shoes", num: "(52)" },
  { product: "uncateorized", num: "(14)" },
  { product: "women", num: "(65)" },
];

const breadcrumbs = [{ id: 1, name: "Men", href: "#" }];
const filters = [
  {
    id: "brands",
    name: "Brands",
    options: [
      { value: "Nike", label: "Nike" },
      { value: "Louis Vuitton", label: "Louis Vuitton" },
      { value: "Hermes", label: "Hermes" },
      { value: "Gucci", label: "Gucci" },
      { value: "Zalando", label: "Zalando" },
      { value: "Adidas", label: "Adidas" },
    ],
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Vendor() {
  const [state, setState] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState();

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.product.toLowerCase().includes(query.toLowerCase());
        });

  const changeHandler = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setState({
      ...state,
      [name]: value,
    });

    let filteredRm = [...state.rooms];
    if (name === "type" && value !== "all") {
      filteredRm = filteredRm.filter((room) => room.type === value);
    }

    // condition for capacity selector
    if (name === "capacity" && parseInt(value) !== 1) {
      filteredRm = filteredRm.filter(
        (room) => room.capacity === parseInt(value)
      );
    }

    // condition for my range input
    if (name === "price") {
      filteredRm = filteredRm.filter(
        (room) => room.price <= state.price && room.price <= state.maxPrice
      );
    }

    filteredRm = filteredRm.filter(
      (room) =>
        room.size >= parseInt(state.minSize) &&
        room.size <= parseInt(state.maxSize)
    );

    // condition for pet and breakfast checkbox
    if (type === "checkbox") {
      filteredRm = filteredRm.filter(
        (room) => room.pets === true && room.breakfast === true
      );
    }

    setState((prev) => ({
      ...prev,
      filteredRooms: filteredRm,
    }));
  };
  return (
    <div className="overflow-hidden">
      {/* <div
        className={`${styles.bgContainer} max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`}
      > */}
      <div className={`${styles.bgContainer} `}>
        <div
          className={`${styles.bg} shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className={`${styles.nedum} block}`}>NEDUM & SONS</span>
                {/* <span className="block">Start your free trial today.</span> */}
              </h2>
              {/* <div className={styles.vendorTextContainer}> */}
              <p
                className={`${styles.vendorText} mt-4 text-lg leading-6 text-indigo-200`}
              >
                We sell shoes and deliver to you at your convenient time. We
                also have different boots which are designed to prevent the
                entry of water, snow, mud or dirt through gaps between the laces
                and tongue found in other types of shoes.
              </p>
              {/* </div> */}
            </div>
          </div>

          <div
            className={`${styles.bgImgContainer} -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1`}
          >
            <Image
              className={`${styles.bgImg} `}
              src={imgFive}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <Image src={Ellipse} alt="" />
      </div>

      <div className="bg-white">
        {/* Mobile menu */}

        <main
          className={`${styles.cartMain} max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8`}
        >
          {/* <div className="border-b border-gray-200 pt-24 pb-10"> */}

          {/* </div> */}

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <div className="hidden lg:block">
                <form className={`${styles.sidebarContainer} space-y-10`}>
                  <div className={styles.listContainer}>
                    <h5 className={styles.listHeader}>Products Type</h5>
                    <ul className={styles.listTypeContainer}>
                      <li>
                        <span ClassName={styles.productNum}>
                          <li>
                            Bags<span>(112)</span>
                          </li>
                        </span>
                      </li>
                      <li>
                        Booking <span>(112)</span>
                      </li>
                      <li>
                        clothing <span>(112)</span>
                      </li>
                      <li>
                        Men <span>(112)</span>
                      </li>
                      <li>
                        music <span>(112)</span>
                      </li>
                      <li>
                        Posters <span>(112)</span>
                      </li>
                      <li>
                        Shoes <span>(112)</span>
                      </li>
                      <li>
                        Uncategorized <span>(112)</span>
                      </li>
                      <li>
                        Women <span>(112)</span>
                      </li>
                    </ul>
                  </div>

                  {/* {filters.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? null : "pt-10"}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        {section.name}
                      </legend>
                      <div className="pt-6 space-y-3">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))} */}

                  <div className="mt-8 lg:col-span-5">
                    {/* Size picker */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <h2
                          className={`${styles.size} text-sm font-medium text-gray-900`}
                        >
                          Size
                        </h2>
                      </div>

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a size
                        </RadioGroup.Label>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              className={({ active, checked }) =>
                                classNames(
                                  size.inStock
                                    ? "cursor-pointer focus:outline-none"
                                    : "opacity-25 cursor-not-allowed",
                                  active
                                    ? "ring-2 ring-offset-2 ring-indigo-500"
                                    : "",
                                  checked
                                    ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                                  "border py-1 px-1 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                                )
                              }
                              disabled={!size.inStock}
                            >
                              <RadioGroup.Label as="p">
                                {size.name}
                              </RadioGroup.Label>
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div className={styles.priceGroup}>
                      {/* <label htmlFor="price">Room price {price}</label> */}
                      <label htmlFor="price">Price Range</label>
                      <div>
                        <input
                          type="range"
                          name="price"
                          // value={price}
                          id="price"
                          // min={0}
                          // max={maxPrice}
                          // onChange={changeHandler}
                          className={styles.priceControl}
                        />
                        {/* <p>Price: ₦80,000—₦118,500</p> */}
                      </div>
                    </div>

                    {/* Color picker */}
                    <div className={styles.colorContainer}>
                      <h2 className="text-sm font-medium text-gray-900">
                        Color
                      </h2>

                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className={`${styles.colorRadio} mt-2`}
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a color
                        </RadioGroup.Label>
                        <div
                          className={`${styles.radioDiv} flex items-center space-x-2`}
                        >
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ active, checked }) =>
                                classNames(
                                  color.selectedColor,
                                  active && checked ? "ring ring-offset-1" : "",
                                  !active && checked ? "ring-2" : "",
                                  "h-12px w-12px -m-0.5 relative p-0.4 rounded-md flex items-center justify-center cursor-pointer focus:outline-none"
                                )
                              }
                            >
                              <RadioGroup.Label as="p" className="sr-only">
                                {color.name}
                              </RadioGroup.Label>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.bgColor,
                                  "h-6 w-6 border-6 border-black border-opacity-10 rounded-md"
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="hidden lg:block mt-8">
                      {/* <form className="divide-y divide-gray-200 space-y-10"> */}
                      {filters.map((section, sectionIdx) => (
                        <div
                          key={section.name}
                          className={sectionIdx === 0 ? null : "pt-10"}
                        >
                          <fieldset>
                            <legend className="block text-sm font-medium text-gray-900">
                              {section.name}
                            </legend>
                            <div className="pt-2 space-y-3">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className={`${styles.checkboxBorder} h-15px w-15px border-gray-300  rounded text-indigo-600 focus:ring-indigo-500`}
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}`}
                                    className="text-sm ml-15px pl-5 text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </fieldset>
                        </div>
                      ))}
                      {/* </form> */}
                    </div>
                  </div>
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className={`${styles.productSection} mt-8 lg:mt-0 lg:col-span-2 xl:col-span-3`}
            >
              <div className={styles.iconsContainer}>
                <div className={styles.iconContainer}>
                  <Image src={Icon4} alt="" className={styles.imgIcon} />
                </div>
                <div className={styles.iconContainer}>
                  <Image src={Icon5} alt="" className={styles.imgIcon} />
                </div>
                <div className={styles.iconContainer}>
                  <Image src={Icon6} alt="" className={styles.imgIcon} />
                </div>
                <div className={styles.iconContainer}>
                  <Image src={Icon2} alt="" className={styles.imgIcon} />
                </div>
                <div className={styles.iconContainer}>
                  <Image src={Icon3} alt="" className={styles.imgIcon} />
                </div>
                {/* <div className={styles.productSideContainer}> */}
                <div className={styles.tick}></div>
                <p className={styles.iconText}>Show only product on side</p>
                {/* </div> */}

                <div className={styles.sortingContainer}>
                  <p className={styles.sorting}>Sort by</p>
                  <select
                    className={`${styles.sortingBtn} select select-bordered select-sm w-120px max-w-xs`}
                  >
                    <option disabled selected>
                      Best Selling
                    </option>
                    <option className={styles.sortOption}>Best Selling</option>
                  </select>
                </div>
              </div>

              {/* <h2 id="product-heading" className="sr-only">
              Products
            </h2> */}

              {/* <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                >
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                      />
                    </div>
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                    <img
                      src="/images/img3.png"
                      alt=""
                      className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                    />
                  </div>
                  <div className="flex-1 p-4 space-y-2 flex flex-col">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <div className="flex-1 flex flex-col justify-end">
                      <p className="text-sm italic text-gray-500">
                        {product.options}
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

              <div
                className={`${styles.vendorCartContainer} grid grid-cols-4 gap-y-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4`}
              >
                {/* {products.map((product) => ( */}
                <div className={`${styles.product} group relative bg-white rounded-lg flex flex-col overflow-hidden`}>
                  {/* <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96"> */}
                  <div
                     className={`${styles.cartImg} w-44 h-44 object-center object-cover sm:w-44 sm:h-44`}
                  >
                    <Image src={img3} alt="" className={styles.imgI}/>
                    </div>

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} object-center object-cover sm:w-full sm:h-full`}
                  >
                    
                      <Image src={img4} alt="" />
                    </div>

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                  </div>
                </div>
                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} w-full h-full object-center object-cover sm:w-full sm:h-full`}
                  >
                    <Image src={img3} alt="" />

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} w-44 h-44 object-center object-cover sm:w-44 sm:h-44`}
                  >
                    <Image src={img4} alt="" />

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} w-full h-full object-center object-cover sm:w-full sm:h-full`}
                  >
                    <Image src={img3} alt="" />

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} w-full h-full object-center object-cover sm:w-full sm:h-full`}
                  >
                    <Image src={img4} alt="" />

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} w-full h-full object-center object-cover sm:w-full sm:h-full`}
                  >
                    <Image src={img3} alt="" />

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
                  <div
                    className={`${styles.cartImg} w-full h-full object-center object-cover sm:w-full sm:h-full`}
                  >
                    <Image src={img4} alt="" />

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="/">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {/* {product.name} */}Asymmetric neckline blouse
                        </a>
                      </h3>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {/* {product.price} */}₦43,740
                        </p>
                        <p className="text-sm italic text-gray-500">
                          {/* {product.options} */}color
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ))} */}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

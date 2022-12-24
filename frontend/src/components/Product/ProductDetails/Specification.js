import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function Specification() {
  return (
    <section>
      <div class="items-center w-full  mx-auto bg-white rounded-lg ">
        <div class="container mx-auto">
          <div class="mt-6 overflow-x-auto">
            <table class=" w-full table-auto">
              <tbody class="text-sm ">
                <tr class="py-10 bg-gray-100 hover:bg-gray-200 font-medium">
                  <td class="px-4 py-4 font-bold">Rating</td>
                  <td class="px-4 py-4">
                    <div className="flex items-center">
                      <AiFillStar className="text-black" />
                      <AiFillStar className="text-black" />
                      <AiFillStar className="text-black" />
                      <AiFillStar className="text-black" />
                      <AiFillStar className="text-black" />
                      <span className="pl-2">(1234)</span>
                    </div>
                  </td>
                </tr>
                <tr class="py-10 bg-white hover:bg-gray-200 font-medium">
                  <td class="px-4 py-4 font-bold">Outer Shell</td>
                  <td class="px-4 py-4">100% polyester</td>
                </tr>
                <tr class="py-10 bg-gray-100 hover:bg-gray-200 font-medium w-full">
                  <td class="px-4 py-4 font-bold">Lining</td>
                  <td class="px-4 py-4">100% polyurethane</td>
                </tr>
                <tr class="py-10 bg-white hover:bg-gray-200 font-medium">
                  <td class="px-4 py-4 font-bold">Color</td>
                  <td class="px-4 py-4">Grey, Red, Blue, Black</td>
                </tr>
                <tr class="py-10 bg-gray-100 hover:bg-gray-200 font-medium w-full">
                  <td class="px-4 py-4 font-bold">Size</td>
                  <td class="px-4 py-4">S, M, L, XL</td>
                </tr>
                <tr class="py-10 bg-white hover:bg-gray-200 font-medium w-full">
                  <td class="px-4 py-4 font-bold">Care</td>
                  <td class="px-4 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specification

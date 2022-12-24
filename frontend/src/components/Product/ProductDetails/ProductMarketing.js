import React from 'react'
import { FaShippingFast, FaCottonBureau } from 'react-icons/fa'
import { GiFallingLeaf } from 'react-icons/gi'
import { BsPatchCheck } from 'react-icons/bs'

function ProductMarketing() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5  md gap-x-32 mt-10 ">
        <div>
          <FaShippingFast size="30px" />
          <p className="font-bold">Shipping Fast</p>
          <p>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </p>
        </div>

        <div>
          <FaCottonBureau size="30px" />
          <p className="font-bold">Cotton Material</p>
          <p>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </p>
        </div>

        <div>
          <BsPatchCheck size="30px" />
          <p className="font-bold">highly compatible</p>
          <p>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </p>
        </div>

        <div>
          <GiFallingLeaf size="30px" />
          <p className="font-bold">highly compatible</p>
          <p>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductMarketing

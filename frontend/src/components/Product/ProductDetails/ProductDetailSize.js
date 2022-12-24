import React from 'react'
import { RadioGroup } from '@headlessui/react'

function ProductDetailSize({ sizes, selectedSize, setSelectedSize }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-md font-bold">Size: M</h4>
        </div>

        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
          <div className="grid grid-cols-8 gap-2">
            {sizes.map((size) => (
              <RadioGroup.Option
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ active }) =>
                  classNames(
                    size.inStock
                      ? 'bg-white shadow-sm cursor-pointer'
                      : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                    active ? 'bg-black text-black' : '',
                    'group relative border rounded-md py-3 flex items-center justify-center text-sm font-medium uppercase focus:outline-none sm:flex-1',
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                    {size.inStock ? (
                      <div
                        className={classNames(
                          active ? 'border' : 'border-2',
                          checked
                            ? 'border-peppermartDark500'
                            : 'border-transparent',
                          'absolute -inset-px rounded-md pointer-events-none',
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1={0}
                            y1={100}
                            x2={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default ProductDetailSize

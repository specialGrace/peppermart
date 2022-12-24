import React from 'react'

import { RadioGroup } from '@headlessui/react'

function ProductDetailColor({ color, selectedColor, setSelectedColor }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-md font-bold">Color: Blue</h4>
        </div>

        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className="mt-2"
        >
          <RadioGroup.Label className="sr-only">
            Choose a Color
          </RadioGroup.Label>
          <div className="grid grid-cols-8 gap-2">
            {color?.map((size) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active }) =>
                  classNames(
                    color.class,
                    active ? 'bg-black text-black' : 'bg-black',
                    'group relative border rounded-md h-[56px] w-[45px] flex items-center justify-center text-sm font-medium uppercase focus:outline-none sm:flex-1',
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="p">{color.name}</RadioGroup.Label>
                    {color ? (
                      <div
                        className={classNames(
                          color.selectedClass,
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
                        className="absolute rounded-md border-2 border-gray-200 pointer-events-none"
                      ></div>
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

export default ProductDetailColor

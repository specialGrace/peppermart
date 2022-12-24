import React from 'react'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductColors({ colors, selectedColor, setSelectedColor }) {
  return (
    <div>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        // className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-2">
          {colors?.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  color.selectedClass,
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-1' : '',
                  'rounded-lg flex items-center justify-center cursor-pointer focus:outline-none',
                )
              }
            >
              <RadioGroup.Label as="p" className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  color.class,
                  'h-8 w-8 border border-black border-opacity-10 rounded-lg',
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default ProductColors

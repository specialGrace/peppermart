import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbSelector } from 'react-icons/tb'

const quantity = [
  { id: 1, name: '01' },
  { id: 2, name: '02' },
  { id: 3, name: '03' },
  { id: 4, name: '04' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuantitySelect() {
  const [selected, setSelected] = useState(quantity[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <TbSelector
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {quantity.map((qty) => (
                  <Listbox.Option
                    key={qty.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'text-white bg-peppermartOrange'
                          : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      )
                    }
                    value={qty}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {qty.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-black',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <AiOutlineCheck
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

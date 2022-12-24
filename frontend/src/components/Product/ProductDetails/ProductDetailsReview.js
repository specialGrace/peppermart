import React from 'react'
import { AiFillStar, AiOutlineLike, AiFillCheckCircle } from 'react-icons/ai'

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Viola Lucas',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
          <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
        `,
      author: 'Viola Lucas',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 3,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: 'Viola Lucas',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 4,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: 'Viola Lucas',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 5,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: 'Viola Lucas',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetailsReview() {
  return (
    <section className="bg-white w-full">
      <div className="flex w-full justify-between border-b-2 mb-10 items-center md:flex-row flex-col">
        <div className="flex justify-center items-center  space-x-20">
          <div>
            <h2 className="text-6xl">4.8</h2>
            <div className="mt-3 flex flex-col items-center">
              <div>
                <div className="flex items-center ">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <AiFillStar
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-black'
                          : 'text-gray-300',
                        'flex-shrink-0 h-4 w-4',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="ml-2 text-sm">({reviews.totalCount} Ratings)</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <div className="flex-1 flex items-center">
                    <p className="w-3">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex-1 flex items-center"
                    >
                      <AiFillStar
                        className={classNames(
                          count.count > 0 ? 'text-black' : 'text-gray-300',
                          'flex-shrink-0 h-4 w-4',
                        )}
                        aria-hidden="true"
                      />
                      <div className="ml-3 relative flex-1 bg-black w-40 md:w-56">
                        <div className="h-2 bg-gray-300  rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 bg-black "
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="inline-flex mb-5 font-bold w-full cursor-pointer border rounded-md py-2 px-4 items-center justify-center text-sm sm:w-auto lg:w-full">
            Write a review
          </p>
        </div>
      </div>

      {/* REVIEW MAPPING ANd RENDERING STARTS HERE  */}
      <div>
        <div className="lg:mt-0 lg:col-start-6 lg:col-span-7 ">
          <div className="flow-root">
            <div className="-my-12 divide-y">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img
                      src={review.avatarSrc}
                      alt={`${review.author}.`}
                      className="h-12 w-12 rounded-full"
                    />

                    <div className="ml-4 w-full">
                      <div className="flex justify-between items-center ">
                        <div className="flex space-x-3 items-center">
                          <h4 className="text-sm font-bold">{review.author}</h4>
                          <AiFillCheckCircle color="#3DAB25" />
                        </div>

                        <div className="border space-x-2 items-center p-2 rounded inline-flex cursor-pointer">
                          <p>was this helpful</p>
                          <AiOutlineLike />
                        </div>
                      </div>

                      <p className="text-sm text-gray-300">August 13, 2022</p>

                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <AiFillStar
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? 'black'
                                : 'text-gray-300',
                              'h-4 w-4 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div
                        className="mt-4 space-y-6 text-sm"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCategoryComponent from '../../components/Category/Category'

function health() {
  return (
    <div>
      <Layout>
        <h2 className="text-center font-bold text-2xl my-10">
          Health & Beauty
        </h2>
        <ProductCategoryComponent />
      </Layout>
    </div>
  )
}

export default health

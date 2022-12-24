import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCategoryComponent from '../../components/Category/Category'

function home() {
  return (
    <div>
      <Layout>
        <h2 className="text-center font-bold text-2xl my-10">Home & Offices</h2>
        <ProductCategoryComponent />
      </Layout>
    </div>
  )
}

export default home

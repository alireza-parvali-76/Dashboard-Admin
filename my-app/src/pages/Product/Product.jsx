import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import { productData } from '../../data'
import { MdOutlinePublish } from "react-icons/md";
import './Product.css'

export default function Products() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to= '/newProduct'>
                <button className='roductAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart title='Sale In Month' data={productData} dataKey='sales' />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src="/images/nature-3082832_1920.jpg" alt="Laptop" className='productInfoImg' />
              <span className='ProductName'>Dell LapTop</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">              
                <div className="productInfoKey">ID:</div>              
                <div className="productInfoValue">123</div>
               </div>
              <div className="productInfoItem">              
                <div className="productInfoKey">Name:</div>              
                <div className="productInfoValue">Dell LapTop</div>
               </div>
              <div className="productInfoItem">              
                <div className="productInfoKey">Sales:</div>              
                <div className="productInfoValue">90000$</div>
               </div>
              <div className="productInfoItem">              
                <div className="productInfoKey">Active:</div>              
                <div className="productInfoValue">Yes</div>
               </div>
             <div className="productInfoItem">              
                <div className="productInfoKey">In Stock:</div>              
                <div className="productInfoValue">123</div>
               </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form action="" className="productForm">
            <div className="productFormLeft">
              <label htmlFor="">Product Name</label>
              <input type="text" placeholder='Dell Laptop'/>
              <label htmlFor="">In Stock</label>
              <select name="" id="inStock">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
              <label htmlFor="">Active</label>
              <select name="" id="inStock">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUploader">
                <img src="/images/nature-3082832_1920.jpg"  alt="profile photo" className='productUploaderImg' />
                <label htmlFor="">
                  <MdOutlinePublish />
                </label>
                <input type="file" name="" id="" style={{display: 'none'}} />
              </div>
              <button className='productButton'>Upload (Edit)</button>
            </div>
          </form>
        </div>
    </div>
  )
}

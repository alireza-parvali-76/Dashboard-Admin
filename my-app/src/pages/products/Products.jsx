import React from "react";
import { useState } from 'react'
import { products } from "../../data";
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import './Products.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function UserList() {

  const [productData, setProductData] = useState (products)

  const productDelete = productID => {
    setProductData(productData.filter(product => product.id != productID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width:90,      
    },
    {
      field:'title',
      headerName:'Name',
      width:200,
      renderCell:(params)=>{
        return(
            <Link to={`/product/${params.row.id}`} className="link">
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.title}
              </div>
            </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width:120
    },
    {
      field: 'action',
      headerName:'Action',
      width: 150,
      renderCell:(params) => {
        return(
          <div className="userListAction">
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>  
            </Link>
           < DeleteOutlineIcon 
              className="userListDelete"
              onClick = { () => productDelete(params.row.id)}
           />
          </div>
        )
      }
    }
  ]

  return (
    <div className="userList">
      <DataGrid
        rows={productData}
        columns={columns}
        disableSelectionOnClick
        pagination
        initialState={{
          pagination: { paginationModel: { pageSize: 3, page: 0 } },
        }}
        pageSizeOptions={[2]}
        checkboxSelection
      />
    </div>
  );
}
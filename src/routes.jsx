import Home from "./pages/home/Home"
import UserList from "./pages/Users/UserList"
import Product from "./pages/products/Products"
import Products from "./pages/Product/Product"

let routes = [
    {path:'/' , element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/product', element: <Product />},
    {path: '/product/:productID', element: <Products />},
]

export default routes;
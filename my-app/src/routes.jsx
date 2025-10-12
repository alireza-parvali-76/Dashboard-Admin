import Home from "./pages/home/Home"
import UserList from "./pages/Users/UserList"
import NewUser from "./pages/newUser/NewUser"
import Product from "./pages/products/Products"

let routes = [
    {path:'/' , element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/newUser', element: <NewUser />},
    {path: '/product', element: <Product />},
]

export default routes;
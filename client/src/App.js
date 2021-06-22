import cartApi from 'api/cartApi';
import categoryApi from 'api/categoryApi';
import LoggedRoute from 'component/common/LoggedRoute';
import PrivateRoute from 'component/common/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCategory } from 'redux/action/category';
import authApi from './api/authApi';
import productApi from './api/productApi';

import {
  Cart,
  Category,
  CheckOut,
  CreateProduct,
  Header,
  Order,
  OrderDetail,
  LoginForm,
  ProductDetail,
  ProductList,
  RegisterForm,
  History,
  HistoryDetail,
  UpdateProduct,
  Footer,
  Modal,

} from './component';
import { getCart } from './redux/action/cart';
import { fetchProductList, fetchProductListFail, fetchProductListSuccess } from './redux/action/product';

function App() {

  Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.auth.isLogged)
  const modal = useSelector(state => state.modal)
  if (modal.show) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
  const token = localStorage.getItem("token")
  const fetchProducts = () => {
    dispatch(fetchProductList())
    productApi.getAll()
      .then(res => {

        const { products } = res

        dispatch(fetchProductListSuccess(products))
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchProductListFail(err.message))
      })
  }
  const verify = () => {
    authApi.verify()
      .then(res => {
        if (typeof res !== "undefined") {
          dispatch({ type: "LOGGED", payload: res })
        }
      })
      .catch(err => console.log(err))
  }
  const checkAdmin = () => {
    authApi.getInfor()
      .then(res => {

        if (res?.user?.role === 1) {
          dispatch({ type: "SET_ADMIN", payload: true })
        } else {
          dispatch({ type: "SET_ADMIN", payload: false })
        }
      })
      .catch(err => console.log(err))
  }
  const fetchAllCategory = () => {
    categoryApi.fetchAllCategory()
      .then(res => {
        dispatch(fetchCategory(res.categorys))
      })
      .catch(err => console.log(err))
  }
  const fetchCart = () => {

    cartApi.getCart(token)
      .then(res => {

        if (res?.cart) {
          dispatch(getCart(res.cart))
        }

      })
      .catch(err => console.log(err))
  }
  useEffect(() => {

    if (!isLogged && token) {
      verify()
      checkAdmin()
    }
    if (isLogged) {
      fetchCart()
      fetchAllCategory()
    }
    fetchProducts()
  }, [isLogged])


  return (
    <>
      <ToastContainer draggable={true} autoClose={6000} transition={Zoom} />



      <Router>
        {modal.show && <Modal>
          {modal.view === "LOGIN_FORM" && <LoginForm />}
          {modal.view === "REGISTER_FORM" && < RegisterForm />}
          {modal.view === "CART" && <Cart />}
        </Modal>}
        <Header />

        <Switch>
          <PrivateRoute path="/category" component={Category} />
          <Route path="/" exact component={ProductList} />

          <Route path="/product/:id" component={ProductDetail} />
          <LoggedRoute path="/cart" component={Cart} />


          <LoggedRoute path='/checkout' component={CheckOut} />

          <LoggedRoute path='/my_order' exact component={Order} />
          <LoggedRoute path='/my_order/:id' component={OrderDetail} />
          <PrivateRoute path='/create_product' component={CreateProduct} />
          <PrivateRoute path='/history' exact component={History} />
          <PrivateRoute path='/history/:id' exact component={HistoryDetail} />
          <PrivateRoute path='/update_product/:id' component={UpdateProduct} />
          <Route component={() => <h1>not found</h1>} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

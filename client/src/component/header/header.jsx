import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeShow, setModalView } from "redux/action/modal";
import {
  CompanyName,
  HeaderContainer,
  StyledItem,
  MobileIcon,
  Route,
  Search,
  SearchInput,
  StyledRouter,
} from "./header.element";

const AdminRouter = () => {
  return (
    <>
      <StyledItem>
        <Route to="/">product</Route>
      </StyledItem>
      <StyledItem>
        <Route to="/create_product">create_product</Route>
      </StyledItem>
      <StyledItem>
        <Route to="/category">category</Route>
      </StyledItem>
      <StyledItem>
        <Route to="/history">History</Route>
      </StyledItem>
    </>
  );
};

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAdmin, isLogged } = useSelector((state) => state.auth);
  const [click, setClick] = useState(false);
  const cart = useSelector((state) => state.cart);
  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const handleSetViewModal = (view) => {
    dispatch(setModalView(view));
    dispatch(changeShow(true));
  };

  const UserRouter = () => {
    return (
      <>
        <StyledItem>
          <Route to="/">Shop</Route>
        </StyledItem>
        {!isAdmin && isLogged ? (
          <StyledItem>
            <Route to="/my_order">My order</Route>
          </StyledItem>
        ) : (
          ""
        )}
        <StyledItem>
          <Route onClick={() => handleSetViewModal("CART")}>
            Cart({cart.length})
          </Route>
        </StyledItem>
        {isLogged ? (
          ""
        ) : (
          <>
            <StyledItem onClick={() => handleSetViewModal("LOGIN_FORM")}>
              <Route>Login</Route>
            </StyledItem>
          </>
        )}
      </>
    );
  };
  return (
    <HeaderContainer>
      <CompanyName to="/">{isAdmin ? "Admin" : "DobanoiShop"}</CompanyName>
      <Search>
        <SearchInput
          placeholder="search"
          type="text"
          onChange={(e) => {
            setClick(false);
            history.push(`/?search=${e.target.value}`);
          }}
        />
      </Search>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <StyledRouter click={click} onClick={handleClick}>
        {isAdmin ? <AdminRouter /> : <UserRouter />}
        {isLogged ? (
          <StyledItem>
            <Route to="/" onClick={handleLogout}>
              Logout
            </Route>
          </StyledItem>
        ) : (
          ""
        )}
      </StyledRouter>
    </HeaderContainer>
  );
};

export default Header;

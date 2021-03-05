import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
  const { isAdmin, isLogged } = useSelector((state) => state.auth);
  const [click, setClick] = useState(false);
  const cart = useSelector((state) => state.cart);
  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
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
          <Route to="/cart">Cart({cart.length})</Route>
        </StyledItem>
        {isLogged ? (
          ""
        ) : (
          <>
            <StyledItem>
              <Route to="/login">Login</Route>
            </StyledItem>
            <StyledItem>
              <Route to="/register">Register</Route>
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

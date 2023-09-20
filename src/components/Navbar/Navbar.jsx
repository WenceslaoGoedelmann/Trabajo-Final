import React from "react";
import {
  CartNavStyled,
  UserContainer,
  NavbarContainerStyled,
  RegisterContainer,
  LinksContainer,
  LogoContainer,
  IconUserContainer,
} from "./NabarStyles";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { FaUser } from "react-icons/fa";
import ModalUser from "./ModalUser/ModalUser";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <NavbarContainerStyled>
      <ModalUser />
      <ModalCart />
      <LogoContainer>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dtsltqjuw/image/upload/v1693405553/MySecurity/img_Logo2-transparent_xf9xfm.png"
            alt="Logo"
          />
        </Link>
      </LogoContainer>
      <LinksContainer>
        {currentUser ? (
          <UserContainer onClick={() => dispatch(toggleHiddenMenu())}>
            Hola! {currentUser.nombre}
          </UserContainer>
        ) : (
          <IconUserContainer onClick={() => dispatch(toggleHiddenMenu())}>
            <FaUser />
          </IconUserContainer>
        )}
        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
      </LinksContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;

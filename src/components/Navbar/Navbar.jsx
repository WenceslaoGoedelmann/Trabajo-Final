import React from "react";
import {
  CartNavStyled,
  
  NavbarContainerStyled,

  LinksContainer,
  LogoContainer,
  IconUserContainer,
} from "./NabarStyles";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useDispatch} from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { FaUser} from "react-icons/fa";
import ModalUser from "./ModalUser/ModalUser";

const Navbar = () => {

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
                <IconUserContainer onClick={() => dispatch(toggleHiddenMenu())}>
            <FaUser />
          </IconUserContainer>
        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
      </LinksContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;

import React from "react";
import {
  LinkUserContainer,
  ModalUserContainer,
  Triangulo,
} from "./ModalUserStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { toggleHiddenMenu } from "../../../redux/user/userSlice";
import { ModalOverlayStyled } from "../NabarStyles";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      {!hiddenMenu && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenMenu())}
          isHidden={hiddenMenu}
        />
      )}
      <AnimatePresence>
        {!hiddenMenu && (
          <ModalUserContainer
            initial={{ translateX: 500 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 500 }}
            transition={{ duration: 0.5 }}
            key="cart-user"
          >
            <Triangulo />
            {currentUser ? (
              <LinkUserContainer
                onClick={() => {
                  dispatch(toggleHiddenMenu());
                  navigate("/user");
                }}
              >
                Informacion
              </LinkUserContainer>
            ) : (
              <div>
                <LinkUserContainer
                  onClick={() => {
                    dispatch(toggleHiddenMenu());
                    navigate("/login");
                  }}
                >
                  Inicia sesión
                </LinkUserContainer>
                <LinkUserContainer
                  onClick={() => {
                    dispatch(toggleHiddenMenu());
                    navigate("/register");
                  }}
                >
                  Registrate
                </LinkUserContainer>
              </div>
            )}
          </ModalUserContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalUser;

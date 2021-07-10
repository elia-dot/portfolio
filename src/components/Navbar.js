import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { navbarLinks } from "../data/nav-data";
import useWidth from "../hooks/useWidth";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 4em;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
const NavLinkWrapper = styled.div`
  padding: 0em 1em;
  font-size: 1.2em;
  @media (max-width: 950px){
    padding: 0.8em 0;
  }
`;
const LinkText = styled(Link)`
  padding: 0em 1em 0.2em 1em;
  color: #e6f1ff;
  text-decoration: none;
  &:hover {
    border-bottom: 3.5px solid #64ffda;
  }
`;
const MenuWraper = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const NavMobile = styled.div`
  position: fixed;
  top: 5em;
  left: 0;
  width: 100%;
  height: calc(100vh - 5em);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #112240;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWidth();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Nav>
      <Link to = "/"><img src="./images/logo.png" alt="logo" /></Link>
      <NavLinks>
        {width >= 950 ? (
          navbarLinks.map((link) => {
            return (
              <NavLinkWrapper key={link.name}>
                {"<"}
                <LinkText
                  exact
                  to={link.to}
                  activeStyle={{ borderBottom: "3px solid #64ffda" }}
                >
                  {link.name}
                </LinkText>
                {"/>"}
              </NavLinkWrapper>
            );
          })
        ) : (
          <MenuWraper>
            {open ? (
              <AiOutlineMenuUnfold onClick={handleOpen} />
            ) : (
              <AiOutlineMenuFold onClick={handleOpen} />
            )}
          </MenuWraper>
        )}
      </NavLinks>
      {open && (
        <NavMobile>
          {navbarLinks.map((link) => {
            return (
              <NavLinkWrapper key={link.name}>
                {"<"}
                <LinkText onClick={handleOpen} exact to={link.to}>
                  {link.name}
                </LinkText>
                {"/>"}
              </NavLinkWrapper>
            );
          })}
        </NavMobile>
      )}
    </Nav>
  );
};

export default Navbar;

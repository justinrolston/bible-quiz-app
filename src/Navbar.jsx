import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.div`
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: calc(100vh - 60px);
    background: #333;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease-in-out;
  }
`;

const NavLink = styled.li`
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <h1>Logo</h1>
      <Hamburger onClick={handleToggle}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavLinks open={open}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

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

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding-bottom: 4px;

  &:hover {
    color: #ccc;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    color:rgb(216, 127, 92);
    border-bottom: 2px solid rgb(216, 127, 92);
  `}
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
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <h1>Bible Quiz</h1>
      <Hamburger onClick={handleToggle}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavLinks open={open}>
        <NavLink>
          <StyledLink to="/" $isActive={location.pathname === "/"}>
            All Books
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/ot" $isActive={location.pathname === "/ot"}>
            Old Testament
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/nt" $isActive={location.pathname === "/nt"}>
            New Testament
          </StyledLink>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

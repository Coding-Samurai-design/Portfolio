import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopSection>
        <Logo>S</Logo>
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/myskills">My Skills</Link>
          </NavItem>
          <NavItem>
            <Link to="/work">Work</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Nav>
      </TopSection>
      <BottomSection>
        <SocialIcons>
          <SocialIconLink href="https://www.linkedin.com/in/sagar-trushna-panigrahi-079b6727a/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </SocialIconLink>
          <SocialIconLink href="https://github.com/sagarpanigrahii" target="_blank">
            <i className="fab fa-github"></i> 
          </SocialIconLink>
        </SocialIcons>
      </BottomSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #111;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    padding: 10px;
  }
`;

const TopSection = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin-top: 0;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 20px 0;
  font-size: 1.2rem;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 10px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const BottomSection = styled.div`
  @media (max-width: 768px) {
    width: 20%;
    display: flex;
    justify-content: flex-end;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: row;
  }
`;

const SocialIconLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    color: #00ffff;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export default Sidebar;

import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SidebarContainer = styled.div`
  width: 25%;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const SidebarItem = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.iconColor};
`;

const Sidebar = () => (
  <SidebarContainer as={motion.div} initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
    <ProfileImage src="/avatar-1.png" alt="Profile" />
    <h2>Richard Hanrick</h2>
    <h3>Web Developer</h3>
    <SidebarItem>
      <IconWrapper><FaEnvelope /></IconWrapper>
      <p>richard@example.com</p>
    </SidebarItem>
    <SidebarItem>
      <IconWrapper><FaPhone /></IconWrapper>
      <p>+1 (213) 352-2795</p>
    </SidebarItem>
    <SidebarItem>
      <IconWrapper><FaBirthdayCake /></IconWrapper>
      <p>June 23, 1982</p>
    </SidebarItem>
    <SidebarItem>
      <IconWrapper><FaMapMarkerAlt /></IconWrapper>
      <p>Sacramento, California, USA</p>
    </SidebarItem>
  </SidebarContainer>
);

export default Sidebar;

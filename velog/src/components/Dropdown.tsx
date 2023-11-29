import React, { useState } from "react";
import styled from "styled-components";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("오늘");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{selectedItem}</DropdownButton>
      {isOpen && (
        <DropdownContent>
          <DropdownItem onClick={() => handleItemClick("오늘")}>
            오늘
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick("이번주")}>
            이번주
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick("이번달")}>
            이번달
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick("올해")}>
            올해
          </DropdownItem>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  margin-left: 10%;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 8px 12px;


  border: 1px solid black
  border-radius: 10px;
  color: black;
  font-size: 14px;
  cursor: pointer;

`;

const DropdownContent = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  margin-top: 8px;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default Dropdown;

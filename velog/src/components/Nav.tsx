// NavBar.tsx
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi style={{ width: "80%" }}>
          <StyledA href="#">
            <StyledLogo>velog</StyledLogo>
          </StyledA>
        </StyledLi>
        <StyledLi style={{ width: "40px" }}>
          <StyledA href="#">
            <FontAwesomeIcon icon={faSun} />
          </StyledA>
        </StyledLi>
        <StyledLi style={{ width: "40px" }}>
          <StyledA href="#">
            <FontAwesomeIcon icon={faSearch} />
          </StyledA>
        </StyledLi>
        <StyledLi style={{ width: "100px" }}>
          <StyledA href="/write">
            <NewPostingButton>새 글 작성</NewPostingButton>
          </StyledA>
        </StyledLi>
        <StyledLi style={{ width: "60px" }}>
          <StyledA href="#">프로필</StyledA>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 20px 10%;
  margin-bottom: 20px;
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  display: flex;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const NewPostingButton = styled.button`
  border: solid 1px #333;
  border-radius: 1rem;
  padding: 5px 8px;
  background: none;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default NavBar;

import styled from "styled-components";
import navbrand from "../assets/navbrand.svg";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TextRedirect } from "./AuthComponents";
import { useAuth } from "../helpers/context";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 24px;
  padding: 8px 36px;
  position: sticky;
  top: 0;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`;

const SearchBox = styled.div`
  width: 70%;
  border-bottom: 1px solid #595855;
  padding: 4px 10px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
`;

interface NavbarProps {
  handleSearch: (keyword: string) => void;
}

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
`;

const Profile = styled(IoPersonCircleOutline)`
  font-size: 28px;
  margin: 0 auto;
  text-align: center;
`;

const Name = styled(TextRedirect)`
  margin-top: -6px;
  margin-bottom: 0;
  text-align: center;
`;

const LogoutText = styled.div`
  text-align: center;
  margin-top: 5px;
`;

const ProfileBoxContainer = styled.div<{ isHovered: boolean }>`
  ${Profile} {
    display: ${(props) => (props.isHovered ? "none" : "block")};
  }

  ${Name} {
    display: ${(props) => (props.isHovered ? "none" : "block")};
  }

  ${LogoutText} {
    display: ${(props) => (props.isHovered ? "block" : "none")};
    color: red;
    font-size: 14px;
  }
`;

const ProfileBox = styled.div`
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState("");
  const { name, setAndGetTokens } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const logout = () => {
    localStorage.clear();
    setAndGetTokens(null, null);
  };
  return (
    <NavWrapper>
      <img src={navbrand} width={100} />
      <SearchBox>
        <Input
          type="text"
          placeholder="Cari Berita"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <FiSearch onClick={() => handleSearch(keyword)} />
      </SearchBox>
      <ProfileBox
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={logout}
      >
        <ProfileBoxContainer isHovered={isHovered}>
          <Profile />
          <Name>{name}</Name>
          <LogoutText>Keluar</LogoutText>
        </ProfileBoxContainer>
      </ProfileBox>
    </NavWrapper>
  );
};

export default Navbar;

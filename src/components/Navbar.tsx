import styled from "styled-components";
import navbrand from "../assets/navbrand.svg";
import { FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TextRedirect } from "./AuthComponents";
import { AuthContext } from "../helpers/context";

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

const ProfileBox = styled.div`
text-align: center;
`;

const Navbar: React.FC<NavbarProps> = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState("");
  const {name, setAndGetTokens} = useContext(AuthContext);
  const logout =() => {
    localStorage.clear();
    setAndGetTokens(null, null);
  }
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
      <ProfileBox onClick={logout}>
        <Profile />
        <Name>{name}</Name>
      </ProfileBox>
    </NavWrapper>
  );
};

export default Navbar;

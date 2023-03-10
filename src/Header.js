import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForumbee } from '@fortawesome/fontawesome-free-brands';


const StyledHeader = styled.header`
    background-color: #393939;
    box-shadow:3px 3px 3px rgba(0,0,0,.3); 
    display:grid;
    grid-template-columns: 240px 1fr 200px;
    grid-column-gap: 20px;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding: 0px 15px;
  svg {
    margin-top: 6px;
    display: inline-block;
    float: left;
  }
  span{
    display: inline-block;
    padding-left: 5px;
    padding-top: 2px;
    font-size: 1.2rem;
    font-weight: 300;
  }

  b{
    font-weight: normal;
    display: inline-block;
    margin-left: 2px;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #777;
  background: rgba(0,0,0,.1);
  padding: 10px 6px;
  margin-top: 9px;
`;

const ProfileLink = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 50px;
`;


function Header(){
    return (
        <StyledHeader>
        <LogoLink href="" className="logo">
        <FontAwesomeIcon icon={faForumbee} size="2x" />
          <span>Forum<b>Flow</b></span>
          </LogoLink>
        <form action="" className="search">
          <SearchInput type="text" placeholder="Search.."/>
        </form>
        <ProfileLink href="" className="profile">Vignesh</ProfileLink>
      </StyledHeader>
    );

}

export default Header;

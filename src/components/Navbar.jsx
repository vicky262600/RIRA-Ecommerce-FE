import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
//import Badge from '@mui/icons-material/Badge'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logOut } from '../redux/userRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;               

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchCointainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
` 
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bolt;
    text-align: center;
    ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-sixe: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})};
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart?.quantity);

    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logOut());
    }
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchCointainer>
                    <Input placeholder='Search'/>
                    <SearchIcon style={{color: "gray", fontSize: 16}}/>
                </SearchCointainer>
            </Left>
            <Center><Logo>rira.</Logo></Center>
            <Right>
                {window.location.pathname === '/' && 
                    <MenuItem onClick={handleClick}>SIGN OUT</MenuItem>
                }
                {
                    window.location.pathname !== '/' &&
                    <Link to="/">
                        <MenuItem>Home</MenuItem> 
                    </Link>
                }
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primery">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

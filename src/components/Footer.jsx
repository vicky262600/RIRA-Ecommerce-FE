import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    ${mobile({ flexDirection: "column" })};

`
const Left = styled.div`
    flex: 1;
 `

const Center = styled.div`
    flex: 1;
    paddind: 20px;
    ${mobile({ display: "none" })};
`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`    
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`

const Right = styled.div`
    flex: 1;
    paddind: 20px;
    ${mobile({ backgroundColor: "#eee", padding: "15px" })};
`
const ContactItem = styled.div`
    margin-botton: 20px;
    display: flex;
    align-items: center;

`

const Payment = styled.div``

const Logo = styled.h1``

const Decs = styled.p`
    margin: 20px 0px;
`
const SocialCointainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RIRA</Logo>
        <Decs>There are many variation of passages of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti cum sit magni iure maxime, culpa excepturi impedit quae temporibus quaerat itaque eaque repellat. Doloremque iusto molestiae provident voluptatum! Quibusdam.

        </Decs>
        <SocialCointainer>
            <SocialIcon color='3B5999'>
                <FacebookIcon/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon color='E60023'>
                <TwitterIcon/>
            </SocialIcon>
        </SocialCointainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contect</Title>
        <ContactItem>
            <FmdGoodIcon style={{marginRight: "10px"}}/>shiv complex
        </ContactItem>
        <ContactItem>
        <CallIcon style={{marginRight: "10px"}}/>+1 1234567890
        </ContactItem>
        <ContactItem>
        <MailOutlineIcon style={{marginRight: "10px"}}/>cantreply@gamil.com
        </ContactItem>
        <Payment>pay with visa card only <PaymentIcon/></Payment>
      </Right>
    </Container>
  )
}

export default Footer

import styled from "styled-components";
import { mobile } from '../responsive';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`
    
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  flex-direction: column;
  background-color: white;
  ${mobile({ width: "75%" })};
`
  
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
  
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
`

const Agreement = styled.span`
  font-size: 15px;
  margin: 50px 0px;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px
`

const Signin = styled.span`
  font-size: 15px;
  margin: 50px 0px;
  cursor: pointer;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 15px;
`

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  
  const handleClick= async (e)=>{
    e.preventDefault();
    if(password !== passwordAgain){
      console.log("passwords don't match");
      alert("passwords don't match!");
    }
    try{
      const user = {
        username: username,
        email: email, 
        password: password
      }
      const res = await axios.post("https://rira-ecommerce-api.vercel.app/api/auth/register", user);
      console.log(res.data);
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>CREAT AN ACCOUNT</Title>
        <Form onSubmit={handleClick}>
            <Input placeholder="user name" onChange={(e)=> setUsername(e.target.value)}/>
            <Input placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
            <Input placeholder="password" onChange={(e)=> setPasssword(e.target.value)}/>
            <Input placeholder="conform password" onChange={(e)=> setPasswordAgain(e.target.value)}/>
              <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with it <b>PRIVACY POLICY</b>
              </Agreement>
            <ButtonBox>
              <Button type='submit'>Create</Button>
              <Link to="/login">
                <Signin>Sign in</Signin>
              </Link>
            </ButtonBox>
            {/* <Signin>Sign in</Signin> */}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

import styled from "styled-components";
import { mobile } from '../responsive';

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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAT AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="user name"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="conform password"/>
              <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with it <b>PRIVACY POLICY</b>
              </Agreement>
            <Button>Creat</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

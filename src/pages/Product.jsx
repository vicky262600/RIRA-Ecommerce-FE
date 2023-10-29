import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive';

const Container = styled.div``

const Wrapper = styled.div`
    paddding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})};
`

const ImgContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh"})};
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "10px"})};
`
const Title = styled.h1`
`

const Decs = styled.p`
    margin: 20px opx;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterConatainer = styled.div`
    width: 50%;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%"})};
`

const Filter = styled.div`
    display: flex;
    align-items: center;

`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%"})};
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Botton = styled.button`
    padding: 15px;
    border: 2px solid teal
    backgrouund-color: white;
    cursor: pointer;
    font-weight: 500;
    
    &:hover{
        background-color: #f8f4f4;
    }
`


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://user-images.githubusercontent.com/75200810/235105280-90f8739c-6e13-4c46-97ec-0f552f3b225a.png" />
        </ImgContainer>
        <InfoContainer>
            <Title>Denime Jumpsuit</Title>
            <Decs>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, minus at! Voluptate perferendis nesciunt vitae inventore ipsam non, corrupti quam possimus earum impedit! Repudiandae in ea consequatur assumenda autem unde.</Decs>
            <Price>200$</Price>
            <FilterConatainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterConatainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Botton>ADD TO CART</Botton>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
// import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  paddding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1``;

const Decs = styled.p`
  margin: 20px opx;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterConatainer = styled.div`
  width: 50%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Botton = styled.button`
    padding: 15px;
    border: 2px solid teal
    backgrouund-color: white;
    cursor: pointer;
    font-weight: 500;
    
    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt="img" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Decs>{product.decs}</Decs>
          <Price>{product.price}$</Price>
          <FilterConatainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterConatainer>
          <AddContainer>
            <AmountContainer>
              <RemoveRoundedIcon
                onClick={() =>
                  setQuantity((prevQuantity) =>
                    prevQuantity > 1 ? prevQuantity - 1 : 1,
                  )
                }
              />
              <Amount>{quantity}</Amount>
              <AddRoundedIcon onClick={() => setQuantity(quantity + 1)} />
            </AmountContainer>
            <Botton onClick={handleClick}>ADD TO CART</Botton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

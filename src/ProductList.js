import { Container, Row, Col } from "reactstrap";
import ShowCard from "./ShowCard";

export default function ProductList({  products, addToCart  })
{

return ( 
<Container>
<Row xs="3">
{

products.map((value)=>
{
return (
<Col>
<ShowCard value={value} addToCart={addToCart} />
</Col>
);

})}
 </Row>   
</Container>);

}
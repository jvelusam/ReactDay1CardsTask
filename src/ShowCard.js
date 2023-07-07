import {
    Card,
    CardBody,
    CardSubtitle,
    Button,
    CardText,
    CardTitle
  } from "reactstrap";
  export default function ShowCard({
    value,
    removeCart,
    addToCart,
    showRemoveCart = false
  }) {
    return (
      <Card
        style={{
          width: "18rem"
        }}
      >
        <img alt="Sample" src={value.images} />
        <CardBody>
          <CardTitle tag="h5">{value.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {value.price}
          </CardSubtitle>
          <CardText>{value.description}</CardText>
          {showRemoveCart ? (
            <Button color="danger" onClick={() => removeCart(value.id)}>
              Remove From Cart
            </Button>
          ) : (
            <Button onClick={() => addToCart(value)}>Add to Cart</Button>
          )}
        </CardBody>
      </Card>
    );
  }
  
import { useState } from "react";
import {
  Modal,
  ModalBody,
  Row,
  Col,
  ModalHeader,
  ModalFooter,
  Button
} from "reactstrap";
import ShowCard from "./ShowCard";
export default function ShowCart({ cartItems, removeCart }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <Button onClick={toggle}>Cart {cartItems.length}</Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen scrollable>
        <ModalHeader toggle={toggle}>Cart Items</ModalHeader>
        <ModalBody>
          <Row xs="3">
            {cartItems.map((value) => {
              return (
                <Col>
                  <ShowCard
                    value={value}
                    showRemoveCart={true}
                    removeCart={removeCart}
                  />
                </Col>
              );
            })}
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

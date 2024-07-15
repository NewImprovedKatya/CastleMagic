import { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardImgOverlay,
  CardSubtitle,
  CardLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const FeaturedCard = ({ castle }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { image, name, location, blurb, description } = castle;
  return (
    <div>
      <Card onClick={toggle}>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {location}
          </CardSubtitle>
        </CardBody>
        <CardImg width="50%" src={image} alt={name} />
        <CardBody>
          <CardText>{blurb}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          <Row xs={1} lg={2}>
            <Col >{description}</Col>
            <Col >
              <img src={image} width={"100%"} />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FeaturedCard;

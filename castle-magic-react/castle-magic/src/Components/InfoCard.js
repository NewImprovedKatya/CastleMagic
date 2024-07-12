import { Container, Col, Row, CardImg, Card } from "reactstrap";

const InfoCard = () => {
  return (
    <Row className="row-content">
      <Col sm="6">
        <p>
          Builders of solid stone castles start to finish with a hidden
          insulation layer.
        </p>
      </Col>
      <Col sm="6">
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
            style={{
              height: 270,
            }}
            width="100%"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default InfoCard;

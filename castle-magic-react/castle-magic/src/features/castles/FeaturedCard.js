import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardImgOverlay,
} from "reactstrap";

const FeaturedCard = ({ castle }) => {
  const { image, name, blurb } = castle;
  return (
    <Card>
      <CardImg width="50%" src={image} alt={name}/>
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
      <CardBody>
        <CardText>{blurb}</CardText>
      </CardBody>
    </Card>
  );
};

export default FeaturedCard;

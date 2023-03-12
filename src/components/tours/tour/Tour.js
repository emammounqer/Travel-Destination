import "./Tour.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Tour({ tour: { id, name, image } }) {
  return (
    <Link className="tour-link" to={`/city/${id}`}>
      <Card>
        <Card.Img variant="top" className="card-img" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
export default Tour;

import { Col, Container, Row } from "react-bootstrap";
import "./Tours.css";
import data from "../../data/db.json";
import Tour from "./tour/Tour";

function Tours() {
  return (
    <Container className="mb-3">
      <h1 className="p-3 text-center">Travel Destination</h1>
      <Row className="g-3">
        {data.map((tour) => (
          <Col xl="3" lg="4" md="6" key={tour.id}>
            <Tour key={tour.id} tour={tour} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tours;

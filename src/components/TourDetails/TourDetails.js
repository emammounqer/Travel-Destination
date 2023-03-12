import { useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { Container } from "react-bootstrap";
import "./TourDetails.css";
import tours from "../../data/db.json";

function TourDetails() {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();

  const tour = tours.find((tour) => id === tour.id);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  if (tour === undefined)
    return (
      <Alert variant="warning">
        <p>No Tour with id {id} Found</p>
      </Alert>
    );

  return (
    <main>
      <img className="detail-img" src={tour.image} alt={tour.name} />
      <Container>
        <h1 className="tour-detail__heading">{tour.name}</h1>
        <p className="info">
          <span className={showMore ? "" : "clap-3"}>{tour.info}</span>
          <span role="button" className="show-more" onClick={handleShowMore}>
            {showMore ? " show less" : "show more"}
          </span>
        </p>
        <p className="text-decoration-underline">Price : {tour.price}$</p>
      </Container>
    </main>
  );
}
export default TourDetails;

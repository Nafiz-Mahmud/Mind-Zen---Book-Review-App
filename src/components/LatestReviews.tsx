import Link from "next/link";
import Image from "next/image";

export default function LatestReviews() {
  const reviews = [
    {
      id: 1,
      title: "To Kill a Mocking Bird",
      rating: 4.7,
      author: "Harper Lee",
      reviewer: "Keanu R.",
      view: 1200,
      like: 764,
      comment: 137,
    },
    {
      id: 2,
      title: "The Great Gatsby",
      rating: 4.5,
      author: "F. Scott Fitzgerald",
      reviewer: "Keanu R.",
      view: 1200,
      like: 764,
      comment: 137,
    },
    {
      id: 3,
      title: "The Catcher in the Rye",
      rating: 4.8,
      author: "J. D. Salinger",
      reviewer: "Keanu R.",
      view: 1200,
      like: 764,
      comment: 137,
    },
    {
      id: 4,
      title: "The Hobbit",
      rating: 4.9,
      author: "J. R. R. Tolkien",
      reviewer: "Keanu R.",
      view: 1200,
      like: 764,
      comment: 137,
    },
    {
      id: 5,
      title: "The Great Gatsby",
      rating: 4.5,
      author: "F. Scott Fitzgerald",
      reviewer: "Keanu R.",
      view: 1200,
      like: 764,
      comment: 137,
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      rating: 4.8,
      author: "J. D. Salinger",
      reviewer: "Keanu R.",
      view: 1200,
      like: 764,
      comment: 137,
    },
  ];
  return (
    <div className="latest_reviews">
      <h1>Latest Reviews</h1>
      <div className="review_card_section">
        <div className="left_arrow">{"<"}</div>
        <div className="reviews">
          {reviews.map((review) => (
            <div className="review" key={review.id}>
              <div className="review_img">
                <Image
                  src="/to_kill.webp"
                  alt="To Kill a Mocking Bird"
                  fill={true}
                />
              </div>
              <div className="review_text">
                <Link href={`/reviews/${review.id}`}>
                  <h2>{review.title}</h2>
                </Link>
                <p className="rating">{review.rating} / 5.0</p>
                <p className="author">Author : {review.author}</p>
                <p className="reviewer">Reviewer : {review.reviewer}</p>
                <div className="counts">
                  <p>V : {review.view}</p>
                  <p>L : {review.like}</p>
                  <p>C : {review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right_arrow">{">"}</div>{" "}
      </div>
    </div>
  );
}

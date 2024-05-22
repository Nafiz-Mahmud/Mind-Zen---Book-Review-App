import "@/styles/reviewerProfilePage.scss";
import Image from "next/image";
export default function ReviewerProfilePage() {
  const user = {
    id: 1,
    username: "Harper Lee",
    email: "harper@gmail.com",
    reviews: 4,
    followers: 2408,
  };
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
  ];
  return (
    <div className="reviewer_profile_page">
      <div className="user_info">
        <div className="user_img">
          <Image src="/harper.jpg" alt="user" fill={true} />
        </div>
        <div className="user_text">
          <h1>{user.username}</h1>

          <p>{user.reviews} Reviews</p>
          <p>{user.followers} Followers</p>
        </div>
      </div>

      <div className="user_reviews">
        <h1>Reviewer Reviews (4)</h1>
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
                <h2>{review.title}</h2>
                <p className="rating">{review.rating} / 5.0</p>
                <p className="author">Author : {review.author}</p>
                <p className="reviewer">Reviewer : {review.reviewer}</p>
                <div className="counts">
                  <p className="view">V : {review.view}</p>
                  <p className="like">L : {review.like}</p>
                  <p className="comment">C : {review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

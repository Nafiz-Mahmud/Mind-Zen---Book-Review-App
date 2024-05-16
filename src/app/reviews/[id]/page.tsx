import "@/styles/singleReview.scss";
import Image from "next/image";
export default function SingleReviewPage() {
  const review = {
    id: 1,
    title: "To Kill a Mocking Bird",
    rating: 4.7,
    author: "Harper Lee",
    reviewer: "Keanu R.",
    view: 1200,
    like: 764,
    comment: 137,
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
    <div className="single_review">
      <div className="left_side">
        <div className="review">
          <div className="review_top">
            <div className="review_img">
              <Image
                src="/to_kill.webp"
                alt="To Kill a Mocking Bird"
                fill={true}
              />
            </div>
            <div className="review_text">
              <h1>{review.title}</h1>
              <p className="rating">{review.rating} / 5.0</p>
              <p>Author : {review.author}</p>
              <p>Reviewer : {review.reviewer}</p>
              <p className="view">View : {review.view}</p>
            </div>
          </div>
          <div className="review_bottom">
            <div className="like_section">
              <button>Like</button>
            </div>
            <div className="review_body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              explicabo. Minus expedita adipisci, tenetur dignissimos quis id
              magni. Illum soluta ullam numquam ratione facilis tempora id atque
              ut nemo deserunt, quis fugiat assumenda consequatur alias maxime
              officiis eligendi dolorum itaque aspernatur dolore rerum.
              Necessitatibus nemo vero deserunt possimus enim accusamus
              distinctio asperiores et, voluptas expedita sunt dolorem libero
              similique a, omnis soluta dolor, praesentium esse fuga illum
              aperiam labore magni! Architecto facere exercitationem sapiente,
              nisi officiis repudiandae numquam id, labore, quos consequuntur
              dolorum repellendus. Consectetur, voluptatem molestias laudantium,
              sequi odit doloremque saepe deleniti reiciendis natus dolorum,
              maxime reprehenderit. Unde, porro tenetur minima sapiente
              necessitatibus quam ducimus explicabo voluptatem omnis esse animi
              excepturi. Debitis autem sequi voluptate. Sunt nam impedit
              reiciendis provident culpa iusto pariatur, fugit neque quibusdam
              eligendi earum assumenda repudiandae ipsum quae laboriosam!
              Adipisci fugit deserunt delectus odio, voluptatum nemo nulla eum,
              quod architecto hic quae eligendi totam nisi ullam! Unde
              blanditiis enim in veniam nulla tempore quo amet qui sed at
              suscipit, delectus, molestias numquam animi ea rem vitae ducimus
              commodi molestiae. Nam saepe perspiciatis, et adipisci amet,
              delectus omnis odit doloremque maxime dolores excepturi quibusdam
              harum dicta quae? Non, dolorem! Laboriosam saepe modi inventore
              provident reprehenderit assumenda.
            </div>
          </div>
        </div>
        <div className="comment_section">
          <h1>Comments ( 3 )</h1>
          <div className="write_comment">
            <form>
              <input type="text" placeholder="Write a comment..." />
              <button>Post</button>
            </form>
          </div>

          <div className="comments">
            <div className="comment">
              <div className="comment_img">
                <Image src="/harper.jpg" alt="Harper Lee" fill={true} />
              </div>
              <div className="comment_text">
                <h2>Harper Lee</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, inventore?
                </p>
              </div>
            </div>

            <div className="comment">
              <div className="comment_img">
                <Image src="/harper.jpg" alt="Harper Lee" fill={true} />
              </div>
              <div className="comment_text">
                <h2>Harper Lee</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, inventore?
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="comment_img">
                <Image src="/harper.jpg" alt="Harper Lee" fill={true} />
              </div>
              <div className="comment_text">
                <h2>Harper Lee</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, inventore?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="more_from_reviewer">
          <h1>More from this Reviewer</h1>
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
      <div className="right_side">
        <h1>Recommanded</h1>
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

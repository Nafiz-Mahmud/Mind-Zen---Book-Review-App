import Image from "next/image";
export default function TopAuthors() {
  const authors = [
    {
      id: 1,
      username: "Harper Lee",
      reviews: 499,
      followers: 2408,
    },
    {
      id: 2,
      username: "F. Scott Fitzgerald",
      reviews: 499,
      followers: 2408,
    },
    {
      id: 3,
      username: "J. D. Salinger",
      reviews: 499,
      followers: 2408,
    },
    {
      id: 4,
      username: "J. K. Rowling",
      reviews: 499,
      followers: 2408,
    },
    {
      id: 5,
      username: "J. R. Tolkien",
      reviews: 499,
      followers: 2408,
    },
    {
      id: 6,
      username: "R. K. Tolkien",
      reviews: 499,
      followers: 2408,
    },
  ];
  return (
    <div className="top_authors">
      <h1>Top Authors</h1>
      <div className="authors">
        {authors.map((author) => (
          <div className="author" key={author.id}>
            <div className="author_img">
              <Image src="/harper.jpg" alt="author harper lee" fill={true} />
            </div>
            <div className="author_text">
              <h2>{author.username}</h2>
              <p>{author.reviews} reviews</p>
              <p>{author.followers} followers</p>
              <button>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ByGenre() {
  const genres = [
    "action",
    "adventure",
    "comedy",
    "drama",
    "fantasy",
    "horror",
    "mystery",
    "romance",
    "sci-fi",
    "thriller",
    "western",
    "biography",
    "documentary",
    "history",
    "sport",
  ];

  return (
    <div className="by_genre">
      <h1>Reviews By Genre</h1>
      <div className="genres">
        {genres.map((genre, index) => (
          <button className="genre" key={index}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

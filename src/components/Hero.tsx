export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_quote">
        <h1>
          {`"`} If you don't like to read,
          <br /> you haven't found the right book. {`"`}
        </h1>
        <p>- J. K. Rowling</p>
      </div>

      <div className="hero_anime">
        <iframe
          className="anime"
          src="https://lottie.host/embed/bbe08983-98ee-4822-99aa-0676b616ac8d/x7FFRE1LGt.json"
        />
      </div>
    </div>
  );
}

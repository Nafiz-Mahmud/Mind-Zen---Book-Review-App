"use client";
import "@/styles/editReviewPage.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
export default function EditReviewPage() {
  const [title, setTitle] = useState("To Kill a Mocking Bird");
  const [author, setAuthor] = useState("Harper Lee");
  const [rating, setRating] = useState(3.5);
  const [value, setValue] = useState(
    "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quosimpedit, consequuntur, eos amet eligendi natus tempora vel facilis repudiandae et. Doloremque nostrum debitis laudantium assumenda, cum molestiae, sit architecto soluta, laborum reprehenderit odit? Harum quasminus asperiores dicta quidem sapiente recusandae deleniti quodexplicabo totam, atque nobis repudiandae commodi neque, eveniet, optiomagni quae possimus nostrum nemo repellendus rerum alias aliquam! Veluibusdam illo molestias quis beatae, nisi eaque enim sed architectovoluptas laudantium itaque sunt, explicabo ea odio? Dolor aliquamquibusdam dolorem tempore praesentium quis nobis impedit nostrum evenietdebitis soluta corrupti labore aut maxime dolore, enim hic."
  );
  const [coverImg, setCoverImg] = useState("/to_kill.webp");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      title: e.target[0].value,
      author: e.target[1].value,
      coverImg: coverImg,
      rating: rating,
      review: value,
    });
  };
  return (
    <div className="write_page">
      <p></p>
      <h1>Update This Review!</h1>
      <form onSubmit={handleSubmit}>
        {coverImg && (
          <div className="show_cover_img">
            <Image
              src={coverImg}
              alt="book cover image"
              width={300}
              height={300}
            />
          </div>
        )}
        <label htmlFor="cover_img" className="cover_img">
          Change Cover Image
        </label>
        <input
          onChange={(e: any) =>
            setCoverImg(URL.createObjectURL(e.target.files[0]))
          }
          type="file"
          accept="image/*"
          id="cover_img"
          className="cover_img_input"
        />
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={title}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
        />
        <label htmlFor="select_rating" className="select_rating">
          Give A Rating
        </label>
        <input
          onChange={(e) => setRating(Number(e.target.value))}
          type="range"
          name="select_rating"
          id="rating"
          value={rating}
          min={0}
          max={5}
          step={0.1}
        />
        <h2 className="rating">Rating : {rating}</h2>
        <ReactQuill
          theme="snow"
          value={value}
          placeholder="Write your review..."
          onChange={setValue}
        />

        <button>Post Review</button>
      </form>
    </div>
  );
}

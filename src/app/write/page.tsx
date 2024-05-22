"use client";
import "@/styles/write.scss";
import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import Image from "next/image";
export default function WritePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState("");
  const [coverImg, setCoverImg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      title,
      author,
      coverImg: coverImg,
      rating: rating,
      // review: value,
    });
  };
  return (
    <div className="write_page">
      <h1>Write A Book Review!</h1>
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
          Upload Cover Image
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
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
        {/* <ReactQuill
          theme="snow"
          value={value}
          placeholder="Write your review..."
          onChange={setValue}
        /> */}

        <button>Post Review</button>
      </form>
    </div>
  );
}

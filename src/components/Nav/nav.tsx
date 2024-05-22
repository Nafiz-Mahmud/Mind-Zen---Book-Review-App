"use client";
import "./nav.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="top_bar"></div>
      {open && user && (
        <div className="burger_menu" style={{ zIndex: 99 }}>
          <ul>
            <li className="close" onClick={() => setOpen((prev) => !prev)}>
              X
            </li>
            <li>Home</li>
            <li>Reviews</li>
            <li>Write</li>
            <li>About</li>
          </ul>
        </div>
      )}
      {user && (
        <div className="burger" onClick={() => setOpen((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      )}
      <Link href="/">
        <h1>Mind Zen</h1>
      </Link>
      <ul className="links">
        <li>Home</li>
        <li>Reviews</li>
        <Link href="/write">
          <li>Write</li>
        </Link>
        <li>About</li>
      </ul>
      {user ? (
        <button className="avatar">
          <Link href="user/1">
            <div className="avatar_img">
              <Image src="/avatar.png" alt="Avatar img" fill={true} />
            </div>
          </Link>
        </button>
      ) : (
        <div className="buttons">
          <button className="login_button">Log In</button>
          <button className="signup_button">Sign Up</button>
        </div>
      )}
    </nav>
  );
}

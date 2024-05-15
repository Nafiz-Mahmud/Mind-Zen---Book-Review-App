import Login_Signup from "@/components/Login_Signup/login_signup";
import Hero from "@/components/Hero";
import ByGenre from "@/components/ByGenre";
import LatestReviews from "@/components/LatestReviews";
import TopReviews from "@/components/TopReviews";
import TopAuthors from "@/components/TopAuthors";
import "@/styles/homepage.scss";
export default function HomePage() {
  const user = true;

  if (!user) {
    return (
      <>
        <Login_Signup />
      </>
    );
  }
  return (
    <div className="homepage">
      <Hero />
      <ByGenre />
      <LatestReviews />
      <TopReviews />
      <TopAuthors />
    </div>
  );
}

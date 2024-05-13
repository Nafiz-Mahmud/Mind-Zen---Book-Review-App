import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/Nav/nav";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: "Mind Zen | Book Review App",
  description: "Mind Zen Is A Book Review App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

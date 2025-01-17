import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Messagebox from "@/components/Messagebox";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"], 
  style: ["normal"], 
});

export const metadata = {
  title: "L I A R",
  description: "An intelligent chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="relative h-screen w-screen bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
            <div className="h-full w-full">
              <Navbar />
              {children}
              <Messagebox />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
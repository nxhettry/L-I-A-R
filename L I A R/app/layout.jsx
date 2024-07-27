import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Messagebox from "@/components/Messagebox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L I A R",
  description: "An intelligent chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="ubuntu-regular relative h-screen w-screen bg-slate-950">
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

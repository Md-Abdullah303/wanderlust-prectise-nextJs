import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navber from "@/components/sheared/Navber";
import Footer from "@/components/sheared/Footer";
import { ToastContainer } from "react-toastify";


const roboto = Roboto({
  subsets: ["latin"]
})

export const metadata = {
  title: "Wanderlust",
  description: "A place where you can go any ware...",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber/>
        <main>{children}</main>
        <Footer/>
         <ToastContainer />
      </body>
    </html>
  );
}

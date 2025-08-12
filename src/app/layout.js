import Navigation from "@/components/navigation";
import "@/app/globals.css";
import Footer from "@/components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOSProvider from "@/components/aos";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <Navigation />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}

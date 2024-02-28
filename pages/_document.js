import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head />
        <body className="main_bg text-white ">
          <Navbar />
          <Main />
          <NextScript />
          <Navbar />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

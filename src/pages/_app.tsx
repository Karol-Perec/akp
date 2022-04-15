import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { GlobalStyles } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles
        styles={{
          "html, body, #__next": {
            height: "100%",
            padding: 0,
            margin: 0,
            fontFamily:
              "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          },
          "*": { boxSizing: "border-box" },
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

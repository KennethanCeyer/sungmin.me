import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const AppContainer = styled.main();

export const metadata = {
  title: "Sungmin Me",
  description:
    "The personal website, Sungmin Han, MLOps Lead | ML GDE | GDG Golang Korea Lead",
};

const title = "Sungmin Han - MLOps Lead | ML GDE | GDG Golang Korea Lead";
const description =
  "The personal website, Sungmin Han, MLOps Lead | ML GDE | GDG Golang Korea Lead";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContainer className={plusJakartaSans.className}>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            name="viewport"
            content="width=1400, initial-scale=1.0, user-scalable=yes"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1770dc" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

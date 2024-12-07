import Head from "next/head";
import InteractiveComponent from "../components/InteractiveComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Custom Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <InteractiveComponent />
      </div>
    </>
  );
}

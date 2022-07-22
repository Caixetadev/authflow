import type { NextPage } from "next";

import { Form, Title, Header } from "../components";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Title>Sign in</Title>
      <Form />
      <Footer />
    </>
  );
};

export default Home;

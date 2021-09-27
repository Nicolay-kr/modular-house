import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Round house" page="house">
      <HousePage house={1}></HousePage>
    </Layout>
  );
};
export default HousesPage;

import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model B120" page="house" component = {HousePage} house={1}>
    </Layout>
  );
};
export default HousesPage;


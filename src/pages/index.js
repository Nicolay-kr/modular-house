import "../components/css/global.css";
import React from "react";
import Main from "../components/Main";
import Layout from "../components/Layout";

export default function MainPage() {
  return (
    <Layout pageTitle="Main page" page='main' component={Main}>
    </Layout>
  );
}
import { Admin, ListGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import StudentList from "./components/StudentList";

import React from "react";
import CoursList from "./components/CoursList";
import CityList from "./components/CityList";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("https://iacapi.herokuapp.com")}>
      <Resource name='prospect' list={ListGuesser} />
      <Resource name='courses' list={CoursList} />
      <Resource name='citys' list={CityList} />
    </Admin>
  );
};

export default Dashboard;

import { Admin, ListGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import StudentList from "./components/StudentList";

import React from "react";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("https://iacapi.herokuapp.com")}>
      <Resource name='prospect' list={ListGuesser} />
    </Admin>
  );
};

export default Dashboard;

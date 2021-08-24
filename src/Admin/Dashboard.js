import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import StudentList from "./components/StudentList";

import React from "react";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name='prospect' list={StudentList} />
    </Admin>
  );
};

export default Dashboard;

import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import StudentList from "./components/StudentList";
import ProspectList from "./components/ProspectList";

import React from "react";
import CoursList from "./components/CoursList";
import CityList from "./components/CityList";
import ProspectEdit from "./components/ProspectEdit";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("https://iacapi.herokuapp.com")}>
      <Resource name="prospect" list={ProspectList} edit={ProspectEdit} />
      <Resource name="courses" list={CoursList} />
      <Resource name="cities" list={CityList} />
    </Admin>
  );
};

export default Dashboard;

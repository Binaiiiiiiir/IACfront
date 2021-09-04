import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import StudentList from "./components/StudentList";

import React from "react";
import ProspectList from "./components/prospect/ProspectList";
import ProspectEdit from "./components/prospect/ProspectEdit";
import CoursList from "./components/courses/CoursList";
import UpdateCity from "./components/cities/UpdateCity";
import CityList from "./components/cities/CityList";
import CityCreate from "./components/cities/CityCreate";
import CoursCreate from "./components/courses/CoursCreate";
import UpdateCours from "./components/courses/UpdateCours";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("https://iacapi.herokuapp.com")}>
      <Resource name="prospect" list={ProspectList} edit={ProspectEdit} />
      <Resource
        name="courses"
        list={CoursList}
        create={CoursCreate}
        edit={UpdateCours}
      />
      <Resource
        name="cities"
        list={CityList}
        create={CityCreate}
        edit={UpdateCity}
      />
    </Admin>
  );
};

export default Dashboard;

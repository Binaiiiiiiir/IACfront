import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import React from "react";
import ProspectList from "./components/prospect/ProspectList";
import ProspectEdit from "./components/prospect/ProspectEdit";
import CoursList from "./components/courses/CoursList";
import UpdateCity from "./components/cities/UpdateCity";
import CityList from "./components/cities/CityList";
import CityCreate from "./components/cities/CityCreate";
import CoursCreate from "./components/courses/CoursCreate";
import UpdateCours from "./components/courses/UpdateCours";
import TeacherList from "./components/teacher/TeacherList";
import CreateTeacher from "./components/teacher/CreateTeacher";
import EditTeacher from "./components/teacher/EditTeacher";
import { EditGuesser } from "ra-ui-materialui";
import FormationList from "./components/formation/FormationList";
import FormationCreate from "./components/formation/FormationCreate";
import FormationEdit from "./components/formation/FormationEdit";
const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("https://iacapi.herokuapp.com")}>
      <Resource name='prospect' list={ProspectList} edit={ProspectEdit} />
      <Resource
        name='courses'
        list={CoursList}
        create={CoursCreate}
        edit={UpdateCours}
      />
      <Resource
        name='cities'
        list={CityList}
        create={CityCreate}
        edit={UpdateCity}
      />
      <Resource
        name='teacher'
        list={TeacherList}
        create={CreateTeacher}
        edit={EditTeacher}
      />
      <Resource
        name='formation'
        list={FormationList}
        create={FormationCreate}
        edit={FormationEdit}
      />
    </Admin>
  );
};

export default Dashboard;

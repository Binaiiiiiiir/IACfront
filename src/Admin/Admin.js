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
import FormationList from "./components/formation/FormationList";
import FormationCreate from "./components/formation/FormationCreate";
import FormationEdit from "./components/formation/FormationEdit";
import { AiOutlineUsergroupAdd, AiOutlineUser } from "react-icons/ai";
import { RiBookletLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { BiBookReader } from "react-icons/bi";
import StudentList from "./components/student/StudentList";
import StudentEdit from "./components/student/StudentEdit";
import ClassList from "./components/classe/ClassList";
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import UserCreate from "./components/user/UserCreate";
// import { auth } from "./authProvider";

const Dashboard = () => {
  return (
    <Admin
      dataProvider={restProvider("https://iacback.herokuapp.com")}
      // authProvider={auth}
    >
      <Resource
        name='prospect'
        list={ProspectList}
        edit={ProspectEdit}
        icon={AiOutlineUsergroupAdd}
      />
      <Resource
        name='student'
        list={StudentList}
        edit={StudentEdit}
        icon={IoSchoolOutline}
      />
      <Resource
        name='classes'
        list={ClassList}
        // edit={EditGuesser}
        icon={BiBookReader}
      />
      <Resource
        name='courses'
        list={CoursList}
        create={CoursCreate}
        edit={UpdateCours}
        icon={RiBookletLine}
      />
      <Resource
        name='cities'
        list={CityList}
        create={CityCreate}
        edit={UpdateCity}
        icon={HiOutlineLocationMarker}
      />
      <Resource
        name='teacher'
        list={TeacherList}
        create={CreateTeacher}
        edit={EditTeacher}
        icon={FaChalkboardTeacher}
      />
      <Resource
        name='formation'
        list={FormationList}
        create={FormationCreate}
        edit={FormationEdit}
        icon={MdAttachMoney}
      />
      <Resource
        name='user'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        icon={AiOutlineUser}
      />
    </Admin>
  );
};

export default Dashboard;

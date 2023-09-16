

import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/featured"
import "./home.scss"
import List from "../../components/list/List"

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
       
        <Featured type="Series"/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
      </div>
  );
};

export default Home

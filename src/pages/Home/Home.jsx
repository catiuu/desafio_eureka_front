// import { useState } from 'react'
import "./style.css";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { UserProvider } from "../../context/UserContext";

function Home() {
  return (
    <div className="container">
      <UserProvider>
        <Header />
        <Input />
      </UserProvider>
    </div>
  );
}

export default Home;

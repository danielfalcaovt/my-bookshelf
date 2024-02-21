import Header from "./views/Header";
import Greetings from "./views/Greetings";
import Main from "./views/Main";
import "./styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App(){
  const [data,setData] = useState();
    const getData = async() =>{
        try{
            const response = await axios.get("http://localhost:5500/getData");
            const data = response.data;
            setData(data);
            console.log(data);
        }catch(err){
            setData("Data not found");
            console.error(err);
        };
    };

    async function handleSearch(evt){
      evt.preventDefault();
      
      try{
        const response = await axios.post("http://localhost:3000/getData",{x:'x'});
        const data = response.data;
        console.log('working');
        setData();
      }catch(err){
        console.error(err);

      };
    };
    useEffect(()=>{
        getData();
    },[]);
  return(
    <>
      <Header 
        func={handleSearch}
      />
      <Greetings />
      <Main
        data={data}
      />
    </>
  )
};
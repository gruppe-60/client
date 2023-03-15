import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Baskets = () => {
  const [listName, setListName]= useState([])
  const [newListName, setNewListName]= useState("")
  const navigate = useNavigate();


  const oneListDelete =(listId)=>{
    axios.post(`http://localhost:4001/liste/${listId}/delete`).then((data) => {
      console.log(data.data)
      axios.get("http://localhost:4001/liste/allListe").then((data) => {
        console.log(data.data.allListe)
        setListName(data.data.allListe);
             });
           });

  }

    useEffect(()=>{
      axios.get("http://localhost:4001/liste/allListe").then((data) => {

 setListName(data.data.allListe);
      });
    },[])

    const handleChange = (e) => {
      setNewListName(e.target.value);
    };

    const handleSubmit =(event)=>{
      event.preventDefault()
      axios.post("http://localhost:4001/liste/create",{name:newListName}).then((data) => {
   
        axios.get("http://localhost:4001/liste/allListe").then((data) => {
          console.log(data.data.allListe)
          setListName(data.data.allListe);
               });
             });
    }


    const navTo=(id)=>{
      console.log(id)
      navigate(`/basket/${id}`);

    }
  return (
    <>
        <form >
        <label>
          Neue Liste:
          <input type="text" value={newListName}   onChange={handleChange}/>
        </label>
        <button type="submit" onClick={handleSubmit}>
          Erstellen
        </button>
      </form>
    
    {listName.length > 0 ? listName.map((item)=>{
      return <div key={item.name}    ><p onClick={()=>navTo(item._id)}>{item.name}</p>
      <button onClick={()=>oneListDelete(item._id)}>delete</button></div>
    }):<div>Leer</div> }</>

  
  );
};

export default Baskets;

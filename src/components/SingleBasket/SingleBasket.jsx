import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./SingleBasket.css";

const SingleBasket = () => {
    const  [items,setItems]= useState([])
  const [newItem, setNewItem]= useState("")

    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:4001/liste/${id}`).then((data) => {
setItems(data.data.oneList.items);
        }).catch((response)=>{
            console.log(response.response.data.message)
        })
      },[])


      const oneItemDelete =(itemId)=>{

          axios.post(`http://localhost:4001/liste/delete/${id}/${itemId}`).then((data) => {
            axios.get(`http://localhost:4001/liste/${id}`).then((data) => {
                setItems(data.data.oneList.items);
                        }).catch((response)=>{
                            console.log(response.response.data.message)
                        })
                 });
         
    
      }

      const handleChange = (e) => {
        setNewItem(e.target.value);
      };
  
      const handleSubmit =(event)=>{
        event.preventDefault()
        axios.post(`http://localhost:4001/liste/item-create/${id}`,{name:newItem}).then((data) => {
          axios.get(`http://localhost:4001/liste/${id}`).then((data) => {
            setItems(data.data.oneList.items);
                    }).catch((response)=>{
                        console.log(response.response.data.message)
                    })
               });
      }

  return (
    <>
           <form >
        <label>
          Neue Item:
          <input type="text" value={newItem}   onChange={handleChange}/>
        </label>
        <button type="submit" onClick={handleSubmit}>
        Hinzufügen
        </button>
      </form>
  <p>{items.name}</p>
  {items.length > 0 ? items.map((item)=>{
      return <div key={item._id}   ><p>{item.name}</p>
      <button onClick={()=>oneItemDelete(item._id)}>delete</button>
      </div>
    }):<div>Leer</div> }
    </>

   
  );
};

export default SingleBasket;

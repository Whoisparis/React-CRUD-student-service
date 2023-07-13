import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Home.css';

export default function Home() {

    const [query, setQuery]=useState("");

    const[users,setUsers]=useState([]);

    const[order,setOrder]=useState("ASC");

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    }

    const sorting=(col)=> {
      if (order === "ASC")  {
        const sorted = [...users].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
          setUsers(sorted);
          setOrder("DSC");
      }
      if (order === "DSC")  {
        const sorted = [...users].sort((a,b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
          setUsers(sorted);
          setOrder("ASC");
      }
      
    };
  return (
    <div className='container'>
      <div className='search-form'>
        <input className="mt-4"placeholder="Введите данные" onChange={event => setQuery(event.target.value)} />
        {
          users.filter(user => {
            if (query === "") {
              return "";
            }
            else if (user.name.toLowerCase().includes(query.toLowerCase()) || user.profStatus.toLowerCase().includes(query.toLowerCase())) {
              return user;
            }
           
          }).map((user, index) => (
            <div className="box" key={index}>
              <p><b>ФИО:</b> {user.name}</p>
              <p><b>Группа:</b> {user.groupp}</p>
              <p><b>Номер билета:</b> {user.profStatus}</p>
              <Link className="btn btn-outline-primary mx-2" to={`/viewuser/${user.id}`}>Подробности</Link>
            </div>
          ))
        }     
      </div>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col" className="border" onClick={()=>sorting("groupp")}>Группа</th>
                <th scope="col" className="border" onClick={()=>sorting("name")}>ФИО</th>
                <th scope="col" className="border">Дата рождения</th>
                <th scope="col" className="border">Статус обучения</th>
                <th scope="col" className="border">Статус в профсоюзе</th>
                <th scope="col" className="border">Профбилет</th>
                <th scope="col" className="border">Успеваемость</th>
                <th scope="col" className="border">Комментарий</th>
              </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index) =>(
                        <tr>
                        <td className="border">{user.groupp}</td>
                        <td className="border">{user.name}</td>
                        <td className="border">{user.date}</td>
                        <td className="border">{user.grade}</td>
                        <td className="border">{user.profStatus}</td>
                        <td className="border">{user.profTicket}</td>
                        <td className="border">{user.gradeStatus}</td>
                        <td className="border">{user.comment}</td>
                    </tr>         
                    ))
                }
            </tbody>
        </table> 
        </div>
    </div>
  )
}


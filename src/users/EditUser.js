import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [user,setUser]=useState({
        name:"",
        profBuro:"",
        groupp:"",
        date:"",
        grade:"",
        profStatus:"",
        profTicket:"",
        gradeStatus:"",
        comment:""
    });

    const {name,profBuro,groupp,date,grade,profStatus,profTicket,gradeStatus,comment} = user;

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value});

    };
    
    useEffect(() => {
        loadUser();
    },[])

    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Изменить инфомарцию</h2>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>ФИО:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Введите ФИО"
                        name="name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Профбюро:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Введите профбюро"
                        name="profBuro"
                        value={profBuro}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Группа:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="groupp"
                        value={groupp}
                        onChange={(e)=>onInputChange(e)}
                    />
                    </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Дата рождения:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="date"
                        value={date}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Статус обучения:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="grade"
                        value={grade}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Номер профсоюзного билета:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="profStatus"
                        value={profStatus}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Профбилет:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="profTicket"
                        value={profTicket}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Успеваемость:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="gradeStatus"
                        value={gradeStatus}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        <b>Комментарий:&nbsp;</b>
                    </label>
                    <input
                        type={"text"}
                        className="form-contol"
                        placeholder="Enter your email"
                        name="comment"
                        value={comment}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                    <button type="submit" className="btn btn-outline-primary">
                        submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to={`http://localhost:3000/viewuser/${id}`}>
                        Cancel
                    </Link>
                </form>
                </div>
            </div>
        </div>
  );
}

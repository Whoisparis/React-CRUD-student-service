import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser] = useState({
    });

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    })

    const loadUser=async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Карточка студента</h2>
                <div className="card">
                    <div className="card-header">
                        <h3>{user.name}</h3>
                        <ul className = "list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Профбюро: </b>
                                {user.profBuro}
                            </li>
                            <li className="list-group-item">
                                <b>Группа: </b>
                                {user.groupp}
                            </li>
                            <li className="list-group-item">
                                <b>Дата рождения: </b>
                                {user.date}
                            </li>
                            <li className="list-group-item">
                                <b>Статус обучения: </b>
                                {user.grade}
                            </li>
                            <li className="list-group-item">
                                <b>Номер профсоюзного билета: </b>
                                {user.profStatus}
                            </li>
                            <li className="list-group-item">
                                <b>Профбилет: </b>
                                {user.profTicket}
                            </li>
                            <li className="list-group-item">
                                <b>Успеваемость: </b>
                                {user.gradeStatus}
                            </li>
                            <li className="list-group-item">
                                <b>Комментарии: </b>
                                {user.comment}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Изменить</Link>
                <Link className="btn btn-primary my-2" to={"/"}> Вернутся</Link>
            </div>
        </div>
    </div>
  )
}

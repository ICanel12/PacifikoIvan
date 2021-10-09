import React from 'react'
import { useParams, Link } from 'react-router-dom'
import '../../src/App.css';


const Employee = () => {  
    console.log(useParams());
    const {id} = useParams()

    const [employee, setEmployees] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
    const data = await fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
        const employees = await data.json()
        console.log(employees.data)
        setEmployees(employees.data)
    }


    return (
        
        <div>
            <div className="title">Employee</div> 

            <div className="box-employee">
                <p><strong>ID: </strong>{employee.id}</p>
                <p><strong>Nombre: </strong>{employee.employee_name}</p>
                <p><strong>Salario: </strong>{employee.employee_salary}</p>
                <p><strong>Edad: </strong>{employee.employee_age}</p>
               
            </div>

            <div>

            <Link to={`/employees`}>
                <button type="button" className="btn btn-primary">Regresar</button>
            </Link>
            </div>

            <footer>Iván Alexander Canel García - 2021</footer>

        </div>
    )
}

export default Employee

import React, {useEffect} from 'react'

import {Link} from "react-router-dom";
import '../../src/App.css';


const Employees = () => {

    const [employee, setEmployees] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])


    const obtenerDatos = async () => {
        const data = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const employees = await data.json()
        console.log(employees.data)
        setEmployees(employees.data)
    }

//CAMBIAR 
    function Ejercicio1(){
        const check = (num) => {
    
          let isPrime = true;
          if (num < 2) {
              isPrime = false;
          }
      
          //APLICANDO ALGORITMO LA CRIBA DE ERATÓSTENES
          for (let i = 2; i * i <= num; i++) {
              if ( num % i === 0 ){
                  isPrime = false; 
                  break;
              }
          }
          return isPrime;
        }
      
        let value = 2
        const result = check(value);
        
        if(result){
            console.log(value + " si es un número primo")
        }else{
            console.log(value + " no es un número primo")
        }
    
      }



    
    function Ejercicio2(){
        const consecutiveSum = (num) => {
        let sum = (num * (num + 1)) / 2; 
        return sum;
    }
  
    let value = 8;
    const result = consecutiveSum(value); 
    console.log("La suma dio como respuesta: " + result);
  }


    var filtro = employee.filter(x => x.employee_salary > 300000);
    var cont = filtro.length;

    console.log(cont + " son los empleados que ganan más de Q 300,000");




    return (

    <div className="container">
       



        <div className="title">Ejercicios</div>
        


        <div className="position-btn">
            <button className="btn btn-primary btn-employee" onClick={Ejercicio1}>Ejercicio1 (Consola)</button>
            <button className="btn btn-info btn-employee"  onClick={Ejercicio2}>Ejercicio2 (Consola)</button>
        </div>

        <hr/>
        <br/>
        <div className="title">Listado Empleados</div>

        <table className="table">
        <thead className="thead-dark">
       <tr>
         <th scope="col">Id</th>
         <th scope="col">Nombre Empleado</th>
         <th scope="col">Salario</th>
         <th scope="col">Edad</th>
         <th scope="col">Ver</th>
       </tr>
     </thead>
     <tbody>
       
      
          {
          employee.map((item, idx) => (
            <tr key={idx}>
                <td scope="col">{item.id} </td>
                <td scope="col">{item.employee_name} </td>
                <td scope="col">{item.employee_salary} </td>
                <td scope="col">{item.employee_age} </td>
                <td scope="col">
                <Link to={`/employee/${item.id}`}>
                        <button type="button" className="btn btn-primary">Detalle</button>
                </Link>
                </td>

            </tr>
           
         ))
         }
      
       </tbody>


   </table>


    <Link to={`/create`}>
        <button type="button" className="btn btn-primary">Ingresar Usuario</button>
    </Link>



    

   
    <footer>Iván Alexander Canel García - 2021</footer>
    </div>
    )



}



export default Employees

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css';

export class CreateEmploye extends Component {

    constructor(props){
        super(props)
        this.state = {
            employeeId: null,
            employeeName: '',
            employeeSalary: null,
            employeeAge: null,
            profileImage: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }



    submitHandler = async(e) => {
        e.preventDefault()
        console.log(this.state)
        let data = this.state


        const result =  await fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let response = await result.json()
        console.log(response)
    }


    render() {

        const { employeeId, employeeName, employeeSalary, employeeAge, profileImage } = this.state

        return (
            <div>


                <div className="title">Ingresar Empleado</div> 

                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input className="form-control"  type="text" name="employeeName" value={employeeName} onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label>Empleado</label>
                        <input className="form-control" type="number" name="employeeSalary" value={employeeSalary} onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label>Salario</label>
                        <input className="form-control"  type="number" name="employeeAge" value={employeeAge} onChange={this.changeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label>Edad</label>
                        <input className="form-control"  type="text" name="profileImage" value={profileImage} onChange={this.changeHandler}></input>
                    </div>
                    <br/>
                    <br/>
                    
                    <div className="btn-create">

                        <button type="submit" className="btn btn-success">Ingresar</button>
                    </div>
                </form>
                <Link to={`/employees`}>
                <button type="submit" className="btn btn-primary btn-create">Regresar</button>
                </Link>
                
               
          

                <footer>Iván Alexander Canel García - 2021</footer>

            </div>
        )
    }
}

export default CreateEmploye

import React, { Component } from 'react';
import axios from 'axios';

const Pet = props => (
    <tr>
        <td>{props.pet.pet_name}</td>
        <td>{props.pet.pet_type}</td>
        <td>{props.pet.pet_description}</td>
    </tr>
)

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/pets/')
            .then(res => {
                this.setState({
                    pets: res.data
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    petList(){
        return this.state.pets.map(function(pet, i){
            return <Pet pet={pet} key={i}></Pet>
        })
    }
    render() {
        const pet = this.state.pets[0];
        return (
            <div>
                <p>Welcome to Home Page!</p>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tyoe</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.petList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
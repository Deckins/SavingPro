import React, {Component} from 'react';
import './UserInput.css';
import axios from '../axiosInstance';
class UserInput extends Component{
    state = {
        dish: '',
        address: '' ,
        price: ''  
    }
    postDataHandler = () => {
        const data = {
            dish:this.state.dish,
            address:this.state.address,
            price:this.state.price
        }
        axios.post('/data.json',data)
        .then(response => {
            console.log(response)
        });
    }
    render () {
        return (
            <div className="UserInput">
                <h1>Enter your Dish</h1>
                <input type="text" value={this.state.dish} 
                onChange={(event) => this.setState({dish: event.target.value})} 
                />
                <h1>Enter Your Address </h1>
                <textarea  value={this.state.address} 
                onChange={(event) => this.setState({address: event.target.value})} 
                />
                <h1>Select your price range</h1>
                <select value={this.state.price} 
                onChange={(event) => this.setState({price: event.target.value})}
                >
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        )
    } 
}

export default UserInput;
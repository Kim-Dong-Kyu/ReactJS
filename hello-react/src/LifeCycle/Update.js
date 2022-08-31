import React, { Component } from 'react';

class Update extends Component {

    state = {
        name : ""
    }
   
    constructor(props){
        super(props);
        console.log("constructor 호출!")
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps 호출!")
        return null;
    }

    shouldComponentUpdate(nextProps, prevState){
        console.log("shouldComponentUpdate 호출!");
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate 호출!");
    }

    getSnapshotBeforeUpdate(prevState, nextProps){
        console.log("getSnapshotBeforeUpdate 호출!")
        return null;
    }

    handleOnChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    render() {
        return (
            <div>   
                <input onChange= {this.handleOnChange}></input>
                <h1>Update 실행순서 알아봅시다! </h1>
            </div>
        );
    }
}

export default Update;
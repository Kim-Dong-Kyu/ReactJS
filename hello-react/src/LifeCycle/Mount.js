import React, { Component } from 'react';

class Mount extends Component {
    state ={
        number : 0
    }

    constructor(props){
        super(props);
        console.log("constructor 호출!");
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps 호출!");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount 호출!")
    }

    render() {
        console.log("reder 호출!")
        return (
            <div>
                <h1>Mount 실행순서 알아봅시다!</h1>
            </div>
        );
    }
}

export default Mount;
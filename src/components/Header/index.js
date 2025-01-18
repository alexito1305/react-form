import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
        welcomeMessage: 'Bienvenido!!!',
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({welcomeMessage: 'Apoyános respondiendo!!!'})
        }, 2000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
    }

    render(){
        return(
            <header>
                <h1>{this.props.appName}</h1>
                <p>{this.state.welcomeMessage}</p>
            </header>
            
        )
    }
}

export default Header;
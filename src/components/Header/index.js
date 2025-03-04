import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
        welcomeMessage: 'Bienvenido a mi playlist',
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({welcomeMessage: 'La App se ha cargado correctamente'})
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
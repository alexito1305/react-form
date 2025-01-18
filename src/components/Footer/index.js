import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
        footerMessage: 'Al usar este sitio aceptas nuestros términos de uso y nuestra política de privacidad.',
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({footerMessage: 'Gracias por apoyarnos!!!'})
        }, 2000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
    }

    render(){
        return(
            <footer>
                <nav>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                </nav>
                <div>
                    <small>
                       {this.state.footerMessage}
                    </small>
                </div>
        
            </footer>     
        )
    }
}

export default Footer;
import React, {Component} from 'react';
import "./index.css";

class Form extends Component {
    constructor(props) {
      super(props)
      this.state = this.state = {
       values:{
         name: '',
         email: '',
         phone: '',
         gender: '',
         dogs: '',
         description: '',
        },
      validations: {
        name: '',
        email: '',
        gender: '',
        dogs:'',
      },
    }
  }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
          values: {
            ...this.state.values,
            [name]:value,
          },  
     })
  }

  validateAll = () => {
    const {name, email, phone, gender, dogs, description} = this.state.values;
    const validations = {name: '', email: '', gender: '', dogs:''};
    let isValid = true;

    if (!name) {
      validations.name = 'El nombre es requerido'
      isValid = false
    }

    if (!email) {
      validations.email = 'El email es requerido'
      isValid = false
    }

    if (!gender) {
      validations.gender = 'El género es requerido'
      isValid = false
    }

    if (!dogs) {
      validations.dogs = 'Seleccione una raza'
      isValid = false
    }

    if (!isValid) {
      this.setState({ validations })
    }

    return isValid
  }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validateAll();

        if (!isValid) {
          return false
        }

        const values = JSON.stringify(this.state.values);
        alert(values);
      }
  
    render() {
      const {name, email, phone, gender, dogs, description} = this.state.values;
      const {name: nameValid, email: emailValid, gender: genderValid, dogs: dogsValid} = this.state.validations;
  
      return (
        <div>
          <h3>Bienvenido!!!</h3>
          <form className='form-style' onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Queremos conocerte</legend>
              <div>
                <label>Nombre:</label>
                  <input type="text" name="name" value={name} onChange={this.handleChange} />
                <div><p className = "warning">{nameValid}</p></div>
              </div>

              <div>
                <label>Email:</label>
                  <input type="email" name="email" value={email} onChange={this.handleChange} />
                <div><p className = "warning">{emailValid}</p></div>
              </div>

              <div>
                <label>Femenino</label>
                  <input type="radio" name="gender" value="F" onChange={this.handleChange} />
                <label>Masculilno</label>
                  <input type="radio" name="gender" value="M" onChange={this.handleChange} />
                <div><p className = "warning">{genderValid}</p></div>
              </div>
            </fieldset>

            <fieldset>
             <legend>Cuéntanos tus preferencias</legend>
              <div>
                <label>Raza Favorita</label>
                <select name = "dogs" value={dogs} onChange={this.handleChange}>
                    <option value="">--Elija una Opción--</option>
                    <option value="boxer">Boxer</option>
                    <option value="rottweiler">Rottweiler</option>
                    <option value="pug">Pug</option>
                    <option value="chihuahua">Chihuahua</option>
                    <option value="labrador">Labrador</option>
                    <option value="pitbull">Pitbull</option>
                    <option value="Husky">Husky</option>
                    <option value="pastor aleman">Pastor Aleman</option>
                    <option value="mestizo">Mestizo</option>
                    <option value="otro">Otro</option>
                </select>
                <div><p className = "warning">{dogsValid}</p></div>
              </div>
            </fieldset>

            <fieldset>
              <legend>¿Tienes Perrito?</legend>
              <div>
                <label>Platícanos sobre tu peludito:</label>
                <textarea name = "description" value={description} onChange={this.handleChange} ></textarea>
              </div>
            </fieldset>

            <fieldset>
              <legend>Permítenos contactarte</legend>
                <div>
                 <label>Teléfono:</label>
                   <input type="tel" name="phone" placeholder="+52" value={phone} onChange={this.handleChange} />
                </div>
            </fieldset>
            
            <button className='boton' type="submit">Enviar</button>
          </form>
  
          <div>
            <h2>Valores del formulario</h2>
            <p>{JSON.stringify(this.state.values)}</p>
          </div>
        </div>
      )
    }
  }

  export default Form;
 
      
     




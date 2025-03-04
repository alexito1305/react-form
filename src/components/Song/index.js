import React, {Component} from 'react';
import "./index.css";

class Song extends Component {
    constructor(props) {
      super(props)
      this.state = this.state = {
       values:[{
         artist: 'The Cranberries',
         title: 'Zombie',
         album: 'No Need to Argue',
         year: '1994'
        },
        {
          artist: 'The Cranberries',
          title: 'Salvation',
          album: 'To the Faithful Departed',
          year: '1996'
         },
         {
          artist: 'The Cranberries',
          title: 'Promises',
          album: 'Bury The Hatchet',
          year: '1999'
         },
      ]

      }
    }
     render() {
      
      return (
        <div>
          <div>
            <fieldset>
              <legend>
                <h2>Información de la canción</h2>
              </legend>
              <p>{JSON.stringify(this.state.values)}</p>
              </fieldset>
          </div>
        </div>
      )
    }
  }

export default Song;
 
       




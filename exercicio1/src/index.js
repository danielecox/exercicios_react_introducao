/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom"
import './styles.css'
import med1 from './images/medico1.jpg'

const App = () =>{
    const div1 = {margin: 'auto', width: 900, height: 200, backgroundColor: 'grey', padding: 100,
    borderRadius: 8, }
    const nomes={
        medico1: 'José da Silva',
        medico2: 'Maria da Silva',
        medico3: 'Jaqueline Mendes'
    }
       return( 
       <div style={div1}>
          <p htmlFor="nome" style={{display: 'block', marginBottom:10, textAlign: 'center', justifyContent: 'center'}}>Profissionais de Saúde:</p>

          <div style={{margin: 'auto',height:20, width: 700, backgroundColor: '#ffe8fc', padding: 100,borderRadius: 8}}>

         <table>
          <tr>
            <th>
              <div className="left">
                <img src={med1} style={{width:130, height:130, borderRadius: 8, margin: 10 }}/>  
                <h3>{nomes.medico1}</h3>
              </div>
            </th>

            <th>
              <div className="right">
                <img src={process.env.PUBLIC_URL + '/medico2.jpg'} style={{width:130, height:130, margin: 10, borderRadius: 8}} />
                <p>{nomes.medico2}</p>
              </div>
            </th>

            <th>
              <div className="middle" >
              <img src="https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?s=612x612"
                  style={{width:130, height:130, margin: 10, borderRadius: 8}}></img>
                  <p>{nomes.medico3}</p>
                  
              </div>
            </th>
          </tr>
          </table>
          </div>            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
    )

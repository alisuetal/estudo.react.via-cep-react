import './App.css';
import React, {useState} from 'react';

function App() {
     const [cep, setCep] = useState('');
     const [cepInfo, setCepInfo] = useState('');

     const checkCEP = () => {
          if(cep.length == 8){
               fetch(`https://viacep.com.br/ws/${cep}/json/`)
               .then(res => res.status == 200 ? res.json() : res = null).then(data => {
                    data != null ? setCepInfo(data["logradouro"] + ", " + data["bairro"] + ", " + data["localidade"]) : setCepInfo('');
               });
          }
     }

     return (
          <div className="App">
               <h1>Consultor de CEP:</h1>
               <p>{cepInfo != '' ? cepInfo : ''}</p>
               <input type="number" onChange={(e) => setCep(e.target.value)}></input><br></br>
               <button onClick={() => checkCEP()}><p>Consultar</p></button>
          </div>

     );
}

export default App;

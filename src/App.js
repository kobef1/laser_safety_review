import React, { useState } from "react";
import "./App.css";
import Icon from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const mathjs = require('mathjs');




function App() {
const[wavelength, setwavelength] = useState('');
const[duration, setduration] = useState('');
const [power, setpower] = useState('');
const [ID, setID] = useState('');
const [distance, setDistance] = useState('');
const [BD, setBD] = useState('');
const[AE, setAE] = useState('');
const[OD, setOD]= useState('');
const[MPE, setMPE]= useState('');
const[disable, setdisable]= useState('');


let calcAE = (event) => {
event.preventDefault();
setdisable('submitted');

let dfinal = (ID/1000) + ((2 * distance )* Math.tan((BD/1000) / 2));
console.log(dfinal)
let A = (((Math.PI)*(Math.pow(dfinal, 2))) / 4) ;

let AE= power / A ;

let outputdiameter = (2*distance)*(Math.tan((0.002)/ 2))+ID;

setOD(Math.round((1000*dfinal))+ " mm");


setAE(AE.toFixed(2).toLocaleString("en-US")+" W/m²");


}

if(wavelength >= 180 && wavelength < 302.5 && duration >= 1e-13 && duration < 1e-11){
  let MPE = 3*1e10
  console.log(MPE, "sdf")
 
}

else if(wavelength >= 180 && wavelength < 302.5 && duration >= 1e-11 && duration < 1e-9){
  let MPE = 3*1e10
  console.log(MPE)
 
}
else if(wavelength >= 180 && wavelength < 302.5 && duration >= 1e-9 && duration < 10){
  let MPE = 30

  console.log(MPE, "fkfkf")
 
}
else if(wavelength >= 180 && wavelength < 302.5 && duration >= 10 && duration < 1e2){
  let MPE = 30
 
 
}
else if(wavelength >= 180 && wavelength < 302.5 && duration >= 1e2 && duration < 3*1e4){
  let MPE = Math.pow(10, -0.2*(wavelength-295))
  let W = MPE/duration
  console.log(MPE)
  console.log(W)
 
}
else if(wavelength >= 302.5 && wavelength < 315 && duration >= 1e-13 && duration < 1e-9){
  let MPE = 3*1e10
  console.log(MPE)
  
}
else if(wavelength >= 302.5 && wavelength < 315 && duration >= 10 && duration < 3*1e4){
 //correction factor 
  
}

else if(wavelength >= 315 && wavelength < 400 && duration >= 1e-13 && duration < 1e-9){
  let MPE = 3*1e10
  console.log(MPE)
}

else if(wavelength >= 315 && wavelength < 400 && duration >= 1e-9 && duration < 10){
/////correctionfactor
}
else if(wavelength >= 315 && wavelength < 400 && duration >= 10 && duration < 3*1e4){
  /////correctionfactor
  let MPE = (Math.pow(10, 4))/duration
  console.log(MPE)
  }
else if(wavelength >= 400 && wavelength < 450 && duration >=1e-13 && duration < 1e-11 ){
  let MPE = 1*1e-3
  console.log(MPE)
}
else if(wavelength >= 400 && wavelength < 450 && duration >=1e-11 && duration < 5*1e-6 ){
  let MPE = 2*1e-3
  console.log(MPE)
}
else if(wavelength >= 400 && wavelength < 450 && duration >=5*1e-6 && duration < 10 ){
  let MPE= 18*(Math.pow(duration, -0.25))
  console.log(MPE)
}
else if(wavelength >= 400 && wavelength < 450 && duration >=10 && duration < 1e2 ){
  let MPE= 100
  console.log(MPE)
}
else if(wavelength >= 400 && wavelength < 450 && duration >=1e2 && duration < 3e4 ){
  let MPE= 1.0
  console.log(MPE)
}
else if(wavelength >= 450 && wavelength < 500 && duration >=1e-13 && duration < 1e-11 ){
  let MPE = 1*1e-3
  console.log(MPE)

}
else if(wavelength >= 450 && wavelength < 500 && duration >=1e-11 && duration < 5e-6 ){
  let MPE = 2*1e-3
  console.log(MPE)

}
else if(wavelength >= 450 && wavelength < 500 && duration >=5*1e-6 && duration < 10 ){
  let MPE= 18*(Math.pow(duration, -0.25))
  console.log(MPE)

}
else if(wavelength >= 450 && wavelength < 500 && duration >=10 && duration < 1e2 ){
/////

}
else if(wavelength >= 450 && wavelength < 500 && duration >=1e2 && duration < 3e4 ){
  /////
  
  }
else if(wavelength >= 500 && wavelength < 700 && duration >= 1e-13 && duration < 1e-11){
 let MPE = 1*1e-3

  console.log(MPE)

}
else if(wavelength >= 500 && wavelength < 700 && duration >= 1e-11 && duration < 5e-6){
  let MPE = 2*1e-3
 
   console.log(MPE)
 
 }
 
else if(wavelength >= 500 && wavelength < 700 && duration >= 51e-6 && duration < 10){
  let MPE= 18*(Math.pow(duration, -0.25))

  console.log("sadasd",MPE)

}
else if(wavelength >= 500 && wavelength < 700 && duration >= 10 && duration < 3e4){
  let MPE= 10

  console.log(MPE)

}

else if(wavelength >= 700 && wavelength < 1050 && duration >= 1e-13 && duration < 1e-11){
  let MPE = 1*1e-3
  console.log(MPE)

}
else if(wavelength >= 700 && wavelength < 1050 && duration >= 1e-9 && duration < 5e-6){
  let MPE = 2e-3 // correction factor
  console.log(MPE)

}
else if(wavelength >= 700 && wavelength < 1050 && duration >= 5e-6 && duration < 10){
  let MPE= 18*(Math.pow(duration, -0.25)) // C4 correction factor
  console.log(MPE)

}
else if(wavelength >= 700 && wavelength < 1050 && duration >= 10 && duration < 3e4){
  let MPE= 10 // C4 C7 correction factor
  console.log(MPE)

}
else if(wavelength >= 1050 && wavelength < 1400 && duration >= 1e-13 && duration < 1e-11){
  let MPE = 1e-3 // Correction factor c7
  console.log(MPE)

}
else if(wavelength >= 1050 && wavelength < 1400 && duration >= 1e-11 && duration < 13e-6){
  let MPE = 1e-3 // Correction factor c7
  console.log(MPE)

}
else if(wavelength >= 1050 && wavelength < 1400 && duration >= 13e-6 && duration < 10){
  let MPE = 90(Math.pow(duration, 0.25))// Correction factor c7
  console.log(MPE)

}
else if(wavelength >= 1050 && wavelength < 1400 && duration >= 10 && duration < 3e4){
  let MPE = 10// Correction factor c4 c7
  console.log(MPE)

}
else if(wavelength >= 1400 && wavelength < 1500 && duration >= 1e-13 && duration < 3e4){

}
else if(wavelength >= 1500 && wavelength < 1800){

}
else if(wavelength >= 1800 && wavelength < 2600){

}





return (
  
        

      <header className="App-header"><script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdeliver.net/npm/mathjax@3/es5/tex-svg.js"></script>
        <div class="mar">
          <h1>Laser Accessible Emission Calculator</h1>
        </div>
        <div class="row h-100 justify-content-center align-items-center mt">


          <div class="row ">
            <form class="label flex col-lg-6 mb-4 " onSubmit={calcAE}>
              <div class="mb-2">
                <div>
                  <h6>Wavelength (nm)<i class="bi bi-calculator"></i></h6>
                  <input class="form-control" type="number" value={power === 0 ? '0' : wavelength} onChange={(event) => setwavelength(parseFloat(event.target.value))}></input>

                </div>

                <div>
                  <h6>Exposure duration (s) </h6>
                  <input class="form-control" type="number" value={power === 0 ? '0' : duration} onChange={(event) => setduration(parseFloat(event.target.value))}></input>

                </div>


                <div>
                  <h6>Laser Power (W)  </h6>
                  <input class="form-control" type="number" value={power === 0 ? '0' : power} onChange={(event) => setpower(parseFloat(event.target.value))}></input>

                </div>
                <div>
                  <h6>Initial Beam Diameter (mm) </h6>
                  <input class="form-control" type="number" value={ID === 0 ? '0' : ID} onChange={(event) => setID(parseFloat(event.target.value))}></input>

                </div>

                <div>
                  <h6>Beam Divergence (mrad)</h6>
                  <input class="form-control" type="number" value={BD === 0 ? '0' : BD}
                    onChange={(event) => setBD(parseFloat(event.target.value))}></input>

                </div>


                <div>
                  <h6>Distance (m)  </h6>
                  <input class="form-control" type="number" value={distance === 0 ? '0' : distance}
                    onChange={(event) => setDistance(parseFloat(event.target.value))}></input>

                </div>
              </div>
              <div class=" row d-flex justify-content-center ">
                <button class=" btn btn-primary rounded px-5 btn-block" type="submit"
                  disabled={power.length === 0 ||
                    ID.length === 0 ||
                    distance.length === 0 ||
                    BD.length === 0 ||
                    disable === false}
                >Calculate
                </button>
              </div>
            </form>
            <div class="label row col-lg-6 mb-10 ">
          
              <div class="card-group h-25 ">
                <div class="card col-lg-3 ">
                  <h4 class="card-title">Output Beam Diameter </h4>
                  <div class="card-title">{OD} </div>
                </div>
                <div class="card col-lg-2  ">
                  <h4 class="card-title">MPE</h4>
                  <p class="card-title">{MPE}</p>
                </div>
              </div>
              <div class="card-group h-25 ">

                <div class="card col mt-2">
                  <h4 class="card-title">Accessible Emission </h4>
                  <p class="card-title">{AE}</p>
                </div>
              </div>
              <div class="card-group h-50 ">

                <div class="col h-50 s mt-2">

                </div>
              </div>
            </div>


          </div>
        </div>

      </header>

    

);
}


export default App;


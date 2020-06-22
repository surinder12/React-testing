import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Card from "./components/Card";
import Sdata from "./Sdata";
import './App.css';


let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";

if (curDate > 1 && curDate < 12) {
  greeting = "Good Morning"
}

// function ncard(val){
//   return(

//     <Card 
//     imgsrc={val.imgscr} alt="Card image cap"
//     title={val.title}
//     sname={val.sname}
//     />
//   );

// }



function App() {



  /**********up date time************** */
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] =useState(time);

const UpdateTime = () =>{
  const time = new Date().toLocaleTimeString();
  setCtime(time);
};

setInterval(UpdateTime, 1000 )



  /**********up date time************** */

  const state = useState();

  const [count, setCount]= useState(0);
  
 
  const IncNmb = () =>{

   setCount(count + 1);
    // console.log("clicked "+  Count++  )

  }
  return (
    <>
      <Header />

      <h1>Suriner</h1>


      <span>Time {greeting}</span>

      <div className="container">
        <div className="row">
          {/* {Sdata.map((val) => {

            return (

              <Card
                imgsrc={val.imgscr} alt="Card image cap"
                title={val.title}
                sname={val.sname}
              />
            );


          })} */}

      

          <div>
            <h1> {count}</h1>
            <button onClick={IncNmb}> Click On</button>

          </div>

          <h1>{time}</h1>
        </div>
      </div>

    </>
  );
}

export default App;

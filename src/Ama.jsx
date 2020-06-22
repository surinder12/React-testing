import React from "react";
import Sdata from "./Sdata";
import Card from "./Card"


const Ama = () =>{

    return(
        <Card
            key = {Sdata[1].id}
            imgsrc={Sdata[1].imgscr}
            sname={Sdata[1].sname}
            title={Sdata[1].title}
          />
    
    );



}

export default Ama;
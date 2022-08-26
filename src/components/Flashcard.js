/*import React, { useState } from "react"*/
import * as React from "react"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"

const Flashcard = ({frontSide, backSide}) => {

    const [isFront, changeFace] = React.useState(frontSide)

    function handleClick() {
        changeFace(oldState => {
            if(oldState === frontSide){
                return !oldState; 
            } else {
                return !oldState; 
            }
        });
    }

    const text = isFront ? frontSide : backSide
    const sideClass = isFront ? "flipdiv v" : "flipdiv v showBack"
    const classList = ` ${sideClass}`
    
    

    return (
            /*<div onClick={handleClick} className="card">
                        <div className={classList}>

                            <div className="card__face card__face--front">
                                <p className={sideClassDivFront} >{frontSide}</p>
                            </div>
                            <div className="card__face stack-top card__face--back">
                                <p className={sideClassDivBack}>{backSide}</p>
                            </div>

                        </div>
            </div>*/
          <div onClick={handleClick} className={classList}>
              <div className="front border">
                 <p>{frontSide}</p>
              </div>
              <div className="back border">
                 <p>{backSide}</p>
              </div>
         </div>
      )
      
}     


export default Flashcard

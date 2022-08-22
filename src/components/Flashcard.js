import React, { useState } from "react"

export default function Flashcard({frontSide, backSide}) {
    /*const [text, setText] = useState(frontSide)*/
    const [isFront, changeFace] = useState(frontSide)

    function handleClick() {
        changeFace(oldState => {
        /*changeFace(oldState => !oldState)*/
            
            if(oldState === frontSide){
                return !oldState; 
            } else {
                return !oldState; 
            }
        });
    }

    const text = isFront ? frontSide : backSide
    const sideClass = isFront ? "" : "is-flipped"
    const classList = `card__inner ${sideClass}`
    /*const isFlipped = isFront ? `${classList}` : `${classList} is-flipped`*/

    return (
                      /*<div className="flashcard grid-item m-1 border" onClick={handleClick}>
                        <div className={isFlipped}>
                                        <p>{text}</p>
                        </div>
                      </div>*/
        <div onClick={handleClick}className="card">

            <div className={classList}>

                <div className="card__face card__face--front">
                    <h2>Front</h2>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <img src="" alt="" />
                            <h2></h2>
                            <div className="card__body">
                                <h3>Back</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      )
      
}     

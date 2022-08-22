import React from "react"
import Layout from "../components/Layout"
import Flashcard from "../components/Flashcard"
/*import Bounce from "../components/Bounce"*/
import "../styles/flashcard.css"
import fs from "fs"



import { Helmet } from "react-helmet"
import { withPrefix/*, Link*/ } from "gatsby"

export default function Geology () {
    return (
                  <Layout>
                      <section className="grid-container p-0">
                         <Flashcard frontSide="hola" backSide=" Lorem quibusdam delectus dignissimos culpa minima nihil cumque aperiam quia Et repudiandae necessitatibus culpa quis reprehenderit Omnis iure sed perspiciatis mollitia reprehenderit Quaeratste? Provident ipsam odio velit adipisci dolore? Culpa ullam quos similique incidunt expedita repellat quibusdam? At vel tenetur consequatur fuga mollitia! Ducimus quo alias velit ad facere Reprehenderit ipsam at aperiam nesciunt " />   
                         <Flashcard frontSide="12 * 12" backSide="144" />   
                         <Flashcard frontSide="abc" backSide="xzy" />   
                      </section>
                      <Helmet>
                           /*<script src={withPrefix('flip-card.js')} type="text/javascript" />*/
                         <script src={withPrefix('scriptToReadFile.js')} type="text/javascript" />
                      </Helmet>
                  </Layout>
                  
      )
      
}     

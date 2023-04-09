import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      {/* <img src={logoSrc} alt={logoAlt} /> */}
      <h6><span style={{color:"#A020F0"}}>N</span>atal Nine IT Solutions</h6>
      <p>{text}</p>
    </Div>
  )
}

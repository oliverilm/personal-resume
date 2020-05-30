import React from "react"
import details from "../PersonalDetails.json"
import "./styles.css"

const customStyles = {
  image: {
    width: "21vw",
    height:"21vw",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginLeft: "5vh",
    borderRadius: "50%",
  }
}

/**
 * Display main information from collected json.
 *
 * @returns {DOMElement} - Header containing image and main description.
 * @constructor
 */
const Header = () => {
  const { images, main } = details
  const [ imageArray ] = React.useState(Object.values(images))

  return (
    <div className={"root"}>
       <img src={imageArray[0]} alt={"not found"} style={customStyles.image}/>
      <div>
        <h1 className={"headerInformation"}>{main.firstMame} {main.lastName}</h1>
      </div>
    </div>
  );
}

export default Header;
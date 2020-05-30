import React from "react"
import details from "../PersonalDetails.json"
import CrossfadeImage from "react-crossfade-image";
import "./styles.css"

const customStyles = {
  image: {
    width: "20vw",
    height:"20vw",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "10px",
    marginLeft: "10%",
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
  let [ imageIndex, setImageIndex ] = React.useState(0)

  React.useEffect(() =>{
    setInterval(() => {
      setImageIndex(imageIndex === 1 ? 0 : 1)
    }, 10000)
  })

  return (
    <div className={"root"}>
      <div>
        <CrossfadeImage
          style={customStyles.image}
          src={imageArray[imageIndex]}
          duration={1000}
          timingFunction={"ease-out"}
        />
      </div>
      <div>
        <h1 className={"headerInformation"}>{main.firstMame} {main.lastName}</h1>
      </div>
    </div>
  );
}

export default Header;
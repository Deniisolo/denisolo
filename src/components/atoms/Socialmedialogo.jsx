import "./Socialmedialogo.css"


export function Socialmedialogo(props) {
  return (
    <a className="SocialmedialogoButton" href={props.urlSocialMedia} target="_blank" rel="noopener noreferrer"> {props.img} </a>
  )
}
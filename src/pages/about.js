import {Link} from "react-router-dom"

function About(props) {
    console.log(props.dogName)
  return (
    <div className="App">
        About Me
        <Link to="/ski">
            {props.dogName}
            </Link>
    </div>
  );
}

export default About;
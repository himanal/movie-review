import { Link } from "react-router-dom"
import Card from "../component/shard/card"

function About() {
  return (
    <Card>
        <div> 
            about page
        </div>
        

        <Link className="tex-blue-300" to="/"> back to main page </Link>
        
    </Card>
  )
}

export default About
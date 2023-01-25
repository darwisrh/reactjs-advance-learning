import { Link } from "react-router-dom";
import WithAuth from "../HOC/withAuth";

const list = [
  {
    id: 1,
    name: 'Makhluk'
  },
  {
    id: 2,
    name: 'Mike'
  }
]

const Home = ({auth}) => {

  console.log(auth)

  return (
    <>
      {
        list.map(i => (
          <div key={i.id}>
            <h2>Name : {i.name}</h2>
          </div>
        ))
      }
      <Link to="/contact">Contact</Link>
    </>
  )
}

export default WithAuth(Home)
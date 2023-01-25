## Higher Order Component
- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

- Higher Order Component adalah teknik lanjutan untuk pemakaian ulang pada logika komponen. HOC itu bukan bagian dari React API.

###  A higher-order component is a function that takes a component and returns a new component.

- First make new file `WithAuth.js`
> File: `HOC/WithAuth.js`

And write this code :

```javascript
const WithAuth = (WrappedCompt) => {

  const auth = {
    email: 'mike@gmail.com',
    password: '1234'
  }

  return () => {
    return (
      <div>
        <WrappedCompt
        auth={auth}
        />
      </div>
    )
  }
}

export default WithAuth
```
We're gonna use this code as the Higher-Order Component.

- And then make some new component like `Home.js`
> File: `pages/Home.js`

And write some code inside it and don't forget to import the HOC that we made before `WithAuth.js` :

```javascript
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
```

So the Higher-Order Component is like component that we can use to parsing the same data or function to component that we like to pass.
import WithAuth from "../HOC/withAuth"

const Contact = ({auth}) => {

  console.log(auth)

  return (
    <>
      <h2>Ini Contact</h2>
    </>
  )
}

export default WithAuth(Contact)


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
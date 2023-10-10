function PageNotFound () {
    const aStyle={
      color: 'white',
      textDecoration: 'underline'
    }
    return (
      <>
        <h1>404 Page not found</h1>
        <p>Sorry this page is not available</p>
        <a style={aStyle} href='/'>Go back to landing page</a>
      </>
    )
  }
  
import React from "react";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
 
        
return (
<>
  <Helmet>
  <title>Page 404, John Doe</title>
  <meta name="robots" content="noindex, nofollow" />
</Helmet>
  <div className="container d-flex">
    <h1>Cette page n'existe pas</h1>
  </div>
  </>
)
}

export default ErrorPage
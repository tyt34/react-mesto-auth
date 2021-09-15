import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (data) => {
  const Component = () => {
    return (
      data.component.props.children
    )
  }

  return (
    <Route>
      {
        () => data.loggedIn === true ? <Component {...data} /> : <Redirect to="/sign-in" />
      }
    </Route>
  )
}

export default ProtectedRoute;

import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwoWayBinding from './form-handling/TwoWayBinding'
import UncontrolledForm from './form-handling/UncontrolledForm'
import ControlledForm from './form-handling/ControlledForm'
import Form from './formhandle-project/form'
import ReactHookForm from './react-hook-form-project/ReactHookForm'
import { BrowserRouter, Router, Route } from 'react-router-dom';
function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route path='/' element={<Form />} />
          <Route path='/reacthookform' element={<ReactHookForm />} />

        </Router>
      </BrowserRouter> */}

      {/* <TwoWayBinding /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <Form /> */}
      <ReactHookForm />
    </>
  )
}

export default App;

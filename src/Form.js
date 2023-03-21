import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'

export default function Form() {

   const [values, setValues] = useState({ firstName: "", lastName: "", email: "" })

   const [submitted, setSubmitted] = useState(false)

   const [valid, setValid] = useState(false)

   const handleFirstNameInputChange = (e) => { setValues({ ...values, firstName: e.target.value }) }

   const handleLastNameInputChange = (e) => { setValues({ ...values, lastName: e.target.value }) }

   const handleemailInputChange = (e) => { setValues({ ...values, email: e.target.value }) }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (values.firstName && values.lastName && values.email) { setValid(true) }
      setSubmitted(true)
   }
   return (
      <>
         <Header />
         <Container>
            <div className="form-container">
               <form className="register-form" onSubmit={handleSubmit}>

                  {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}

                  <input id="first-name" value={values.firstName} className="form-field" type="text" placeholder="First Name" name="firstName" onChange={handleFirstNameInputChange} />

                  {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}

                  <input id="last-name" value={values.lastName} className="form-field" type="text" placeholder="Last Name" name="lastName" onChange={handleLastNameInputChange} />

                  {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}

                  <input id="email" value={values.email} className="form-field" type="text" placeholder="Email" name="email" onChange={handleemailInputChange} />

                  {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}

                  <button className="form-field" type="submit" >Register
                  </button>
               </form>
            </div>
         </Container>
      </>
   )
}

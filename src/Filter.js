import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
import Header from './Header'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default function Filter() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <Header />
      <Container>

        <input type="text" placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} />
        {
          JSONDATA.filter((val) => {
            if (searchTerm === '') {
              return val;
            }
            else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="user" key={key} >
                <p>{val.first_name}</p>
              </div>
            )
          })
        }
      </Container>
    </>
  )
}

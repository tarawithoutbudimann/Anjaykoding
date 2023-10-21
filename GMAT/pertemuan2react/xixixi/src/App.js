'use client';
import './App.css';
import { Button, Navbar } from 'flowbite-react';
import { useState } from 'react';

function App() {
  const[hitungan, setHitungan] = useState(0);
  return (
    <>
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tamara Sashikirana</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Contact Tara!</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About me</Navbar.Link>
        <Navbar.Link href="#">Portfolio</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">EN</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div>
      <button 
        className="m-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded"
        onClick = {() => setHitungan (hitungan + 1)}> Counter : {hitungan}
      </button>
    </div>
    </>
  );
}

export default App;

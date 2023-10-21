'use client';
import './App.css';
import { Button, Navbar } from 'flowbite-react';
import { useState } from 'react';

function Penghitung(){
  const[hitungan, setHitungan] = useState(0);
  return(
    <div>
      <button 
        className="m-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded shadow"
        onClick = {() => setHitungan (hitungan + 1)}> Counter : {hitungan}
      </button>
    </div>
  )
}
function App() {
  const [daftar, setDaftar] = useState([1, 2, 3]);
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
    {/* untuk memanggil fungsi penghitungnya biar terpisah satu sama lain dan gaperlu dicopas satu-satu */}
    <Penghitung/>
    <Penghitung/>
    <Penghitung/>
    {/* untuk membuat array  */}
    <div>
      <button onClick={() => setDaftar([...daftar, 1])}>Tambah angka 1</button>
      <br></br>
      <button onClick={() => setDaftar([...daftar, 2])}>Tambah angka 2</button>
      <br></br>
      {daftar.join(",")}
      <br></br>
    </div>

    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="container">
      <div className="form-border">
        <h2 className="label text-center">Form Pembelian Buah</h2>
        <form action="">
          <table>
            <tr>
              <td width="200px" className="label">Nama Pelanggan</td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td width="200px" className="label">Daftar Item</td>
              <td>
                <input type="checkbox" id="semangka" name="semangka"/><label for="semangka">Semangka</label><br></br>
                <input type="checkbox" id="jeruk" name="jeruk"/><label for="jeruk">Jeruk</label><br></br>
                <input type="checkbox" id="nanas" name="nanas"/><label for="nanas">Nanas</label><br></br>
                <input type="checkbox" id="salak" name="salak"/><label for="salak">Salak</label><br></br>
                <input type="checkbox" id="anggur" name="anggur"/><label for="anggur">Anggur</label>
              </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit">Kirim</button>
                </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;

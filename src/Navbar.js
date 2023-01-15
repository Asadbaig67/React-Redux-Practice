import React from 'react'
import { actionCreator } from './state/index'
import { useDispatch,useSelector } from 'react-redux'


const Navbar = () => {
   const dispatch = useDispatch();
   const amount = useSelector((state) => state.amount);
   const mode = useSelector((state) => state.mode);
   const handleModes = () => {
      if (mode === 'dark') {
         dispatch(actionCreator.lightmode('light'));
         document.body.style.backgroundColor = "white";
      }
      else {
         dispatch(actionCreator.darkmode('dark'));
         document.body.style.backgroundColor = "black";

      }
   }
   return (
      <nav className={`navbar navbar-expand-lg bg-${mode}`}>
         <div className="container-fluid">
            <a className={`navbar-brand text-${mode === 'light' ? 'dark' : 'light'}`} href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <a className={`nav-link active text-${mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} href="/">About</a>
                  </li>
               </ul>
               <form className="d-flex" role="search">
                  <button className={`btn btn-${mode === 'light' ? 'dark' : 'light'} me-3`}>Balance : {amount}</button>
                  <div className="form-check form-switch mx-2 my-auto">
                     <input className="form-check-input" onClick={handleModes} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                     <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'} `} htmlFor="flexSwitchCheckDefault">Enable {mode === 'light' ? 'dark' : 'light'} Mode</label>
                  </div>
               </form>
            </div>
         </div>
      </nav>
   )
}

export default Navbar

import React from 'react';
import './App.css';
import 'bootstrap/ dist / css / bootstrap.min.css';


function App() {
  return (
    <form className="form-inline">
          <label className="sr-only" for="inlineFormInputName1">Name</label>
          <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Full Name"/>


          <label className="sr-only" for="inlineFormInputGroupUsername3">E-mail</label>
          <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
              </div>
              <input type="text" className="form-control" id="inlineFormInputGroupUsername1" placeholder="E-mail"/>
          </div>



          <div className="form-check mb-2 mr-sm-2">
              <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
              <label className="form-check-label" for="inlineFormCheck">Remember me</label>
          </div>


          <div className="form-check mb-3 mr-sm-3">
              <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
              <label className="form-check-label" for="inlineFormCheck">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary mb-2">Sign in</button>
          
          
      </form>
    ); 
}

export default App;

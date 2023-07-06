import { useState } from "react";
import "./App.scss";
import Button from "./components/button";
import { Form, InputPass } from "./components/form";

function App() {
  const [inputValue, setInputValue] = useState();
  const [inputPass, setInputPass] = useState();

  console.log(inputValue);
  console.log(inputPass);

  return (
    <div className="App">
      <div className="container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>
      <div className="col-container">
        <div className="col-1">col-1</div>
        <div className="col-2">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
        <div className="col-1">col-1</div>
      </div>
      <div className="btn-contain">
        <Button label="go to" icon iconLeft outline size="xl" />
        <Button label="go to" icon iconLeft outline size="md" />
        <Button label="go to" icon iconLeft outline size="sm" />
      </div>
      <div className="form-contain">
        <Form
          id={"name"}
          name="name"
          placeholder="Your name"
          label={"name"}
          handleChange={setInputValue}
        />
        <InputPass
          id={"password"}
          type="password"
          name="password"
          placeholder="Your Password"
          label={"password"}
          handleChange={setInputPass}
        />
      </div>

      {/* <div className="col-container">
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
        <div className="col-xs-1">col-2</div>
      </div>
      <div className="col-container">
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
        <div className="col-sm-1">col-3</div>
      </div>
      <div className="col-container">
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
        <div className="col-md-1">col-4</div>
      </div> */}
      {/* <div className="col-container">
        <div className="col-5"></div>
      </div>
      <div className="col-container">
        <div className="col-6"></div>
      </div>
      <div className="col-container">
        <div className="col-7"></div>
      </div>
      <div className="col-container">
        <div className="col-8"></div>
      </div>
      <div className="col-container">
        <div className="col-9"></div>
      </div>
      <div className="col-container">
        <div className="col-10"></div>
      </div>
      <div className="col-container">
        <div className="col-11"></div>
      </div>
      <div className="col-container">
        <div className="col-12"></div>
      </div> */}
    </div>
  );
}

export default App;

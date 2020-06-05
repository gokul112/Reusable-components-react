import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Modal from './Modal/Modal';

function App() {
  const data = [
    {
      id: "1",
      name: "One"
    },
    {
      id: "2",
      name: "Two"
    },
    {
      id: "3",
      name: "Three"
    },
    {
      id: "4",
      name: "Four"
    }
  ];

  function handleChange(event){
    console.log(event);
  }
  function selectChange(event){
    console.log(event);
  }
  return (
    <div className="App">
      <div>
        <Button variant="warning" size={"xs"} label="xtra small Button"/>
        <Button variant="danger" size={"sm"} label="Small Button" />
        <Button variant="default" size={"lg"} label="Disabled Button" disable="true"/>
        <Button variant="primary" size={"lg"} label="Larger Button"/>
        <Button variant="secondary" size={"lg"} label="Secondary Button"/>
        <Button variant="success" size={"lg"} label="Success Button"/>
        <Button variant="warning" size={"lg"} label="Warning Button"/>
        <Button variant="info" size={"lg"} label="Info Button"/>
</div>
<div>
        <Button variant="default" size={"lg"} outline="outline-default" label="Default Button" />
        <Button variant="primary" size={"lg"} outline="outline-primary" label="Disabled Larger Button" disable={"true"}/>
        <Button variant="secondary" size={"lg"} outline="outline-secondary" label="Secondary Button"/>
        <Button variant="success" size={"lg"} outline="outline-success" label="Success Button"/>
        <Button variant="warning" size={"lg"} outline="outline-warning" label="Warning Button"/>
        <Button variant="info" size={"lg"} outline="outline-info" label="Info Button"/>

</div>
<div className="border border-dark p-20 form-in">
  <Input type="email" onChange={handleChange} placeholder="Enter E-mail" class={"md-4"} />
  <Input type="text" onChange={handleChange}  placeholder="Enter text" class={"md-4"}  />
  <Input type="password" onChange={handleChange} placeholder="Enter password" class={"md-4"}   />
  <Input type="number" onChange={handleChange} placeholder="Enter number" class={"md-4"}  />
</div>

<div className="border border-dark p-20 form-in">
  <Select data={data} onSelectChange={selectChange}  className={"md-4"} />
</div>
<div>
  <Modal show={true} message="hello,sample modal"><p>THIS IS A MODAL</p></Modal>
</div>

    </div>
  );
}

export default App;

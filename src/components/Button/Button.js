import React,{useState} from 'react'

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [label] = useState(props.label);
  const [disable] = useState(props.disable);
  const [outline] = useState(props.outline);
  return (
    <button className={`btn-${variant} btn-${size} btn-${outline}`}  label = {label} disabled={disable}>{label}</button>
  );
}

export default Button

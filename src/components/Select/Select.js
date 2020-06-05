import React,{useState} from 'react'

function Select(props) {

  const [data] = useState(props.data);
  const [selectedData, updateSelectedData] = useState("");
  const [classSize] = useState(props.className)
 
  function handleChange(event){
    updateSelectedData(event.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  }

  let options = data.map(data => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

    return (
        <div>
            <select name="customSearch" className={`col-${classSize} form-control custom-search-select`} onChange={handleChange}>
                <option>Select Item</option>
                {options}
            </select>
            
        </div>
    )
}

export default Select

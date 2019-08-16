/* eslint-disable react/destructuring-assignment */
import React from 'react';

function AddValue(props) {
  return (
    <div>
      <h2>Add Value</h2>
      <form>
        {'Cost: $'}
        <input type="number" name="cost" onChange={props.handleFormChange}/>
        {'Description:'}
        <input type="text" name="desc" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddValue;

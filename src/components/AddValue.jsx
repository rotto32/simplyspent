/* eslint-disable react/destructuring-assignment */
import React from 'react';

function AddValue(props) {
  return (
    <div>
      <h2>Add Value</h2>
      <form onSubmit={props.handleFormSubmit}>
        {"Cost: $"}
        <input type="number" name="cost" onChange={props.handleFormChange} />
        {"Description:"}
        <input type="text" name="desc" onChange={props.handleFormChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddValue;

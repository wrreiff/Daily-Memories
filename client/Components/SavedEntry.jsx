import * as React from 'react';

export default function SavedEntry(props) {
  // const {dateId, id, entries, setEntries} = props;
  const deleteEntry = () => {
    fetch('/deleteEntry', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(props.dateId)
    })
    .then((res) => {
      props.syncEntries()
    })
  }

  const editEntry = () => {

  }
  // console.log(props.dateId)
  return(
    <span>
      <p>{props.text}</p>
      <button type="button" onClick={() => editEntry(dateId, id, entries, setEntries)}>Edit</button>
      <button type="button" onClick={() => deleteEntry()}>Delete</button>
    </span>
  )
}
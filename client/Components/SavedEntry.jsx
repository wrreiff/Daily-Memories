import * as React from 'react';

export default function SavedEntry(props) {
  // const {dateId, id, entries, setEntries} = props;
  const deleteEntry = () => {
    console.log(props._id)
    fetch(`/diary/delete/${props._id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
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
      <p>{props.diary}</p>
      <button type="button" onClick={() => editEntry(dateId, id, entries, setEntries)}>Edit</button>
      <button type="button" onClick={() => deleteEntry()}>Delete</button>
    </span>
  )
}
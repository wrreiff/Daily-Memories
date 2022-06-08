import * as React from 'react';

export default function Entry(props) {
  const postDiary = (event) => {
    console.log(event)
    console.log(event.target[0].value)
    fetch("/postEntry", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    }).then(res => {
      console.log("Request complete! response:", res);
    });
    event.preventDefault()
  }
  return (
    <form onSubmit={postDiary}>
      <label for="diaryEntry">Diary Entry {props.id}:</label><br/>
      <input type="text" id="diaryEntryText" name="diaryEntryText"/>
      <input type="submit" value="Submit"/>
    </form>
  )
}
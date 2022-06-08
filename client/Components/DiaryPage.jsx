import * as React from 'react';
import Container from '@mui/material/Container';
import DatePicker from './BasicDatePicker.jsx';
import Entry from './Entry.jsx';
import SavedEntry from './SavedEntry.jsx'

function DiaryPage() {
  const [dateValue, setDateValue] = React.useState(new Date());
  const [entries, setEntries] = React.useState([])
  React.useEffect(() => {fetch('/diary/get')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setEntries(data)
    })
  }, [])

  const syncEntries = () => {
    fetch('/diary/get')
    .then((response) => response.json())
    .then((data) => {
      setEntries(data)
    })
  }
  
  let entriesToRender = [];
  entries.forEach((entry, index) => {
    entriesToRender.push(<SavedEntry 
    id={index + 1} 
    time={entry.time}
    _id={entry._id}
    key={entry._id}
    diary={entry.diary}
    setEntries={setEntries}
    entries={entries}
    syncEntries={syncEntries}
    />
  )})
  for (let i = entriesToRender.length + 1; i < 4; i++) {
    entriesToRender.push(<Entry id={i} 
      key={String(dateValue.getFullYear()) + String(dateValue.getMonth()) + String(dateValue.getDate()) + String(i)}
      date={String(dateValue.getFullYear()) + String(dateValue.getMonth()) + String(dateValue.getDate())}
      entries={entries}
      syncEntries={syncEntries}
    />)
  }
  return (
    <Container class="DiaryPage" maxWidth="sm">
      <h1>My Happy Thoughts</h1>
      <DatePicker dateValue={dateValue} setDateValue={setDateValue}/>
      {entriesToRender}
    </Container>
  );
}

export default DiaryPage;
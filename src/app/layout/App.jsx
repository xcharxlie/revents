import React, {useState} from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  // const title = React.createElement('h1', {}, 'Revents no JSX');
  // const div = React.createElement('div',{className:'App'}, title);
  const [formOpen,setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true);
  }

  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
}
  return (
    <div>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className ='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}/>
      </Container>
      
      {/* //semantic css button
      <button className='ui icon red button'>
        <i className='user icon'/>CSS Button
      </button>
      //semantic react button
      <Button icon= 'user' content ='react' color='green'></Button> */}
    </div>
  );
}

export default App;

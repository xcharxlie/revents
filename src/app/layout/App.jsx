import React from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {Route} from 'react-router-dom'; 
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm'
import HomePage from '../../features/home/HomePage';


function App() {
  // const title = React.createElement('h1', {}, 'Revents no JSX');
  // const div = React.createElement('div',{className:'App'}, title);
  // const [formOpen,setFormOpen] = useState(false);
  // const [selectedEvent, setSelectedEvent] = useState(null);

//   function handleCreateFormOpen(){
//     setSelectedEvent(null);
//     setFormOpen(true);
//   }

//   function handleSelectEvent(event){
//     setSelectedEvent(event);
//     setFormOpen(true);
// }
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path={'/(.+)'} render={()=>(
        <div>
        <NavBar />
        <Container className ='main'>
          {/* <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}/> */}
          
          <Route exact path='/events' component={EventDashboard}/>
          <Route exact path='/events/:id' component={EventDetailedPage}/>
          <Route exact path={['/createEvent', '/manage/:id']} component={EventForm}/>
        </Container>
        </div>

      )} />
      
      
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

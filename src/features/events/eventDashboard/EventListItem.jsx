import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, List,Item, Segment,Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({event, selectEvent,deleteEvent}){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title}/>
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{event.date}
                    <Icon name="marker"/>{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee =>{
                        return <EventListAttendee attendee={attendee.name} key={attendee.id}/>
                    }
                    )}
                    
                    
                </List>
            </Segment>
            <Segment clearing>
                <div>
                    <b>{event.description}</b> 
                </div>
            {/* </Segment>
            <Segment> */}
                <Button as={Link} to={`/events/${event.id}`} size = "tiny" color = "orange" content="View" floated="right" />
                <Button onClick={()=>deleteEvent(event.id)}size = "tiny" color = "red" content="Delete" floated="right" />
            </Segment>
        </Segment.Group>
    );
}
import React,{useState} from 'react';
import { Form ,Segment,Header, Button} from 'semantic-ui-react';
import cuid from 'cuid';

export default function EventForm({setFormOpen, setEvents, createEvent,selectedEvent,updateEvent}){
    const initialValues = selectedEvent ?? {
            title:'',
            category:'',
            description:'',
            city:'',
            venue:'',
            date:'',

    };

    const[values,setValues] = useState(initialValues);
    // const[title,setTitle] = useState('');
    // function handleFormSubmit(){
    //     console.log(title);
    // }

    function handleInputChange(e){
        const {name,value} = e.target;
        setValues({...values, [name]: value});
    }
    return(
        <Segment.Group>
            <Segment>
                <Header content = {selectedEvent? "Edit the event":"Create new event"}/>
                <Form>
                {/* onSubmit={handleFormSubmit}> */}
                    <Form.Field>
                        <input type="text" placeholder="Event title" 
                            name = 'title'
                            //value = {title}
                            //onChange = {e=>setTitle(e.target.value)}
                            value={values.title} 
                            onChange = {(e) => handleInputChange(e)}  
                        />
                    </Form.Field> 
                    <Form.Field>
                        <input type="text" placeholder="Category"
                            name = 'category'
                            //value = {title}
                            //onChange = {e=>setTitle(e.target.value)}
                            value={values.category} 
                            onChange = {(e) => handleInputChange(e)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="Description"
                            name = 'description'
                            //value = {title}
                            //onChange = {e=>setTitle(e.target.value)}
                            value={values.description} 
                            onChange = {(e) => handleInputChange(e)}/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="City"
                            name = 'city'
                            //value = {title}
                            //onChange = {e=>setTitle(e.target.value)}
                            value={values.city} 
                            onChange = {(e) => handleInputChange(e)}/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="Venue"
                            name = 'venue'
                            //value = {title}
                            //onChange = {e=>setTitle(e.target.value)}
                            value={values.venue} 
                            onChange = {(e) => handleInputChange(e)}/>
                    </Form.Field>
                    <Form.Field>
                        <input type="date" placeholder="Date"
                            name = 'date'
                            //value = {title}
                            //onChange = {e=>setTitle(e.target.value)}
                            value={values.date} 
                            onChange = {(e) => handleInputChange(e)}/>
                    </Form.Field>
                </Form>
            </Segment>
            <Segment>
                <Button type ="submit"  onClick = {() => { selectedEvent ? updateEvent({...selectedEvent, ...values}):createEvent({...values, id:cuid(), hostedBy: 'Bob', attendees:[], hostPhotoURL: '/assets/user.png'});
                    setFormOpen(false);
                }} content="create" color="orange" />
                <Button onClick = {()=>
                    setFormOpen(false) 
                }type ="submit"  content="cancel" color="red" floated ="right" />
            </Segment>
        </Segment.Group>
    )
}
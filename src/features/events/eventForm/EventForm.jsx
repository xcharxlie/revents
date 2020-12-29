import React from 'react';
import { Form ,Segment,Header, Button} from 'semantic-ui-react';


export default function EventForm({setFormOpen}){
    return(
        <Segment.Group>
            <Segment>
                <Header content = "Create new event"/>
                <Form>
                    <Form.Field>
                        <input type="text" placeholder="Event title"/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="Category"/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="Description"/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="City"/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="Venue"/>
                    </Form.Field>
                    <Form.Field>
                        <input type="date" placeholder="Date"/>
                    </Form.Field>
                </Form>
            </Segment>
            <Segment>
                <Button type ="submit"  content="create" color="orange" />
                <Button onClick = {()=>
                    setFormOpen(false) 
                }type ="submit"  content="cancel" color="red" floated ="right" />
            </Segment>
        </Segment.Group>
    )
}
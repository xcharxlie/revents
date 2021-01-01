import React from 'react';
import {Segment, Container, Header, Image,Button, Icon} from 'semantic-ui-react'

export default function Homepage(props){
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image src='/assets/logo.png' style={{marginBottom:12,marginRight:8}}/>
                    Re-vents
                </Header>
                <Button onClick={() => props.history.push('/events')} size='huge' inverted color='orange'> 
                    Get started
                    <Icon name="right arrow" inverted />
                </Button>
            </Container>
        </Segment>
    )
}
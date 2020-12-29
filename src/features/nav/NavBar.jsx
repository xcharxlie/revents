import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar({setFormOpen}){
    return (
        <Menu inverted fixed='top'> 
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item name = 'Events' />
                <Menu.Item>
                    <Button  onClick ={()=>setFormOpen(true)}content='Create Event' color = 'orange'></Button>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button inverted content='Login' color = 'orange'></Button>
                    <Button inverted content='Register' style={{marginLeft:'0.5em'}} color = 'orange'></Button>
                </Menu.Item>
                
            </Container>
        </Menu>
    )
}
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function NavBar({setFormOpen}){
    const history = useHistory();
    const[authenticated,setAuthenticated] = useState(false);

    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }
    return (
        <Menu inverted fixed='top'> 
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name = 'Events' />
                {authenticated && 
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button  onClick ={()=>setFormOpen(true)}content='Create Event' color = 'orange'></Button>
                </Menu.Item>}

                {authenticated? <SignedInMenu signOut={handleSignOut}/>:<SignedOutMenu setAuthenticated={setAuthenticated}/>}
                

                {/* <Menu.Item position="right">
                    <Button inverted content='Login' color = 'orange'></Button>
                    <Button inverted content='Register' style={{marginLeft:'0.5em'}} color = 'orange'></Button>
                </Menu.Item> */}
                
            </Container>
        </Menu>
    )
}
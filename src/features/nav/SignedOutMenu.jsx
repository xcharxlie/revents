import React from 'react';
import {Menu, Button } from 'semantic-ui-react';

export default function SignedOutMenus({setAuthenticated}){
    return (
    <Menu.Item position='right'>
       <Button onClick={()=>setAuthenticated(true)} inverted content='Login' color = 'orange'></Button>
        <Button inverted content='Register' style={{marginLeft:'0.5em'}} color = 'orange'></Button>
    </Menu.Item>
    );
}

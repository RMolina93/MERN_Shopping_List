import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import {
    Collapse,           //Responsive hamburguer menu
    NavbarToggler,      
    Navbar,             // Actual NavBar
    NavbarBrand,        // Object for brand in navbar
    Nav,                // Wrapper of links
    NavItem,            // Item of Navbar
    NavLink,            // Links of Navbar
    Container,           // Bootstrap container for putting everything in the middle
    NavbarText

} from 'reactstrap';

// Now we generate a class child using as parent child the class Component

class AppNavbar extends Component {

    state = {           // Here we indicate the state of our component at the moment of the rendering. Is the attributes of the object
        isOpen: false
    }

    //Also AppNavBar has a function called toogle, which is an arrow function
    // We want when we call it, to change the state of the component.

    //With this we call the component, and we can access the attributes. To change them we use the function setState in the object this (itself.)
    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
    })
    };

    //Now we want to create the render of the NavBar by using the imported components.

    //The attribute dark means that the text would be light. expand SM means that if the screen is small, kick in the hamburguer menu. mb-5 means margin body 5.
    render() {
        return (    
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">  
                <Container>
                    <NavbarBrand href="/"> Shopping List </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}> 
                        <FontAwesomeIcon icon={faCoffee} />
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/RMolina93">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavbarText>
                                    Holi!
                                </NavbarText>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Container>
            </Navbar>
        </div>
        );

    }
}


//This is a way from ES6 to export the object.
export default AppNavbar;
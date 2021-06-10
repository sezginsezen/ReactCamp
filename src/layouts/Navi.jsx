import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignedOut() {
        setIsAuthenticated(false)
    }

    function handleSignedIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignedOut} bisey="1" /> : <SignedOut signIn={handleSignedIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

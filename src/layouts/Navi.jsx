import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

export default function Navi() {

    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignedOut() {
        setIsAuthenticated(false)
        history.push("/")
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
                        {cartItems.length > 0 && <CartSummary />}
                        {isAuthenticated ? <SignedIn signOut={handleSignedOut} bisey="1" /> : <SignedOut signIn={handleSignedIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

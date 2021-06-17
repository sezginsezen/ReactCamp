import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartitem) => (
                            <Dropdown.Item>
                                {cartitem.product.productName}
                                <Label>
                                    {cartitem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }


                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div >
    )
}

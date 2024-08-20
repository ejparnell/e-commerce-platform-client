import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { cottanCandy } from '../../themes/cottonCandy'

const activeStyle = {
    color: `${cottanCandy.highlight}`,
    textDecoration: 'none'
}

const unActiveStyle = {
    color: `${cottanCandy.fontDark}`,
    textDecoration: 'none'
}

const Nav = styled.nav`
  background-color: ${cottanCandy.primaryLight};
  color: ${cottanCandy.fontDark};
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: space-around;
`

export default function Navbar({ user }) {
    return (
        <header>
            <Nav>
                <NavLink style={({ isActive }) => {
                    return isActive ? activeStyle : unActiveStyle
                }} to="/">Home</NavLink>
                <NavLink style={({ isActive }) => {
                    return isActive ? activeStyle : unActiveStyle
                }} to="/shop">Shop</NavLink>
                <NavLink style={({ isActive }) => {
                    return isActive ? activeStyle : unActiveStyle
                }} to="/checkout">Checkout</NavLink>

                {user ? (
                    <>
                        <NavLink style={({ isActive }) => {
                            return isActive ? activeStyle : unActiveStyle
                        }} to="/profile">Profile</NavLink>
                        <NavLink style={({ isActive }) => {
                            return isActive ? activeStyle : unActiveStyle
                        }} to="/sign-out">Sign Out</NavLink>
                        <NavLink style={({ isActive }) => {
                            return isActive ? activeStyle : unActiveStyle
                        }} to="/change-password">Change Password</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink style={({ isActive }) => {
                            return isActive ? activeStyle : unActiveStyle
                        }} to="/sign-up">Create an Account</NavLink>
                        <NavLink style={({ isActive }) => {
                            return isActive ? activeStyle : unActiveStyle
                        }} to="/sign-in">Sign In</NavLink>
                    </>
                )}
            </Nav>
        </header>
    )
}
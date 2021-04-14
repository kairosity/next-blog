import React from 'react'
import Navbar from '../Navbar'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("navbar renders with correct link text", () => {
    const { getByRole } = render(<Navbar />);
    const homeLinkEl = getByRole("link", { name: 'Home'})
    const registerLinkEl = getByRole("link", { name: 'Register'})
    const loginLinkEl = getByRole("link", { name: 'Login'})

    expect(homeLinkEl.textContent).toBe("Home")
    expect(registerLinkEl.textContent).toBe("Register")
    expect(loginLinkEl.textContent).toBe("Login")

})

// test("navbar links navigate to correct pages", () => {
//     const { getByRole } = render(<Navbar />);
//     const homeLinkEl = getByRole('link', {name: 'Home'})
//     const registerLinkEl = getByRole('link', {name: 'Register'})
//     const loginLinkEl = getByTestId('link', {name: 'Login'})

//     expect(homeLinkEl.textContent).toBe("Home")
//     expect(registerLinkEl.textContent).toBe("Register")
//     expect(loginLinkEl.textContent).toBe("Login")
// })
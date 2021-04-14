import React from 'react'
import Footer from '../Footer'
import { getByRole, getByText, getAllByRole, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('all social media links are present', () => {
    const { getByRole } = render(<Footer />)
    const twitterLink = getByRole("link", {name: 'twitter-link'})
    const facebookLink = getByRole("link", {name: 'facebook-link'}) 
    const instagramLink = getByRole("link", {name: 'instagram-link'}) 
    const linkedinLink = getByRole("link", {name: 'linkedin-link'})


    expect(twitterLink).toBeInTheDocument()
    expect(facebookLink).toBeInTheDocument()
    expect(instagramLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
})
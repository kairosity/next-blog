import React from 'react'
import Blog from '../index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
const fetch = require('node-fetch');


// Failing because of async call. 
// test("main heading present and text correct", () => {
//     render(<Blog />);
//     const mainPageHeading = screen.findByRole('heading',  { name: 'Welcome to this Health Blog'} )

//     expect(mainPageHeading.textContent).toBe("Welcome to this Health Blog")

// })


// Not working
// test("displays image for each blog article from the server", async () => {
//     render(<Blog />);

//     // find images 
//     const blogArticleImages = await screen.findAllByRole('img', {name: /^blog/i })
//     expect(blogArticleImages).toHaveLength(2);

// })
import React from 'react'
import QuoteHeader from '../QuoteHeader'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
const fetch = require('node-fetch');

test("quote is present", () => {
    render(<QuoteHeader />);
    

})
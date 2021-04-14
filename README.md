
## To Run This Project
1. npm run api: runs the json-server on port 8000
2. npm run dev: runs the app locally on port 5000


## Testing

- I had issues with testing the API calls with Jest, msw & React Testing Library.
- Specifically they could not find the blog data because I could not make the async testing work.
- More research is needed on my part to create & run these, but the scaffolding can be seen in
    - mocks/handlers.js
    - mocks/server.js
    - mocks/browser.js
    - mocks/index.js
    - src/setupTests.js
    - pages/blog/\_\_tests\_\_/index.test.js

- Basic tests on non-API-reliant elements are functional.

## Notes:

- react-bootstrap is not ideal for accessibility as it renders Card.Title and similar elements as <div>s instead of 
as semantic headings.
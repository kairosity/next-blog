
## To Run This Project
1. npm run api: runs the json-server on port 8000
2. npm run dev: runs the app locally on port 3000

## Functionality

- Main blog page is loaded via getStaticProps at build.
- Individual blog post pages are also loaded at buildtime.
- Comments are fetched on page load, and then again anytime the commentCount changes
    (i.e. when one is added or deleted.)

- Users can register, login & logout.
- Authentication is handled using next-auth JWT
- Users are saved to MongoDB.
- Pages are viewed conditionally, 


## Testing


- Basic tests on non-API-reliant elements are functional.
- Issues arose with testing async functionality. Specifically I could not map through individual blog posts.
- More research is needed on my part to create & run these tests, but the scaffolding can be seen in
    - mocks/handlers.js
    - mocks/server.js
    - mocks/browser.js
    - mocks/index.js
    - src/setupTests.js
    - pages/blog/\_\_tests\_\_/index.test.js


## Notes:

- react-bootstrap is not ideal for accessibility as it renders Card.Title and similar elements as \<div>s instead of 
as semantic markup.
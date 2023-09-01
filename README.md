# Volvo automated tests

Automated tests for "https://www.volvocars.com/intl/v/car-safety/a-million-more" using webdriver.io

## Getting Started

The test suite is written in JavaScript using [webdriver.io](https://webdriver.io/). Using mocha as a test runner. These will run in the docker container along with the selenium servers.



### Prerequisites
- [Docker](https://docs.docker.com/compose/install/)
- [Allure](https://www.npmjs.com/package/allure-commandline)
- [NPM](https://www.npmjs.com/get-npm)



## Tech stack
- [Docker](https://docs.docker.com/compose/install/)
- [Allure](https://www.npmjs.com/package/allure-commandline)
- [NPM](https://www.npmjs.com/get-npm)
- [Webdriver.io](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Selenium-standalone](https://www.npmjs.com/package/selenium-standalone)

## Running the tests

To run tests us the following command:

Start the selenium server

``` 
npm run env
```

Run the tests


```
npm run test
```
To access selenium tests ui when tests are running go to http://localhost:4444/ui/index.html

Generate the report

```
npm run results
```

Videos of the tests are saved in the /tmp/videos folder.

## Test 
The tests are designed is such a way that they run in parallel and on different browsers. 

To avoid issue with breaking when titles, text etc changes the tests are designed to be loose and not to break, while still providing value. E.G instead of checking for a specific title, the test checks for a title that exists and is not empty.

Ive also decided to test the 404 page as the link tests depends on that that page is working. To mitigate that the page would break and these tests to give false positives i have added a test for the 404 page. 

### Results
- Some test have been found to break, the font on firefox browser is not exactly the same as edge and chrome. This causes the test to fail. 
- Some internal links have the complete url instead of a relative url. This causes the test to fail. Which is an styling issue.

### Limitations
As of the limitation in time i have not tested everything that i would have liked to. However i tried to show how i would do it. Just one text instead of several etc. 

### Improvements
- Tests more specific on attributes and properties.
- Migrate to kubernetes for better scaling and management.
- Test for performance.
- Test for accessibility.
- Add more ids to the html to improve testability.
- More negative tests


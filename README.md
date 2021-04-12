# Cakes

## About The Project

Fully functioning API deployed to AWS  [Postman Collection](https://github.com/glasgowunion/cake/blob/main/Cakes.postman_collection.json)


### Built With

This project was developed with the following packages:
* [ESLint](https://eslint.org/) using the [waracle style guide](https://www.npmjs.com/package/eslint-config-waracle)
* [Jest](https://jestjs.io/)
* [Joi](https://www.npmjs.com/package/joi)

This project uses the following tools:
* [Postman](https://www.postman.com/)
* [SonarCloud](https://sonarcloud.io/)
* [Gradle](https://gradle.org/)
* [Spotless](https://github.com/diffplug/spotless)
* [Serverless](https://www.serverless.com/)
* [Github Actions](https://github.com/features/actions)

## Getting Started

### Prerequisites
* node v14.X
* npm v6.14.7

### Running the project

1. Clone the repo
   ```
   git clone https://github.com/glasgowunion/cake
   ```
2. Install packages
   ```
   yarn install
   ```
3. Run tests
   ```
   yarn test
   ```
4. Explore endpoints
   ```
   Download the postman collection to explore all the endpoints
   https://github.com/glasgowunion/cake/blob/main/Cakes.postman_collection.json

   - All Cakes
   - Create Cake
   - Delete Cake
   - Get Cake
   ```
5. Run tests in a GH action
   ```
   View our GH Actions / Gradle CI system
   https://github.com/glasgowunion/cake/actions
   ```
   
## Roadmap

Please visit [the development board](https://github.com/glasgowunion/cake/projects/1) 
the view the outstanding items in the roadmap

#### Known Limitations

- coverage reports aren't configured properly within sonarcloud and are causing the quality gate to fail
- pagination has not been implemented - currently we have a limit of 100 cakes

#### Testing

- testing is quite comprehensive with 40-45 test cases

## Design

A lot of time has been spent on contracts and adaptors
If the project grows we should be able to use the patterns in these
files, to help use extend the API.

#### Layout

- Adaptors - adaptors are responsible for converting data between the services
- Core - our core data structures and representations of our domain
- Contracts - types and interfaces which our services depend on
- Services - services represent our 'real world' services as we move into our infrastructure layers
  - Lambda - represents our lambda functions
  - Repository - represents our persistance layer our dynamo db repository
- Lambdas - our deployments, where our lambdas get bootstrapped


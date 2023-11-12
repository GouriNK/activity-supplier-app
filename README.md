<a name="readme-top"></a>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-overview">Project Overview</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#frontend">Frontend</a>
      <ul>
      <li>Assumptions</li>
        <li>Implemented Features</li>
        <li>Additional Features</li>
         <li>Improvements/Features left out</li>
      </ul>
    </li>
    <li><a href="#backend">Backend</a>
       <ul>
       <li>Assumptions</li>
        <li>Implemented Features</li>
        <li>Additional Features</li>
         <li>Improvements/Features left out</li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## Project Overview

The Project is a simple Full-Stack application that lets the user filter/search for activities. All available activities are listed on the application landing page. Activities can be searched by activity title.

The project has been built from scratch, using the technologies listed below. The data from the sample resource files provided ([activities.json](https://github.com/getyourguide/se-tech-challenge/blob/main/resources/activities.json) and [suppliers.json](https://github.com/getyourguide/se-tech-challenge/blob/main/resources/suppliers.json)) have been used to populate the backend database to MongoDB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![ExpressJS][ExpressJS]][ExpressJS-url]
- [![NodeJS][NodeJS]][NodeJS-url]
- [![GraphQL][GraphQL]][GraphQL-url]
- [![mongoDB][mongoDB]][mongoDB-url]
- [![Semantic-UI][Semantic-UI]][Semantic-UI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Installation

To get a local copy up and running follow these simple steps.

1. Make sure you are inside the project folder `activity-supplier-app`.
2. Install NPM packages for backend server application
   ```
   npm install
   ```
3. Navigate to the backend folder `activity-supplier-app/backend` and run the backend server application
   ```
   cd backend
   npm start
   ```
4. Open another Terminal and navigate to the frontend folder `activity-supplier-app/frontend` and install npm packages for frontend client application
   ```
   cd frontend
   npm install
   ```
5. Run the frontend client application
   ```
   npm start
   ```
6. Open [the application](http://localhost:3000) on browser.

**<span style="color:red">The database username, password and database connection URL for this project is valid for 2 weeks from the date of submission of this project (19-Oct-2023 to 01-Nov-2023). Please get in touch with me, in case further access is required.</span>**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Frontend
### Assumptions
1. Application does not require an UI for the following scenarios :
    * UI for Add/Edit/Delete of Activity
    * UI for Add/Edit/Delete of Supplier
    * UI for View all Suppliers
    * Filtering by other fields (not just activity title, eg: location)
2. The data given in the resources file can be use to preload the Database.
3. Allowed to use an external library such as `Semantic UI` for CSS use in the project
4. Have not used the codegen application to sync between graphql schema and the models used in FE, because of the small scale of data.
5. Testing of components has been omitted out
6. Ratings in Activity will have a maximum value of 5 and minimum value of 0
7. I am using technologies of my choice to implement the frontend (React + Typescript + SemanticUI)

### Implemented Features
1. On page load, a search box is shown and focus is moved to search box.
2. All Activities available in the Database - are fetched on page load (since the amount of data is less, I have decided to fetch all data on page load.)
3. On entering text inside the search box, the available list of activities are filtered based on activity title.
4. Each Activity item includes information such as title of activity, price with currency, rating, whether it has a special offer or not and supplier information, such as name and location


### Additional Features
1. I have added a `Loader` component, to accomodate for delays in loading of data from the backend fetch
2. I have included the `Semantic UI` css URL in the `index.html` file in the `public` folder. This enables using the `Semantic UI` CSS classes in the components for the cosmetic changes needed for the application. 
3. In case no items are found when searched for, with the text box, a message is shown indicating the same.
4. Activity Ratings are shown as stars. Calculations for this are done based on a 5-point star rating.
5. UI has been made responsive

### Improvements/Features left out
I have tried to include every detail asked for in the coding challenge


## Backend
### Assumptions
1. For ease of implementation, I have assumed all fields to be mandatory for Supplier and Activity
2. I have left out any validation checks for ease of implementation and for the small amount of data
3. Even though the sample resource files use `number` data type, for `id` field of the activity and supplier items, I have taken the liberty to use automatically generated unique `string` mongodb ids for the entities. (All relations between data have been kept intact)
4. `rating` field in Activity entity is allowed only `number`with values from 0 to 5. (as infered from the sample data)
5. I am using technologies of my choice to implement the backend (NodeJS + GraphQL + MongoDB + ExpressJS)

### Implemented Features
1. I have used GraphQL for the BE implementation to fetch data
2. To Persist data, I have used mongoDB. The DB connection URL will be valid for 2 weeks from date of submission of this assignment.
3. The backend server URL for Schema and Query lookup will be available at the local [GraphiQL](http://localhost:5000/graphql)

### Additional Features
1. I have additionally implemented a few more basic operations on the mongoDB collections as below :
    * Add/Edit/Delete of Activity
    * Add/Edit/Delete of Supplier
    * View all Suppliers
    * View Activity by ID
    * View Supplier by ID

I have used some of these additional APIs via the [GraphiQL](http://localhost:5000/graphql) interface and queries and mutations to insert/manipulate data. You can find the additional backend graphql queries for the same in the `graphql.md` file inside `activity-supplier-app/backend`

### Improvements/Features left out
1. Custom Error messages are not implemented for any DB operations.
2. Validations are not implemented for persist operations

## Contact

Gouri Nandakumar - [LinkedIn](www.linkedin.com/in/gourinandakumar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[mongoDB]: https://img.shields.io/badge/mongodb-f1f1f1?style=for-the-badge&logo=mongodb
[mongoDB-url]: https://www.mongodb.com/
[NodeJS]: https://img.shields.io/badge/node.js-1e3c41?style=for-the-badge&logo=nodedotjs
[NodeJS-url]: https://nodejs.org/en
[GraphQL]: https://img.shields.io/badge/GraphQL-fef8fc?style=for-the-badge&logo=graphql&logoColor=f6009b
[GraphQL-url]: https://graphql.org/
[ExpressJS]: https://img.shields.io/badge/Express.JS-f2bf50?style=for-the-badge&logo=express&logoColor=black
[ExpressJS-url]: https://expressjs.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-f2f2f2?style=for-the-badge&logo=typescript&logoColor=2f74c0
[TypeScript-url]: https://www.typescriptlang.org/
[Semantic-UI]: https://img.shields.io/badge/Semantic.UI-018078?style=for-the-badge&logo=semanticuireact
[Semantic-UI-url]: https://semantic-ui.com/

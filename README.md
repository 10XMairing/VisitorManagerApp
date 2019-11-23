## Visitor App

[Demo Link HERE](https://visitor-application.herokuapp.com/)

### working features

1.  Add a Host by clicking on `Manage Hosts`
2.  Add a visitor entry by clicking `Add Entry`
3.  Checkout a visitor by clicking on the table row at home page
4.  Select and Archive entries (click delete or archive icon at top)
5.  Select and Delete entries (click delete or archive icon at top)

- An email will be sent to Host and Visitor during checkin
- An email will be sent to Visitor at checkout

* For now sms feature has been disabled due to low credits

To run the application

The email and sms service wont work without the api keys for gmail and MSG91(see `.env.example` at `/registry`)

The main app is at `/registry`.
The frontend has already been compiled and added to server files.

    git clone https://github.com/10XMairing/VisitorManagerApp
    cd VisitorManagerApp/registry
    npm i
    npm build
    npm start

The vue frontend is at `frontend`
To test

    cd frontend
    npm run serve

To Build
This will compile the frontend code and move it to public folder of the server dir.`registry/public`

    npm run build

Now you can run the server with (/registry)
`npm run dev`

Or Compile and run at /registry
`npm run build`
`npm start`

## Resources Used:

- `Docker` was used for deploying to heroku
- But the database is hosted on mlab

## Backend

|                 |                                                                          |
| --------------- | ------------------------------------------------------------------------ |
| **Typescript**  | provides typing for javascript , [link](https://www.typescriptlang.org/) |
| Node/Express    | [node](https://nodejs.org/en/)                                           |
| Mongo/Mongoose  | node library for mongo                                                   |
| Axios           | networking library                                                       |
| Celebrate & Joi | express middleware for request validation                                |
| Typedi          | Dependency injection framework                                           |
| nodemailer      | mailing library                                                          |
| Winston         | logging library                                                          |
| Event-Dispatch  | library for event based execution                                        |

### Reason for using typescript

Typescript provides much better structure to the overall project with its interfaces and typing feature.
Its most useful with used together with Dependency Injection tools like `typedi` as demonstrated here

### The Backend Structure

```
|-- AssignInno
    |-- package-lock.json
    |-- package.json
    |-- tests.ts
    |-- tsconfig.json
    |-- public
     |-- src
        |-- index.ts
        |-- api
        |   |-- v1
        |       |-- hosts
        |       |-- records
        |-- config
        |   |-- Msg91.ts
        |   |-- index.ts
        |-- controller
        |   |-- entry
        |   |-- hosts
        |-- interface
        |   |-- IEntry.ts
        |   |-- IHost.ts
        |-- loaders
        |   |-- dependecyFactory.ts
        |   |-- express.ts
        |   |-- index.ts
        |   |-- logger.log
        |   |-- logger.ts
        |   |-- mongoose.ts
        |-- middlewares
        |   |-- auth.ts
        |   |-- index.ts
        |-- models
        |   |-- Entry.ts
        |   |-- Host.ts
        |-- services
        |   |-- EmailService
        |   |-- EntryService
        |   |-- HostService
        |-- subscribers
        |   |-- EventRegister.ts
        |-- utils

```

| **_package_**   | **_description_**                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **loaders**     | has services that loads all depencies for express and sets it up like mongo,loggers etc                                                                                                                                                                         |
| **api**         | Contains the api logic. which is handled by its respective Controllers                                                                                                                                                                                          |
| **controller**  | Interacts with the router responses and the different services                                                                                                                                                                                                  |
| **services**    | Contains specific services that deals with the databases or email services. These are the main data sources or api executors                                                                                                                                    |
| **middlewares** | Contains the middlewares for authentication. No auth was implemented in this project                                                                                                                                                                            |
| **subscribers** | Has event handlers using the `event-dispatch` library. events like `checkin` and `checkout` are caught by these callbacks and various services like email and sms services are executed. These events are called by the Controllers during checkin and checkout |
| **config**      | configuration keys.                                                                                                                                                                                                                                             |
| **interface**   | Contains interfaces for typescript.                                                                                                                                                                                                                             |
| **models**      | Contains the database models.                                                                                                                                                                                                                                   |
| **utils**       | Contains global utility functions.                                                                                                                                                                                                                              |

- nodemailer implemented with gmail oauth2

## frontend :

|                |                                                                          |
| -------------- | ------------------------------------------------------------------------ |
| **Typescript** | provides typing for javascript , [link](https://www.typescriptlang.org/) |
| **Vue**        | Js framework for frontend web dev                                        |
| **Vuex**       | State management Library                                                 |
| **VueRouter**  | Routing library                                                          |
| **Axios** :    | Networking Library                                                       |
| **Typedi**     | : Dependency injection framework                                         |
| **Vuetify**    | : Material design library for vue                                        |

### The Frontend Structure

```
|-- AssignInno
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
    |   |-- App.vue
    |   |-- main.ts
    |   |-- shims-tsx.d.ts
    |   |-- shims-vue.d.ts
    |   |-- api
    |   |   |-- ApiModule.ts
    |   |   |-- EntryService.ts
    |   |   |-- HostService.ts
    |   |-- assets
    |   |-- components
    |   |   |-- Footer.vue
    |   |-- plugins
    |   |   |-- vuetify.ts
    |   |-- router
    |   |   |-- index.ts
    |   |-- store
    |   |   |-- index.ts
    |   |   |-- models
    |   |   |   |-- IEntry.ts
    |   |   |-- modules
    |   |       |-- ArchiveModule.ts
    |   |       |-- HomeModule.ts
    |   |-- utils
    |   |   |-- index.ts
    |   |-- views
    |       |-- About.vue
    |       |-- AddEntry.vue
    |       |-- Archive.vue
    |       |-- Home.vue
    |       |-- ManageHosts.vue
    |-- tests
        |-- unit
            |-- .eslintrc.js
            |-- example.spec.ts
```

| Package | Description                                       |
| ------- | ------------------------------------------------- |
| Api     | Contains services that handles all database calls |
| router  | contains router file                              |
| store   | Contains the vuex store and modules               |
| views   | Contains the views file                           |

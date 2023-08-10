## Overview

Just a quick todo-list project to learn the tech stack of Next.js, Firebase and TailWind.

Features of the app include:

- User registration and authentication (Firebase)
- Adding, updating and deleting todos

## What the app looks like

![login](/screenshots/login.png)
![dashboard](/screenshots/userdashboard.png)

## Key Concepts

### Frontend

1. React CreateContext creates an object that can be used to manage a value / state that is changed but doesn't cause a rerender. A context object is wrapped around a component and a value is provided to the Context through the Provider. Components that have been wrapped, can call useContext to access said value.
2. In Next.js, standard env variables are only available in the node js environment. If the browser needs to the environment variables, they need to be prefixed with "NEXT_PUBLIC\_...".

### Backend

1. NoSQL It is non relational database meaning that there are no tables involved, so no predefined schema so you can store different types of data structures in the same collection. A document is basic unit of data, it is JSON like data structure meaning that it can be as simple or complex as needed. A collection is a grouping of documents which is similar to a table (in an SQL manner)
2. Firebase is a suite of cloud based services provided to help app development. Provides realtime (NoSQL) database, meaning it can store and sync data in real time. Provides authentication methods to handle user related functions.

# Register App

## Install
```
npm install
```

## Starting the server
```
npm start
```

## API
A User object contains the following:
```
User = {
  id: Number, 
  name: String, 
  email: String
}
```

All data should be JSON except for the /register route

**GET /users** -> `{data: User[]}` - Get all Users

**GET /users/:id** -> `{data: User}` - Get single User

**PUT /users/:id** - Update a user, expects a User object as data

**DELETE /users/:id** - Delete a user

**POST /register** -> Expects `application/x-www-form-urlencoded` data (i.e send data from a form).   
                  Will redirect to / if success, and /register.html?error=1 if error.   
                  Data needed is `{name: String, email: String, password: String, passwordrepeat: String}`


## TODO

* index.html should render all users that have been created.
* register.html should contain a form where we can submit to /register and create new users.
  Make sure to add validation on the form. Make sure the passwords match before sending data to the server.
* The server will redirect to /register.html?error=1 if an error triggers when registering a user. Make sure to render an error message to the user in the DOM if ?error=1 is set.
* Make it shiny.

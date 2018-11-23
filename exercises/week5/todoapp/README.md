# TODO APP

## API documentation

A single todo must have a title property, and the length should be at least 1 char in length.

**GET /todos** - Returns all the todos

**POST /todos** - Create a new todo. `{title: string}` needs to be provided as JSON

**GET /todos/:id** - Returns a specific todo by id

**PUT /todos/:id** - Update specific todo by id. `{title: string}` needs to be provided as JSON.

**DELETE /todos/:id** - Delete a specific todo by id


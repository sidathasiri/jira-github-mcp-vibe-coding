## README

### Example cURL commands to test the API

#### Create a Task
```sh
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy milk"}'
```

#### Get All Tasks
```sh
curl http://localhost:3000/tasks
```

#### Update a Task
```sh
curl -X PUT http://localhost:3000/tasks/<TASK_ID> \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy bread", "completed": true}'
```

#### Delete a Task
```sh
curl -X DELETE http://localhost:3000/tasks/<TASK_ID>
```

Replace `<TASK_ID>` with the actual id of the task you want to update or delete.
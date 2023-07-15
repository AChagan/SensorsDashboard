### WIP

# SensorsDashboard

Monolith with an API and a Dashboard to view the readings from the environmental sensors

## API

The API is a REST API that allows to create and read sensors measurements data.

Zod is used to validate the data sent to the API.
Zod schemas are also tested with unit tests.
Functional tests cover the controller layer.
Unit tests covers the service layer where Fake repository is used instead of MongoDB.
Integration tests cover the repository layer by testing the CRUD operations on the Mongo database.

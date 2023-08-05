### WIP

# SensorsDashboard Project

Monolith with an API and a Dashboard to view the readings from the environmental sensors

## Dashboard

The dashboard is a React app that uses the API to display the data from the sensors.

Storybook is used to develop the components in isolation.
Tailwind is used to style the components.

## API

The API is a REST API that allows to create and read sensors measurements data.

Zod is used to validate the data sent to the API.
Zod schemas are also tested with unit tests.
Functional tests cover the controller layer and perform end-to-end tests by sending in a request and receiving an expected response.
Unit tests cover the service layer where the Fake repository is used instead of MongoDB.
Integration tests cover the repository layer by testing the CRUD operations on the Mongo database.

## IOT Sensor

Contains a script that runs on a raspberry pi, and requires an SCD30 sensor to measure c02 in the atmosphere, temperature, and humidity.

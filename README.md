# Express.js JSON Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The problem arises when the `express.json()` middleware is not properly configured or used, leading to an undefined request body (`req.body`).

## Bug Description

A simple Express.js application is created to handle POST requests to the `/user` endpoint.  The `express.json()` middleware is included to parse incoming JSON data. However, the `req.body` remains undefined even when a valid JSON payload is sent.

## Solution

The solution involves ensuring that the `express.json()` middleware is correctly placed in the application's middleware stack *before* any route handlers that expect JSON data.  This ensures that the body parsing happens before the route handler tries to access `req.body`.
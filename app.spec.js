var shell = require('shelljs')
var request = require('supertest')
var app = require('./app')

describe("Test the root path", () => {
  test("it should have a 200 status", () => {
    return request(app).get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

// describe("User Routes", () => {
//   test("it should respond to POST method", () => {
//     add some db build up and take away here
//     return request(app).post('/api/v1/users')
//       .send({api_key: "1234"})
//       .then(response => {
//         expect(response.statusCode).toBe(200)
//       })
//   })
// })


describe("Forecast call", () => {
  test("it should return a 401 without an api key", () => {
    return request(app).get('/api/v1/forecast?location=salem,or')
      .then(response => {
        expect(response.statusCode).toBe(401)
      })
  })
})

describe("Favorites call", () => {
  test("get request should return a 401 without an api key", () => {
    return request(app).get('/api/v1/favorites')
      .then(response => {
        expect(response.statusCode).toBe(401)
      })
  })
  
  test("post request should return a 401 without an api key", () => {
    return request(app).post('/api/v1/favorites')
      .then(response => {
        expect(response.statusCode).toBe(401)
      })
  })

  test("delete request should return a 401 without an api key", () => {
    return request(app).delete('/api/v1/favorites')
      .then(response => {
        expect(response.statusCode).toBe(401)
      })
  })
})

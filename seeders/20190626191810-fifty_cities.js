'use strict';

let cityObjects = [{
  name: "New York",
  state: "NY",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Los Angeles",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Chicago",
  state: "IL",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Houston",
  state: "TX",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Philadelphia",
  state: "PA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Phoenix",
  state: "AZ",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Antonio",
  state: "TX",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Diego",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Dallas",
  state: "TX`",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Jose",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Austin",
  state: "TX",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Jacksonville",
  state: "FL",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Francisco",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Indianapolis",
  state: "IN",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Columbus",
  state: "OH",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Fort Worth",
  state: "TX",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Charlotte",
  state: "NC",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Seattle",
  state: "WA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Denver",
  state: "CO",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "El Paso",
  state: "TX",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Detroit",
  state: "MI",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "WA",
  state: "D.C.",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Boston",
  state: "MA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Memphis",
  state: "TN",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Nashville",
  state: "TN",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Portland",
  state: "OR",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Oklahoma City",
  state: "OK",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Las Vegas",
  state: "NV",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Baltimore",
  state: "MD",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Louisville",
  state: "KY",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Milwaukee",
  state: "WI",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Albuquerque",
  state: "NM",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Tucson",
  state: "AZ",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Fresno",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Sacramento",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Kansas City",
  state: "MO",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Long Beach",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Mesa",
  state: "AZ",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Atlanta",
  state: "GA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "CO Springs",
  state: "CO",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Virginia Beach",
  state: "VA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Raleigh",
  state: "NC",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Omaha",
  state: "NE",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Miami",
  state: "FL",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Oakland",
  state: "CA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Minneapolis",
  state: "MN",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Tulsa",
  state: "OK",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Wichita",
  state: "KS",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "New Orleans",
  state: "LA",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Arlington",
  state: "TX",
  country: "UnitedStates",
  createdAt: new Date(),
  updatedAt: new Date()
}]



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Cities', cityObjects, {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Cities", null, {}
    )
  }
};

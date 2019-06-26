'use strict';

let cityObjects = [{
  name: "New York",
  state: "New York",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Los Angeles",
  state: "California",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Chicago",
  state: "Illinois",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Houston",
  state: "Texas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Philadelphia",
  state: "Pennsylvania",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Phoenix",
  state: "Arizona",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Antonio",
  state: "Texas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Diego",
  state: "Califonia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Dallas",
  state: "Texas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Jose",
  state: "California",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Austin",
  state: "Texas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Jacksonville",
  state: "Florida",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "San Francisco",
  state: "Califonia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Indianapolis",
  state: "Indiana",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Columbus",
  state: "Ohio",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Fort Worth",
  state: "Texas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Charlotte",
  state: "North Carolina",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Seattle",
  state: "Washington",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Denver",
  state: "Colorado",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "El Paso",
  state: "Texas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Detroit",
  state: "Michigan",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Washington",
  state: "D.C.",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Boston",
  state: "Massachusettes",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Memphis",
  state: "Tennessee",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Nashville",
  state: "Tennesee",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Portland",
  state: "Oregon",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Oklahoma City",
  state: "Oklahoma",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Las Vegas",
  state: "Nevada",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Baltimore",
  state: "Maryland",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Louisville",
  state: "Kentucky",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Milwaukee",
  state: "Wisconsin",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Albuquerque",
  state: "New Mexico",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Tucson",
  state: "Arizona",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Fresno",
  state: "Califonia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Sacramento",
  state: "Califonia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Kansas City",
  state: "Missouri",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Long Beach",
  state: "Califonia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Mesa",
  state: "Arizona",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Atlanta",
  state: "Georgia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Colorado Springs",
  state: "Colorado",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Virginia Beach",
  state: "Virginia",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Raleigh",
  state: "North Carolina",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Omaha",
  state: "Nebraska",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Miami",
  state: "Florida",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Oakland",
  state: "California",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Minneapolis",
  state: "Minnesota",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Tulsa",
  state: "Oklahoma",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Wichita",
  state: "Kansas",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "New Orleans",
  state: "Louisiana",
  country: "United States",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: "Arlington",
  state: "Texas",
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

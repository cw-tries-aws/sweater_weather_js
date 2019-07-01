'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Cities', [
        {
   name: 'Phoenix',
   state: 'AZ',
   country: 'USA',
   latitude: 33.4483771,
   longitude: -112.0740373,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Arlington',
   state: 'TX',
   country: 'USA',
   latitude: 32.735687,
   longitude: -97.10806559999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Kansas City',
   state: 'MO',
   country: 'USA',
   latitude: 39.0997265,
   longitude: -94.5785667,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'San Antonio',
   state: 'TX',
   country: 'USA',
   latitude: 29.4241219,
   longitude: -98.49362819999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Minneapolis',
   state: 'MN',
   country: 'USA',
   latitude: 44.977753,
   longitude: -93.2650108,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Fort Worth',
   state: 'TX',
   country: 'USA',
   latitude: 32.7554883,
   longitude: -97.3307658,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Philadelphia',
   state: 'PA',
   country: 'USA',
   latitude: 39.9525839,
   longitude: -75.1652215,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Memphis',
   state: 'TN',
   country: 'USA',
   latitude: 35.1495343,
   longitude: -90.0489801,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'New Orleans',
   state: 'LA',
   country: 'USA',
   latitude: 29.95106579999999,
   longitude: -90.0715323,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Long Beach',
   state: 'CA',
   country: 'USA',
   latitude: 33.7700504,
   longitude: -118.1937395,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Sacramento',
   state: 'CA',
   country: 'USA',
   latitude: 38.5815719,
   longitude: -121.4943996,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Detroit',
   state: 'MI',
   country: 'USA',
   latitude: 42.331427,
   longitude: -83.0457538,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'El Paso',
   state: 'TX',
   country: 'USA',
   latitude: 31.7618778,
   longitude: -106.4850217,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Dallas',
   state: 'TX',
   country: 'USA',
   latitude: 32.7766642,
   longitude: -96.79698789999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'San Diego',
   state: 'CA',
   country: 'USA',
   latitude: 32.715738,
   longitude: -117.1610838,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Tulsa',
   state: 'OK',
   country: 'USA',
   latitude: 36.1539816,
   longitude: -95.99277500000001,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Mesa',
   state: 'AZ',
   country: 'USA',
   latitude: 33.4151843,
   longitude: -111.8314724,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Chicago',
   state: 'IL',
   country: 'USA',
   latitude: 41.8781136,
   longitude: -87.6297982,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Miami',
   state: 'FL',
   country: 'USA',
   latitude: 25.7616798,
   longitude: -80.1917902,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Wichita',
   state: 'KS',
   country: 'USA',
   latitude: 37.68717609999999,
   longitude: -97.33005299999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Milwaukee',
   state: 'WI',
   country: 'USA',
   latitude: 43.0389025,
   longitude: -87.9064736,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Tucson',
   state: 'AZ',
   country: 'USA',
   latitude: 32.2226066,
   longitude: -110.9747108,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Albuquerque',
   state: 'NM',
   country: 'USA',
   latitude: 35.0843859,
   longitude: -106.650422,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Fresno',
   state: 'CA',
   country: 'USA',
   latitude: 36.7377981,
   longitude: -119.7871247,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Oakland',
   state: 'CA',
   country: 'USA',
   latitude: 37.8043637,
   longitude: -122.2711137,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'New York City',
   state: 'NY',
   country: 'USA',
   latitude: 40.7127753,
   longitude: -74.0059728,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Atlanta',
   state: 'GA',
   country: 'USA',
   latitude: 33.7489954,
   longitude: -84.3879824,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Washington',
   state: 'DC',
   country: 'USA',
   latitude: 38.9071923,
   longitude: -77.0368707,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Houston',
   state: 'TX',
   country: 'USA',
   latitude: 29.7604267,
   longitude: -95.3698028,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Charlotte',
   state: 'NC',
   country: 'USA',
   latitude: 35.2270869,
   longitude: -80.8431267,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Louisville',
   state: 'KY',
   country: 'USA',
   latitude: 38.2526647,
   longitude: -85.7584557,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'San Jose',
   state: 'CA',
   country: 'USA',
   latitude: 37.3382082,
   longitude: -121.8863286,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Denver',
   state: 'CO',
   country: 'USA',
   latitude: 39.7392358,
   longitude: -104.990251,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Los Angeles',
   state: 'CA',
   country: 'USA',
   latitude: 34.0522342,
   longitude: -118.2436849,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Seattle',
   state: 'WA',
   country: 'USA',
   latitude: 47.6062095,
   longitude: -122.3320708,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Boston',
   state: 'MA',
   country: 'USA',
   latitude: 42.3600825,
   longitude: -71.0588801,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Indianapolis',
   state: 'IN',
   country: 'USA',
   latitude: 39.768403,
   longitude: -86.158068,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'San Francisco',
   state: 'CA',
   country: 'USA',
   latitude: 37.7749295,
   longitude: -122.4194155,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Nashville',
   state: 'TN',
   country: 'USA',
   latitude: 36.1626638,
   longitude: -86.7816016,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Austin',
   state: 'TX',
   country: 'USA',
   latitude: 30.267153,
   longitude: -97.7430608,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Virginia Beach',
   state: 'VA',
   country: 'USA',
   latitude: 36.8529263,
   longitude: -75.97798499999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Jacksonville',
   state: 'FL',
   country: 'USA',
   latitude: 30.3321838,
   longitude: -81.65565099999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Portland',
   state: 'OR',
   country: 'USA',
   latitude: 45.5154586,
   longitude: -122.6793461,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Raleigh',
   state: 'NC',
   country: 'USA',
   latitude: 35.7795897,
   longitude: -78.6381787,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Colorado Springs',
   state: 'CO',
   country: 'USA',
   latitude: 38.8338816,
   longitude: -104.8213634,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Omaha',
   state: 'NE',
   country: 'USA',
   latitude: 41.2565369,
   longitude: -95.9345034,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Columbus',
   state: 'OH',
   country: 'USA',
   latitude: 39.9611755,
   longitude: -82.99879419999999,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Baltimore',
   state: 'MD',
   country: 'USA',
   latitude: 39.2903848,
   longitude: -76.6121893,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Oklahoma City',
   state: 'OK',
   country: 'USA',
   latitude: 35.4675602,
   longitude: -97.5164276,
   createdAt: new Date(),
   updatedAt: new Date()
 },
 {
   name: 'Las Vegas',
   state: 'NV',
   country: 'USA',
   latitude: 36.1699412,
   longitude: -115.1398296,
   createdAt: new Date(),
   updatedAt: new Date()
 }], {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Cities", null, {}
    )
  }
};

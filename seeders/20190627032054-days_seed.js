'use strict';
let today = new Date();
let tomorrow = new Date();
let tomorrow2 = new Date();
let tomorrow3 = new Date();
let tomorrow4 = new Date();
let tomorrow5 = new Date();
let tomorrow6 = new Date();
let tomorrow7 = new Date();
let tomorrow8 = new Date();
let tomorrow9 = new Date();
let tomorrow10 = new Date();
let tomorrow11 = new Date();
let tomorrow12 = new Date();
let tomorrow13 = new Date();

tomorrow.setDate(today.getDate()+1);
tomorrow2.setDate(today.getDate()+2);
tomorrow3.setDate(today.getDate()+3);
tomorrow4.setDate(today.getDate()+4);
tomorrow5.setDate(today.getDate()+5);
tomorrow6.setDate(today.getDate()+6);
tomorrow7.setDate(today.getDate()+7);
tomorrow8.setDate(today.getDate()+8);
tomorrow9.setDate(today.getDate()+9);
tomorrow10.setDate(today.getDate()+10);
tomorrow11.setDate(today.getDate()+11);
tomorrow12.setDate(today.getDate()+12);
tomorrow13.setDate(today.getDate()+13);

let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayAbbr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let days = [{
  name: dayNames[today.getDay()],
  abbreviation: dayAbbr[today.getDay()],
  date: today
},
{
  name: dayNames[tomorrow.getDay()],
  abbreviation: dayAbbr[tomorrow.getDay()],
  date: tomorrow
},
{
  name: dayNames[tomorrow2.getDay()],
  abbreviation: dayAbbr[tomorrow2.getDay()],
  date: tomorrow2
},
{
  name: dayNames[tomorrow3.getDay()],
  abbreviation: dayAbbr[tomorrow3.getDay()],
  date: tomorrow3
},
{
  name: dayNames[tomorrow4.getDay()],
  abbreviation: dayAbbr[tomorrow4.getDay()],
  date: tomorrow4
},
{
  name: dayNames[tomorrow5.getDay()],
  abbreviation: dayAbbr[tomorrow5.getDay()],
  date: tomorrow5
},
{
  name: dayNames[tomorrow6.getDay()],
  abbreviation: dayAbbr[tomorrow6.getDay()],
  date: tomorrow6
},
{
  name: dayNames[tomorrow7.getDay()],
  abbreviation: dayAbbr[tomorrow7.getDay()],
  date: tomorrow7
},
{
  name: dayNames[tomorrow8.getDay()],
  abbreviation: dayAbbr[tomorrow8.getDay()],
  date: tomorrow8
},
{
  name: dayNames[tomorrow9.getDay()],
  abbreviation: dayAbbr[tomorrow9.getDay()],
  date: tomorrow9
},
{
  name: dayNames[tomorrow10.getDay()],
  abbreviation: dayAbbr[tomorrow10.getDay()],
  date: tomorrow10
},
{
  name: dayNames[tomorrow11.getDay()],
  abbreviation: dayAbbr[tomorrow11.getDay()],
  date: tomorrow11
},
{
  name: dayNames[tomorrow12.getDay()],
  abbreviation: dayAbbr[tomorrow12.getDay()],
  date: tomorrow12
},
{
  name: dayNames[tomorrow13.getDay()],
  abbreviation: dayAbbr[tomorrow13.getDay()],
  date: tomorrow13
}];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Days", days, {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Days", null, {}
    )
  }
};

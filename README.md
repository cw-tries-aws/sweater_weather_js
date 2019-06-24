# sweater_weather_js
by Carrie Walsh

Deployed site: https://lit-meadow-10610.herokuapp.com/

This solo project is a remake of the Ruby project Sweater Weather: https://github.com/carriewalsh/sweater_weather


## Endpoints

- GET `/api/v1/forecast?location=CITYNAME`
- GET `/api/v1/backgrounds?location=CITYNAME`
- POST `/api/v1/users?email=EXAMPLE@EXAMPLE.COM&password=PASSWORD&password_confirmation=PASSWORD`
- POST `/api/v1/sessions?user[email]=EXAMPLE@EXAMPLE.COM&user[password]=PASSWORD`
- POST `/api/v1/favorites?api_key=USER_API_KEY&location=CITY_ID`
- GET `/api/v1/favorites?api_key=USER_API_KEY`
- DELETE `/api/v1/favorites?api_key=USER_API_KEY&location=CITY_ID`

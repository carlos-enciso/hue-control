# hue-control
React page to control Philips Hue lights in local network

# Disclaimer
This App checks for your Philips Hue in your local network, this was created with a local server / hud control in mind.

# Setup
Download the project :tongue:
## Create a Philips Hue username
Follow the `Get Started` guide at [Get Started - Philips Hue Developer Program](https://developers.meethue.com/develop/get-started-2/) especially the part where you create a new user for your hub.

Save the username generated into the `.env` file into the `REACT_APP_HUB_USER_NAME` variable name:
```
REACT_APP_HUB_USER_NAME='<ADD_YOUR_USERNAME_HERE>'
...
```

## React Stuff
### Dev
If you want to run this app you can open a terminal, navigate to the downloaded app and run `npm start` or `yarn start` to execute the app in `localhost:300`

### Build
// TODO: Figure out how to mount it into a Raspberry Pi :sweat_smile:

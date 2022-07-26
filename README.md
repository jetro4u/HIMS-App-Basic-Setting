# HIMS-App-Basic-Setting

The repo is a basic setting for our HIMS microfrontend app. After you clone the app you want to work on, you should integrate
these settings so that the app you clone can work in isolation. 

## INSTRUCTIONS

1. Go though any of the app repos below and study it. Decide which of the App you want to work on. You may also go through the documentation at https://docs.dhis2.org/en/home.html

- i. dashboard app - https://github.com/dhis2/dashboard-app 
- ii. data-visualizer-app - https://github.com/dhis2/data-visualizer-app
- iii. event-reports-app - https://github.com/dhis2/event-reports-app
- iv. mentainance-app - https://github.com/dhis2/maintenance-app
- v. system-settings-app - https://github.com/dhis2/settings-app
- vi. user-app - https://github.com/dhis2/user-app
- vii. user-profile-app - https://github.com/dhis2/user-profile-app
- viii. Web-interpretation-app - https://github.com/dhis2/interpretation-app
- ix. data-entry-app - https://github.com/dhis2/data-entry-app
- x. messaging-app - https://github.com/dhis2/messaging-app
- xi. maps-app - https://github.com/dhis2/maps-app
- xii. tracker-capture - https://github.com/dhis2/tracker-capture-app
- xiii. sms-configuration-app - https://github.com/dhis2/sms-configuration-app
- xiv. reports - https://github.com/dhis2/reports-app

2. Get back to me on your selected app above to confirm if it's still available. If you are given the go ahead, tell me what it will cost you to reconfigure the Web App you select designed to work with Java backend to work with Node.js API we are provisioning. I want to be able to connect the Web Apps to the Node.js backend API. The customization will maintain the current user experience or improve it. The platform has a playground to see how the system work and you can login with a default admin access to feel it at https://play.dhis2.org/ 

3. Once we have agreement on the app to work with and the cost, you should go ahead accept my Upwork offer. If you need any assistance let me know. 


## DESIGN SPECS
NOTE: I am designing this Apps to work on a Microfrontend architecture. So, you will need to use my existing Webpack configuration as a basis to start and build the app. It should be able to work in isolation.

In order for an app to integrate into our microfrontend, the following conditions need to be met:

1. `package.json` - The package.json file should use the preconfigured scripts, dependencied and devDependencies.

2. `config` - The config folder contains my webpack settings for 
development and production. Just focus on the development.

3. `public` - The public folder contains the index.html file to render the app in the virtual DOM.

4. `src/index.js` - The index.js file is the entry file. 

5. `src/bootstrap.js` - The bootstrap file contain a Mount function to start up the app.  

6. `src/App.js` - The App.js is the dashboard App wrapper.

7. Routing within the app should be internal and only append the id of the item or page route being navigated to. The main localhost port should remain on screen.  


## CONTACT

For any inquiry or contact please reach me though Skype or Upwork

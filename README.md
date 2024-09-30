#It was not "Dockerized".

NodeJs version v22.6.0. Use NVM tocontrol the node Versions if you need. Please, use an stable and one that llow to 
work with current technologies. All check the docs.

#Client-App

Created using Reactjs, Redux/ Toolkit to manage the states.

The .env file contains
REACT_APP_CLOUDINARY_CLOUD_NAME = 
REACT_APP_BACKEND_URL = 

The url for the server i'm using is http://localhost:8080, but may change depend on your develop configurations.

#Server (NodeJs)

The installation of debugger working with VSCode is done. The file works if you main file is index.js. MongoDb as a Data base, Mongoose to manage all. 
MongoDb website to create the project. Socket.io, express, jwt to manage the user login and logout. (Passport was not used). Nodemon dependency to "watch".

the .env contains:

FRONTEND_URL = 
MONGODB_URI = 
JWT_SECREAT_KEY = 

the url for front noramlly is http://localhost:3000. When working with reactjs is common to have the port 3000, but depends on your enviroment. Please, make sure of all that. 

the MONGODB_URI is the url that mongodb (https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_amers-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646314&adgroup=131761122172&cq_cmp=14412646314&gad_source=1&gclid=Cj0KCQjwmOm3BhC8ARIsAOSbapXB44bd0OSCJ3iNn1UOWUE9jygxbfe0QQxJaz0NosIkc0pLyDhtrBoaArhPEALw_wcB) provides. 

the JWT_SECREAT_KEY is a particular password that you can use to work with jwt.




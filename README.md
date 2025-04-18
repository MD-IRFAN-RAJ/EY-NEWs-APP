How to run the Project:

step1: Clone the repo in your computer : git clone <repo link> 
step2:cd EY-NEWs_APP
Step3: cd client
step4: Inside the services> authservice file change the API_URL to : http://localhost:<your backend port>/api/auth
step5: type "npm i" in terminal to install all the dependencies. This step will create node_module folder.
step5: open new terminal and cd server 
step6: inside server find index.js file and change the CORS Origin to your frontend localhost url : http://localhost:<port number> 
step7: There were few environment variable .So you need to create ".env" file in server directory manually.
        API_KEY=<your news api key>
        MONGO_URI=<your mongodb uri> 
        PORT=<your port>
        JWT_SECRET=<your jwt secret key>


step8:install the dependencies  server type "npm i" (this will install the node_modules folder)
step9: run client using "npm run dev"
step10:run server using "nodemon "index.js"

You are all Set 

# node-webURL-example
Example code how calls can be dynamically routed. Use case would be :
- If you wnat to forward calls to specific account managers (sales) by looking up in crm.
- route calls to call center queue based on the incoming country (advanced bilingual call center)
- call recording inside crm. 
- Run scripts when the call is hanged up or answered.

####HOW TO USE?
Rename config.js.sample to config.js
npm install 
npm run dev or npm start

It will start a web server on port 3000 based on express.js
All you need is to point this URL in your nomado PBX under features -> web URL and done. 

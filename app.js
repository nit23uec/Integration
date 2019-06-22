const express = require('express');
const Smooch = require('smooch-core');
const dialogflow = require('dialogflow');
const uuid = require('uuid');
@param {string} projectId 


const KEY_ID = 'app_5d0bc7845cd7540010b82fc9';
const SECRET = 'Hm_0R2Kj-nk-UypiTAtiw1gDYzOb377bhw5QBOYkMAgqmWi7XmQh1fTKAo6fe8RifmVRFdYLMCZns2f_fKRXPg';

const smooch = new Smooch({
    keyId: KEY_ID,
    secret: SECRET,
    scope: 'app'
});


var server=express();


server.listen(process.env.PORT, function () {
  console.log('HELLO');
 
});



server.post('/messages', (req, res) =>
	    
	    
	const sessionId = uuid.v4();
        const  projectId='stockprice-bibxgw';

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
	
	
   
		 smooch.appUsers
    .sendMessage({
        userId: 'e83c4e435a64724dcb18286a',
        message: {
            type: 'text',
            text: 'Live long and prosper',
            role: 'appMaker'
        }
    })
    .then((response) => {
        console.log('API RESPONSE:\n', response);
        res.end();
    })
    .catch((err) => {
        console.log('API ERROR:\n', err);
        res.end();
    });
	
	

	   
  ); 


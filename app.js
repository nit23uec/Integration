const express = require('express');
const Smooch = require('smooch-core');
const dialogflow = require('dialogflow');
const uuid = require('uuid');



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
	    
	    
	    {	
	var config = {
  credentials: {
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClVL3GqvpS/mXC\n7Uh1uAE06GXNP/jhBqOiiiVidGtC47WMYDb0RjX+FArdinOr2rSeKqgvwx5uRQjP\n6YbLfhRu/grPGXXN9HiDkc9Rw3YPM2qzklFbedtGTXkac9gMtfoW/2HdbiANG1mO\nms2s3IDx+zMDqPCwXxAO7z2XOCOylC0qQoV9Qyjeo2BUjunQc0SioZwprNItaZUF\noT5Ilae/ad3kbF55J0fqDt6bFNlKUgtt+VmTHiW0oQXINOjLx7Aeo74UkOWwimxW\nQ43BqMSJhMiwVf/H51iCGHBfjoD2hUl/AUCIhw6+F0Zeg+4MzDnRipl8edZNp1KI\nK9SlwKuHAgMBAAECggEAGZZjZp9omDandi3Lae39QHx6i55hJ3vOZdCpQjMQCgKm\n7YpTMaa6ItAO8cRElwOFXPiaHgY91prC5zartiEVtYCGGLub2AZZg8ypwEGW1c8Y\ng6Ewto5wntFNCF3ca/SFYlDKYH7zi+5rLl8MAjsAOTMuQoc/dPR0I549iIKs7QKy\nXQVbIMkAKZ9EmYtLMYC6g1fpZrMAGELoummE6pkde/gCOwj1NC/Pwr/mYi4CHJSm\nhcV2HgAfvITTKzwRbezJFtdN3cQDw4LSdpCcVlofjShmGzlnkVB3wGzHah7C4MrR\nQ7PLW0hO36cOJ5zOtZcTjJcRT4fhyZAUV+RdeFTzqQKBgQDZP7+5xOeZxCLUY0vU\nTJ/Q8tI/TKCw7N1lr1TBiYecQ5fnf5ZBFxA0BxERzF3x9m221Y/6EmyXASDb2osC\nvHEavp8SuSScR5GS/hk5mx80DX7uSk2VHIJliSrmMANLeqQPvBfPfahAIvQa3jfE\n0mtczhBapxOb+bn15askusjHiQKBgQDC0kI2aqNGLeeW9talHJ2AiCb5uWDHqpZH\n7djoR8n+Liq1OoapyW29IxIHw9J4bWTeTuf8T/zmVmc48K6l4VivueLbF3bmM4va\nVwpSw2fxkLdfZjFEkbVCb/tYe7h2oC17K0WBXteZ+FPdsSUyHWvkyHxUiGn8FZ0+\n4vRznIwGjwKBgApPMiP4qhzr59M4WxLaCAN8YmnKkx2SP/dhWJ5Ojnbl5kGAFntE\nQuqVI0Q69IJU9WPlwo1Vbn3D+fE077/TfXKNdTMIQiqAYvIcyMmpCNQJh+p68C+R\nSMbUuYpu4NkmGr78aAzao69XeUoFHZRjf+DJjpEeuJmAQkje+z4k9v4xAoGARilW\nsyZAWtvZVaLbtmbRyiI+dxzt37ptmMXtoemIs0OJGe9T4/2oyb7BlY5OVBSBiRY9\nsb5Uw9dGIVl8bDz1pYN6UZDnvwu9SAqkqx24Z2TIxVCWWa1n699MU5dq3T3eY0c4\nJtkzKD4oZeSQErZJzwDs1byy/pgCI02035X3T70CgYEAn7WB+HYkGPYmCBJ6a8UP\n9XxU7FsqEcADBlm0BiZgkVYovRPJCNJKvvJZkpZBKuXfWS7HIVDLpYvfLkG2PmuM\n6asphwM5j5CkFKpImO/u7iTvvsodTo1m/L8OrMHLiVJW4rSa36E0RQTWPGVktTTf\nrYOBb84QmJOdBiSnhk9XImk=\n-----END PRIVATE KEY-----",
    client_email: "stockprice-bibxgw@appspot.gserviceaccount.com"
  }
}


	const sessionId = uuid.v4();
        const  projectId='stockprice-bibxgw';

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient(config);
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'Get Contact Details',
        // The language used by the client (en-US)
        languageCode: 'en',
      },
    },
  };

  // Send request and log result
 sessionClient
    .detectIntent(request)
    .then(responses => {
        console.log('Detected intent');
        const result = responses[0].queryResult;
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Response: ${result.fulfillmentText}`);
        if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
        } else {
            console.log(`  No intent matched.`);
        }
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
	
   
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
	
	
	    }
	   
  ); 


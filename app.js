const express = require('express');
const Smooch = require('smooch-core');

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
	
	
	{console.log('reached request');     
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


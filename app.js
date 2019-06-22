const express = require('express');
const Smooch = require('smooch-core');

const KEY_ID = 'act_5d0c7538e7753c0010ec37ee';
const SECRET = 'Oe39zddJNf23uUUWRDqDIgSsbgJ7sLIO5rrNj-zyye5hS0-n16PamT6fWORIFzjk9QZ1ep_9Rm4_t3wJv1Qf3Q';

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
        userId: '5d0a6dfc471133000ff7194d',
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


const functions = require('firebase-functions');
const algoliasearch = require ('algoliasearch');

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('products')


exports.addToIndext = functions.firebase.document('products/{productId}')

.onCreate(shapshot =>  {

const data = snapshot.data();
const objecID = snapshot.id;
return index.addObject({...data, objecID});

});

exports.updateIndex = functions.firestore.

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

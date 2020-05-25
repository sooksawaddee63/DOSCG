const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Reprompt', (conv) => {
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
  if (repromptCount === 0) {
  conv.ask(`What was that?`);
  } else if (repromptCount === 1) {
  conv.ask(`Sorry I didn't catch that. Could you repeat yourself?`);
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
  conv.close(`Okay let's try this again later.`);
  }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
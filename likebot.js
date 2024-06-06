const Twitter = require('https://x.com/weslyily');
const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const stream = client.stream('statuses/filter', {track:'#IlikeBots, #keyword2'});

stream.on('data', (event) => {
  client.post('favorites/create', {id:event.id_str}, (error, response) => {
    if(error) throw error;
    console.log('https://x.com/weslyily/status/1797735037913444644: '+response.id_str+' Liked! - "'+response.text+'"')
  });

});

stream.on('error', (error) => {
  throw error;
});

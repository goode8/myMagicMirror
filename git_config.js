/* Magic Mirror Config Altered
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */
 
 /*Customizations by goode8
 main parts ommitted. keeping in just the modules 
 */

        modules: [
                {
                        module: "alert",
                },
                {
                        module: "updatenotification",
                        position: "top_bar"
                },

                // Base WallberryTheme adds new font, styles, and a rotating background image pulled from Unsplash.com
				//i might try the other modules available. 
                {//i love the photos
				//i'd really like a photo that follows the weather, sun, and moon, but not enough time. 
                        module: "WallberryTheme",
                        position: "fullscreen_below", // Required Position
                        config: {
                        unsplashAccessKey: "omitted", // REQUIRED
                        //collections: "2589108", // optional - leave empty for a random photo
                        //addBackgroundFade:"",
                        autoDimOn:true,
                        updateInterval:"60000"
                        //brightImageOpacity:"",
                        //orientation:"landscape"
                }
                },
                {
                        module: "clock",
                        position: "top_left"
                },
                {
                        module: "calendar",
                        header: "Something or Nothing",
                        position: "top_right",
                        config: {
                                colored:true,
                                calendars: [
                                        {
                                                symbol: "calendar-alt",
                                                url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
												//url: "https://calendar.google.com/calendar/ical/nameomitted%40gmail.com/private-omitted/basic.ics",
												//it's fun:
                                                color:"Violet",
                                                maximumNumberOfDays:90, //i've tried a few values here...
                                        }
                                ]

                        }
                },

                {
                        module: "compliments",
                        position: "top_bar"
                },

                {//i like using these two together. I get now and the week. it works for me.
                        module: "weather",
                        position: "top_right",
                        header:"Current Weather",
                        config: {
                                weatherProvider:"openweathermap",
                                type:"current",
                                location:"omitted,
                                locationID: "omitted",
                                units:"imperial",
                                tempUnits:"imperial",
                                degreeLabel:true,
                                showFeelsLike:false,
                                showSun:false,
                                apiKey: "omitted"
                                }
                },

                {
                        module: "weather",
                        position: "top_right",
                        header:"Forecast",
                        config: {
                                weatherProvider:"openweathermap",
                                type:"forecast",
                                weatherEndpoint:"/forecast",
                                location:"omitted",
                                locationID: "omitted",
                                units:"imperial",
                                tempUnits:"imperial",
                                degreeLabel:true,
                                apiKey: "omitted"
                                }

                },


                { //I've disabled this. too busy for me. I like the idea.
					//also doesn't look great on the photo background.
                          //disabled:true,
                          module: "MMM-AVStock",
                          position: "top_left",
                          config: {
                                apiKey : "omitted",
                                mode: "table",
                                //mode: "ticker",
                                symbols : ["AAPL", "LYFT", "GOOGL", "K"],
                                alias: ["Apple", "Lyft", "Google", "Kellogg"],
                                showChart:false,
                                showVolume:false,
                                showPurchasePrices:false,
                                showPerformance2Purchase:false
                                  }
                },

                {//changed from NYTimes
                        module: "newsfeed",
                        position: "bottom_right",
                        config: {
                                feeds: [
                                        {
                                                title: "NPR",
                                                url: "https://feeds.npr.org/1001                                                                                                             /rss.xml"
                                        }
                                        ],
                                showSourceTitle: true,
                                showPublishDate: true,
                                broadcastNewsFeeds: true,
                                broadcastNewsUpdates: true
                        }
                },
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
pi@raspberrypi:~/MagicMirror/config $ ls

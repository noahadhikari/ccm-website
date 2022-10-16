(function () {
  var app = angular.module('ccm', []);

  app.controller('eventsController', function () {
    this.eventList = eventList;
    this.venueInfo = venueInfo;
  });

  /*var eventList = []; */
  var eventList = [
    {
      "date": "2022-10-28",
      "events": [
        {
          "eventType": "CCM & LPS Open Mic",
          "time": "7:30 PM",
          "location": "morrison-125"
        },
      ]
    },
    {
      "date": "2022-11-05",
      "events": [
        {
          "eventType": "Concert",
          "time": "3:00 PM",
          "location": "silverado"
        },
      ]
    },
	/*	{
			"date": "2018-09-15",
			"events": [
				{	
					"evte":"2018-11-18",
					 54                         "events": [
					  55                                 {
					   56                                         "eventType": "Social",
					    57                                         "time": "TBD",
					     58                                         "location":"location-tbd"
					      59                                 }
					       60                         ]
					        61                 },
						entType": "Spring 2018 Infosession",
					"time": "12-1 PM",
					"location": "location-tbd"
				},
			]
		},
	*/	,
    /*		{
          "eventType": "Jam/Collab Session",
          "time": "TBA",
          "location": ""
        }
      ]
    },
// 		{
// 			"date":"2021-04-10",
// 			"events": [
// 				{
// 					"eventType": "Silverado Berkeley Memory Care Performance",
// 					"time": "1:30 PM",
// 					"location": "Skype"
// 				},
// 				]
// 		},
    {
      "date":"2021-05-15",
      "events": [
        {
          "eventType":"Silverado Berkeley Memory Care Performance",
          "time": "1:30 PM",
          "location": "Skype"
        },
        ]
    }
  ];
  /*,	{
      "date":"2020-10-17",
      "events": [
        {
          "eventType":"Workshop",
          "time": "TBA",
          "location": ""
        },
        {
          "eventType":"Jam/Collab Session",
          "time": "TBA",
          "location": ""
        }
        ]
    },
    {
      "date":"2020-10-24",
      "events": [
        {
          "eventType":"Concert",
          "time": "TBA",
          "location": "TBA"
        },
        ]
    },		
    {
      "date":"2020-10-31",
      "events": [
        {
          "eventType": "Social",
          "time": "TBA",
          "location":""
        }
      ]
    },
    {
      "date":"2020-11-07",
      "events": [
        {
          "eventType": "Concert",
          "time": "TBA",
          "location": "TBA",
        }
      ]
    },
    {
      "date":"2020-11-14",
      "events": [
        {
          "eventType": "Workshop",
          "time": "TBA",
          "location": "",
        },
        {
          "eventType": "Jam/Collab Session",
          "time": "TBA",
          "location": "",
        }
      ]
    },
    {
      "date":"2020-11-21",
      "events": [
        {
          "eventType": "Concert",
          "time": "TBA",
          "location": "TBA",
        }
      ]
    },
    {
      "date":"2020-12-05",
      "events": [
        {
          "eventType": "Concert",
          "time": "TBA",	
          "location": "TBA"
        }
      ]
    }
  ]
  {
      "date":"2018-11-10",
      "events": [
        {
          "eventType": "Jam Session",
          "time": "12-2 PM",
          "location": "morrison-hall"
        },
        {
          "eventType": "Concert",
          "time": "2:45-3:45 PM",
          "location": "ashby"
        }
      ]
    }		
  */
  ]

  var venueInfo = {
    "aseb": { "name": "Alzheimer's Services of the East Bay", "address": "2330 Channing Ave" },
    "ashby": { "name": "Ashby Care Center", "address": "2270 Ashby Ave" },
    "berkeley-pines": { "name": "Berkeley Pines", "address": "2223 Ashby Ave" },
    "berkshire": { "name": "Berkshire Convalescent", "address": "2235 Sacramento St" },
    "chaparral-house": { "name": "Chaparral House", "address": "1309 Allston Way" },
    "redwood-gardens": { "name": "Redwood Gardens", "address": "2951 Derby St" },
    "elmwood": { "name": "Elmwood Convalescent Hospital", "address": "2829 Shattuck Ave" },
    "kyakameena": { "name": "Kyakameena Skilled Nursing Facility", "address": "2131 Carleton St" },
    "morrison-hall": { "name": "Morrison Hall Lounge", "address": "(bottom floor)" },
    "morrison-125": { "name": "Morrison 125", "address": "" },
    "silverado": {"name": "Silverado Berkeley Memory Care", "address": "2235 Sacramento St"},
    "hearst-gym": { "name": "242 Hearst Gym", "address": "(second floor)" },
    "location-tbd": { "name": "Meet outside Morrison Hall", "address": "" },
  };

})();

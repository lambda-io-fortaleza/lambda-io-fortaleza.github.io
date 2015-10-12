# Customization

The project already comes with a visual template, feel free to use it, but we recommend you create your own in order to put your own identity in the event.

Anyway, we have prepared something highly customizable for you, so for most of the changes just go to the [`config.json`](./../src/config.json) file and change the value of variables.

## Table of Contents

- [Basic information about the conference](#basic-information-about-the-conference)
- [Labels (i18n)](#labels-i18n)
- [Speakers List](#speakers-list)
- [Schedule](#schedule)
- [Partners List](#partners-list)
- [Sponsors List](#sponsors-list)
- [Organizers List](#organizers-list)

## Basic information about the conference

Do you want to change the *name, date, address or city* of the conference?
Go ahead! Here you also put site details and conference contact info.

```json
"about":{

  "name":"Conference name",
  "shortDescription":"Conference description",
  "longDescription":"So you want to organize a conference? That's pretty awesome! But we know that you don't have time to create the website, since you have to worry about contacting sponsors, chossing the right place, buying airplane tickets for speakers and many other things. That's why we created this project!",
  "date":"November 15",
  "logo":"img/logo.png",
  "register":{
    "message":"Register now!",
    "link":"https://www.eventick.com.br"
  },
  "location":{
    "place":"Coco Bongo",
    "address":"Boulevard Kukulcan, 30",
    "city":"Cancún",
    "state":"Quintana",
    "mapsKey":"AIzaSyBA8zmp_Mwlz19cazVlsox7QF-apmKtOQY"
  },
  "site":{
    "url":"Conference Example",
    "googleAnalytics": "UA-33656081-1"
  },
  "contact":{
    "email":"conf@example.com",
    "twitter":"@example",
    "facebook":"example.conf",
    "github":"example.conf"
  }

}
```

## Labels (i18n)

If you want to use different words than default or different language
just change labels for corresponding elements:


```json
"labels": {

  "sections":[
    {
      "name": "about",
      "label": "About"
    },
    {
      "name": "location",
      "label": "Location"
    },
    {
      "name": "speakers",
      "label": "Speakers"
    },
    {
      "name": "schedule",
      "label": "Schedule"
    },
    {
      "name": "sponsors",
      "label": "Sponsors"
    },
    {
      "name": "partners",
      "label": "Partners"
    },
    {
      "name": "organizers",
      "label": "Organizers"
    }
  ],

  "messages":{

    "getTickets": "Get Tickets",
    "moreInformation": "More Information",
    "sponsors":{
      "description": "A very special thanks to our sponsors who believe and are fundamental to the event.",
      "invitation": "Sponsor us to be part of this event, and benefit from this unique environment.",
      "moreInformation": "More Information",
      "mediakit": "#"
    },
    "partners":{
      "description": "A very special thanks to our partners who believe and are fundamental to the event.",
      "invitation": "Help us and be part of this event, and benefit from this unique environment.",
      "moreInformation": "More Information",
      "mediakit": "#"
    },
    "organizers": "This event is brought to you by they:",
    "contact": "Get in Touch",
    "footer":"Made with ♥ by Conf Boilerplate :)"

  }

}
```

You can also use this object to define other labels, which you would like to
access in your templates.

## Speakers List

To add/change/exclude a speaker is equally simple, just see `speakers` variable.

```json
"speakers":[
  {
    "name":"Chuck Norris",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    "photo":"img/speakers/speaker.jpg",
    "company":"Delta Command",
    "twitter":"littlechuck"
  }
]
```

## Schedule

To add/change/exclude any event in the agenda (check-in, lunch, coffee-break,
talks etc.) just see `schedule` variable.

```json
"schedule":[

  {
    "name":"Check-in / Breakfast",
    "time":"9:00"
  },
  {
    "name":"Digging into a Linux Kernel",
    "time": "10h00",
    "speaker": "Linus Torvalds",
    "description":"Lorem ipsum dolor sit amet."
  },
  {
    "name":"Introducing Windows 12",
    "time": "11h00",
    "speaker": "Bill Gates",
    "description":"Lorem ipsum dolor sit amet."
  },
  {
    "name": "Lunch",
    "time": "12h00"
  },
  {
    "name":"How to kill a elephant with one finger",
    "time": "13h00",
    "speaker": "Chuck Norris",
    "description":"Lorem ipsum dolor sit amet.",
    "room":"Auditorium 1"
  }
]
```

## Partners List

To add/change/exclude a partner, just see `partners` variable.

```json
"partners":[
  {
    "name":"Sponsor 1",
    "logo":"img/sponsors/your-logo.jpg",
    "website":"#"
  }
]
```

## Sponsors List

To add/change/exclude a sponsor, just see `sponosors` variable.

```json
"sponsors":[
  {
    "name":"Sponsor 1",
    "logo":"img/sponsors/your-logo.jpg",
    "website":"#"
  }
]
```

## Organizers List

To add/change/exclude a partner, just see `partners` variable.

```json
"organizers":[
  {
    "name":"Organizer 1",
    "photo":"img/organizers/organizer.jpg",
    "website":"#"
  }
]
```

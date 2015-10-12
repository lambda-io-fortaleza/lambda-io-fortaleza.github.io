[ ![Codeship Status for mabrasil/lumberpack](https://codeship.com/projects/e5c0fd40-146c-0133-f7df-26b4121038d9/status?branch=master)](https://codeship.com/projects/93079)
[![Build Status](https://travis-ci.org/mabrasil/lumberpack.svg?branch=master)](https://travis-ci.org/mabrasil/lumberpack)
[![Code Climate](https://codeclimate.com/github/mabrasil/lumberpack/badges/gpa.svg)](https://codeclimate.com/github/mabrasil/lumberpack)
[![Dependency Status](https://david-dm.org/mabrasil/lumberpack.png)](https://david-dm.org/mabrasil/lumberpack)
[![devDependency Status](https://david-dm.org/mabrasil/lumberpack/dev-status.svg)](https://david-dm.org/mabrasil/lumberpack#info=devDependencies)

# Conf Boilerplate

![Logo](src/images/logo.png)

> A simple boilerplate to help those people who wants to organize conferences/events and don't have too much time to create the website of it.

## Table of Contents

- [How it works?](#how-it-works)
- [Using](#using)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## How it works?

> For more details about the stack, see [this](docs/how-it-works).

This boilerplate uses some of the coolest technologies we have today, like:
the [Jade Engine](http://jade-lang.com/), [SASS](http://sass-lang.com/),
[Gulp](http://gulpjs.com/) and *many others*.

## Using

### Getting Started

Make sure you have the main dependencies:

- [Git](http://git-scm.com/downloads)
- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

Clone this repository:

```sh
$ git clone https://github.com/mabrasil/conf-boilerplate.git my_event
```

Install all dependencies:

```sh
$ cd my_project
$ npm install
```

Run the default gulp task:

```sh
$ gulp
```

### Structure

> For more details about the Folders and Files structure, see [this](docs/using/structure).

If everything from the [Getting Started](#getting-started) section goes well, you should have this:

```
|-- docs/
|-- gulp/
|-- src/
|   |-- images/
|   |-- scripts/
|   |-- styles/
|   |-- templates/
|   |-- config.json
|-- www/
|   |-- css/
|       |-- main.css
|   |-- img/
|   |-- js/
|       |-- main.js
|   |-- index.html
|-- .editorconfig
|-- gulpfile.js
|-- nightwatch.json
|-- package.json
```

### Customization

> For more details about customizing your project, see [this](docs/using/customization).

The project already comes with a visual template, feel free to use it, but we recommend you create your own in order to put your own identity in the event.

Anyway, we have prepared something highly customizable for you, so for most of the changes just go to the [`config.json`](/src/config.json) file and change the value of variables.

#### Basic information about the conference

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

#### Labels (i18n)

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

#### Speakers List

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

#### Schedule

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

#### Partners List

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

#### Sponsors List

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

#### Organizers List

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
### Workflow

> For more details about the automation process, see [this](docs/using/workflow).

All the Gulp tasks are in the [`tasks/`](gulp/tasks) folder. Each one consists of a module with a function which is required into tasks defined in the [`gulpfile`](https://github.com/mabrasil/lumberpack/blob/master/gulpfile.js).

- `gulp`: Initialize watch for changes and a server
- `gulp js`: Minify and concat files
- `gulp jade`: Compile Jade files
- `gulp sass`: Compile SASS files
- `gulp img-clean`: Clean images
- `gulp img-min`: Clean images folder and compress image files
- `gulp watch`: Call to watch files
- `gulp deploy-gh`: Deploy to Github Pages
- `gulp deploy-rsync`: Deploy via rsync
- `gulp build-gh`: Minify files and deploy to Github Pages
- `gulp build-rsync`: Minify files and deploy via rsync
- `gulp tests`: Run nightwatch.js - see [development]()

## Showcase

> Have you created a website using ConfBoilerplate? Let's us know :)

See the conferences that already used this project as a kickstart:

- [JS4Girls Fortaleza](http://js4girls-fortaleza.github.io)

## Contributing

Contributions are very welcome! If you'd like to contribute, these
[guidelines](CONTRIBUTING.md) may help you.

##License

[Lumberpack](https://github.com/mabrasil/lumberpack) is distributed under the
MIT License, available in this repository. All contributions are assumed to be also licensed under
the MIT License.

## Credits

- All styles were taken from

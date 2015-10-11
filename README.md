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
|-- .stylintrc
|-- gulpfile.js
|-- nightwatch.json
|-- package.json
```

### Customization

> For more details about customizing your project, see [this](docs/using/customization).

The project already comes with a visual template, feel free to use it, but we recommend you create your own in order to put your own identity in the event.

Anyway, we have prepared something highly customizable for you, so for most of the changes just go to the [`config.json`](/src/config.json) file and change the value of variables.

#### Basic information about the conference

Do you want to change the name, date, address, city or price of the conference?
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


### Understand the Gulp Tasks

All the Gulp tasks are in the [`tasks/`](gulp/tasks) folder. Each one consists of a module with a function which is required into tasks defined in the [`gulpfile`](https://github.com/mabrasil/lumberpack/blob/master/gulpfile.js).

- `gulp`: Initialize watch for changes and a server
- `gulp ls`: Compile Livescript files
- `gulp jade`: Compile Jade files
- `gulp stylus`: Compile Stylus files
- `gulp imagemin`:Compress image files
- `gulp watch`: Call to watch files
- `gulp -p`: Minify all files for production
- `gulp build -p`: Minify files and deploy via rsync

## Contributing

### Versioning

It is intended to maintain this project under the [Semantic Versioning] (http://semver.org/) guidelines. Releases will
be numbered with the following format:

`<major>.<minor>.<patch>`

### Reporting a bug

1. Look for any related issues [here](https://github.com/mabrasil/lumberpack/issues).
2. If you find an issue that seems related, please comment there instead of creating a new issue. If it is determined to be a unique bug, we will let you know that a new issue can be created.
3. If you find no related issue, create a new issue by clicking [here](https://github.com/mabrasil/lumberpack/issues/new).
If we find an issue that's related, we will reference it and close your issue, showing you where to follow the bug.
4. Tell us important details like what operating system you are using.
5. Include any errors that may be displayed (see [Chrome Console instructions](https://developer.chrome.com/devtools/docs/console#opening_the_console) for how to do that).
6. Update us if you have any new info, or if the problem resolves itself!

### The 5 magic steps

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

##License

[Lumberpack](https://github.com/mabrasil/lumberpack) is distributed under the
MIT License, available in this repository. All contributions are assumed to be also licensed under
the MIT License.

## Credits

- All styles were taken from [Dave Gamache](https://github.com/dhg)'s [Skeleton](https://github.com/dhg/Skeleton).

- Part of this project's original structure - some tasks and directories organization - was tasks taken
from [Willian Justen](https://github.com/willianjusten)'s [Fast Boilerplate](https://github.com/willianjusten/Fast) -
maybe now the two projects look very different.

- Font used in logo: [Pinewood](http://www.fontspace.com/rick-mueller/pinewood) by [Rick Mueller](http://moorstation.org/typoasis/designers/mueller/).

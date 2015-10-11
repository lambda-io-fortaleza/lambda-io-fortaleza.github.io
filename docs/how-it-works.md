## How it works?

This boilerplate uses some of the coolest technologies we have today:

### Jade

The  [Jade Engine](http://jade-lang.com/) is one of the most powerful template
engines we have nowadays and its use is intended to make the app templates' code
more beautiful and **easier to maintain**. It also aims to solve some problems
such as missing or mal-matched closing tags.

### SASS

[SASS](http://sass-lang.com/) has everything that modern *CSS preprocessors*
should have: *variables*, *mixins*, *nesting*, *extending* and many other cool
things. Instead of the tradiotional implementation of SASS, this project uses
[node-sass](https://github.com/sass/node-sass) which are *Node.js* bindings to
[libsass](https://github.com/sass/libsass).

### Gulp

*Stream-based build system*, *code over configuration*, *idiomatic Node modules*,
a *simple and elegant API*... There are many reasons why
[Gulp](http://gulpjs.com/) can be a good bet on task runners.

Here we have many cool plugins like `Browser Sync` - which allows you to sync
all your devices and even make livereloading -, `Jade`, `Stylus`, `Imagemin`
and many other good ones.

In this project, we also prevent your `gulpfile.js` from growing too large by
splitting it into multiple files, with one task per file. You can check out
the [tasks directory](gulp/tasks) to see how it works.

### Nightwatch.js

Unit tests are fundamental for finding bugs, but some of them happen when we
get components to work together - which can't be captured in a unit test - and
it's very important to ensure that the right information is passed between all
the app components so that it can offer the expected experience to the user;
and End-to-End testing is a way of taking what we expect the system to do based
on our inputs and verifying that against the actual results.

This project ships with *e2e tests* powered by
[Selenium](http://www.seleniumhq.org/) +
[Nightwatchjs](http://nightwatchjs.org/) + *Chrome*.

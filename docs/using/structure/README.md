# Structure

If everything from the [Getting Started](README.md#getting-started) section goes well, you should have this:

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

Now let's find out what each one of those files and folders mean.

P.S.: Some very commom files - or less important - are shown here, such as the `.md` ones - *README*, *LICENSE* *CONTRIBUTING* -, the CIs tracking files like `.codeclimate.yml` or `.travis.yml` and others.

## [`docs/`](/docs/)

Contains some *markdown-written* documentation.

## [`gulp/`](/gulp/)

Contains the module with all the *gulp tasks*.

## [`src/images/`](/src/images/)

Contains the *images* that will be used in your site.

## [`src/scripts/`](/src/scripts/)

Contains the *scripts* that will be used in your site.

## [`src/styles/`](/src/styles/)

Contains the *styles* - written in *Stylus* - that will be used in your site.

## [`src/templates/`](/src/templates/)

Contains the *tamplates* - written in *Jade* - that will be used in your site.

## [`src/config.json`](/src/config.json)

Contains all info from your event that will be rendered in the templates.

## www/

This is where the generated files are stored, once the tasks are finished. However, this directory is unnecessary in versioning, so it's [ignored](.gitignore).

## [`gulpfile.js`](gulpfile.js)

Calls the gulp tasks.

## [`nightwatch.json`](nightwatch.json)

Contains some *testing* configuration.

## [`package.json`](package.json)

Contains many metadata relevant to the project.

# Contributing

## Table of Contents

- [Testing](#testing)
- [Versioning](#versioning)
- [Reporting a bug](#reporting-a-bug)
- [Adding your site to the showcase](#adding-your-site-to-the-showcase)
- [The 5 magic steps](#the-5-magic-steps)
- [License](#license)

## Testing

This project implments *e2e testing* via Selenium + Nightwatchjs + Chrome.

All tests files can be found in the [`tests`](./tests) directory. If you wanna add
any features, it is recommended that you test them before sending your *Pull
Request*.

In the testing process, it is recommended that you have three open terminal
consoles, where:

1. You run the application:
  > `gulp` or `npm run server`

1. You start selenium:
  > `selenium-standalone start`

1. You run the tests:
  > `gulp tests` or `npm test`

## Versioning

It is intended to maintain this project under the [Semantic Versioning] (http://semver.org/) guidelines. Releases will
be numbered with the following format:

`<major>.<minor>.<patch>`

## Reporting a bug

1. Look for any related issues [here](https://github.com/mabrasil/conf-boilerplate/issues).
1. If you find an issue that seems related, please comment there instead of creating a new issue. If it is determined to be a unique bug, we will let you know that a new issue can be created.
1. If you find no related issue, create a new issue by clicking [here](https://github.com/mabrasil/conf-boilerplate/issues/new).
If we find an issue that's related, we will reference it and close your issue, showing you where to follow the bug.
1. Tell us important details like what operating system you are using.
1. Include any errors that may be displayed (see [Chrome Console instructions](https://developer.chrome.com/devtools/docs/console#opening_the_console) for how to do that).
1. Update us if you have any new info, or if the problem resolves itself!

## Adding your site to the [Showcase](README.md#showcase)

1. Fork it!
1. Go to the [Showcase](README.md#showcase) section and add your site as
the following:

  `- [<Event Name>](<event site URL>) ([source code](<github repo URL>))`
1. Submit a pull request as the following:

  `Add <Event Name> to the showcase`

## The 5 magic steps

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -m 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :)

## License

[Conf Boilerplate](https://github.com/mabrasil/conf-boilerplate) is distributed under the
MIT License, available in this repository. All contributions are assumed to be also licensed under
the MIT License.

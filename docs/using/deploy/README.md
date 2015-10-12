# Deploy

## To GitHub Pages

1. Create a GitHub repo for you event.

1. Do the steps from [Getting Started](./../getting-started/) section.

1. Point the cloned repo to the repo you created:

  `$ git remote set-url origin git@github.com:username/projectname.git`

1. Run `gulp deploy-gh`.

## Via Rsync

1. Go to the `config.json` file and fill the `deploy.rsync` object:

  - `username`:

    - **Type**: `string`

    - **Description**: Your username at the remote server.

  - `hostname`:

    - **Type**: `string`

    - **Description**: Your server domain (URL).

  - `dest`:

    - **Type**: `string`

    - **Description**: Path on the server that will receive the files.

1. Run `gulp deploy-rsync`.

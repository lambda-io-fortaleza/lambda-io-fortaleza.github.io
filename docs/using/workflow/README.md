# Workflow

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

If you usually do automation via `npm run <script>`, all the gulp tasks above
are declared in the npm `scripts` obejct, so feel free to run:

- `npm run server`: Initialize watch for changes and a server
- `npm run js`: Minify and concat files
- `npm run jade`: Compile Jade files
- `npm run sass`: Compile SASS files
- `npm run img-clean`: Clean images
- `npm run img-min`: Clean images folder and compress image files
- `npm run watch`: Call to watch files
- `npm run deploy-gh`: Deploy to Github Pages
- `npm run deploy-rsync`: Deploy via rsync
- `npm run build-gh`: Minify files and deploy to Github Pages
- `npm run build-rsync`: Minify files and deploy via rsync
- `npm test`: Run nightwatch.js - see [development]()

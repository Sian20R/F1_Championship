# `F1 Championship` — Project build using AngularJS, JQuery and Bootstrap

This project is show the F1 racer results in 2013 Championship and their personal details.


## Getting Started

To get you started you can simply clone the `angular-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `F1_Championship` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].


### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  bower_components		--> AngularJS related files
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  css/					--> all CSS related files
	  app.css               --> default stylesheet
	  bootstrap/			--> bootstrap css
		bootstrap.min.css
		bootstrap-theme.min.css
	  jquery/				--> jquery css
		jquery-ui.min.css
		jquery-ui.structure.min.css
		jquery-ui.theme.min.css
  fonts/
  img/					--> all image files
	drivers/				--> drivers' photo
	flags/					--> countries' flag
  js/
	bootstrap/
		bootstrap.min.js
	jquery/
		jquery-3.2.1.min.js
		jquery-ui.min.js
	app.js					--> main application module
	controllers.js			--> controller logic
	services.js				--> service logic
  partials/
	driver.html				--> driver's details
	drivers.html			--> list of drivers ranking in 2013 F1 Championship
  index.html			--> app layout file (the main html template file of the app)
  




```


## Updating Angular

Since the Angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools to easily update the dependencies. Simply run the preconfigured
script:

```
npm run update-deps
```

This will call `npm update` and `bower update`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` and `bower.json` files
respectively.


## Serving the Application Files

While Angular is client-side-only technology and it is possible to create Angular web apps that
do not require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,
etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.

### Running the App during Development

The `angular-seed` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static HTML, CSS and JavaScript files that need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via XHR or other means, you need to figure out
what is the best way to host the static files to comply with the same origin policy if applicable.
Usually this is done by hosting the files by the backend server or through reverse-proxying the
backend server(s) and web server(s).


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits to
your repository and execute scripts such as building the app or running tests. The `angular-seed`
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the
[Travis website][travis-docs] for instructions on how to do this.


## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started

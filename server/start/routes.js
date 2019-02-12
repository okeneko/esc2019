"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Helpers = use("Helpers");

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

// Route.any("*", ({ view }) => view.render("main"));

Route.get("/", ({ response }) =>
  response.download(Helpers.publicPath("index.html"))
);

Route.get("favicon.ico", ({ response }) => {
  response.download(Helpers.publicPath("favicon.ico"));
});

Route.get("js/:file", ({ response, params }) => {
  response.download(Helpers.publicPath(`js/${params.file}`));
});

Route.get("css/:file", ({ response, params }) => {
  response.download(Helpers.publicPath(`css/${params.file}`));
});

Route.get("img/:file", ({ response, params }) => {
  response.download(Helpers.publicPath(`img/${params.file}`));
});

Route.any("*", ({ response }) =>
  response.download(Helpers.publicPath("index.html"))
);

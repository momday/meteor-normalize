Package.describe({
  summary: 'A collection of HTML element and attribute style-normalizations'
});

Package.on_use(function (api) {
  api.add_files(['normalize.css/normalize.css'], 'client');
});

Package.describe({
  summary: 'A collection of HTML element and attribute style-normalizations',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR-CORE@0.9.0-rc12');
  api.addFiles(['normalize.css/normalize.css'], 'client');
});

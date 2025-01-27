module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-webpack'),
      require('karma-typescript'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-jasmine-html-reporter')  // Add the reporter plugin
    ],
    files: [
      'src/test.ts'
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [
          require("karma-typescript-es6-transform")()
        ]
      }
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'kjhtml', 'dots'],  // Ensure "kjhtml" is included
    singleRun: false,
    restartOnFileChange: true
  });
};

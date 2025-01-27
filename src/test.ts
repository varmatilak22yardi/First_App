import 'zone.js';
import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule,platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);


const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);

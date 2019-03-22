import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { overrideRenderFactory } from './shadow-dom-renderer'

platformBrowserDynamic(overrideRenderFactory()).bootstrapModule(AppModule).catch(err => console.error(err));
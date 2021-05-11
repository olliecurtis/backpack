/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

// This small timeout is to allow the component to settle.
// See: https://www.npmjs.com/package/@storybook/addon-storyshots-puppeteer#specifying-options-to-jest-image-snapshots
// Its primary function is to delay the screenshot being taken to prevent regressions due to mounting animations & images loading.
const beforeScreenshot = (_page, { context: { _kind, _story }, _url }) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 800),
  );

initStoryshots({
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../dist-storybook')}`,
    beforeScreenshot
  }),
});

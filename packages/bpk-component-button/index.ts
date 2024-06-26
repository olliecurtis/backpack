/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import BpkButtonDestructive from './BpkButtonDestructive';
import BpkButtonFeatured from './BpkButtonFeatured';
import BpkButtonLink from './BpkButtonLink';
import BpkButtonLinkOnDark from './BpkButtonLinkOnDark';
import BpkButtonPrimary from './BpkButtonPrimary';
import BpkButtonPrimaryOnDark from './BpkButtonPrimaryOnDark';
import BpkButtonPrimaryOnLight from './BpkButtonPrimaryOnLight';
import BpkButtonSecondary from './BpkButtonSecondary';
import BpkButtonSecondaryOnDark from './BpkButtonSecondaryOnDark';
import BpkButton from './src/BpkButton';
import { BpkButtonV2 } from './src/BpkButtonV2/BpkButton';

export { BUTTON_TYPES, SIZE_TYPES } from './src/BpkButtonV2/common-types';

export {
  buttonThemeAttributes,
  primaryThemeAttributes,
  primaryOnDarkThemeAttributes,
  primaryOnLightThemeAttributes,
  secondaryThemeAttributes,
  secondaryOnDarkThemeAttributes,
  featuredThemeAttributes,
  destructiveThemeAttributes,
} from './themeAttributes';

export default BpkButton;

export {
  BpkButtonPrimary,
  BpkButtonPrimaryOnDark,
  BpkButtonPrimaryOnLight,
  BpkButtonSecondary,
  BpkButtonSecondaryOnDark,
  BpkButtonDestructive,
  BpkButtonLink,
  BpkButtonLinkOnDark,
  BpkButtonFeatured,
  BpkButtonV2,
};

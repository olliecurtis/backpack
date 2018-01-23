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

const clearablePropType = (props, propName, componentName) => {
  const createError = message =>
    new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ${message}.`,
    );

  const propBeingChecked = props[propName];
  if (props.clearable) {
    // Prop is required if clearable=true.
    if (!propBeingChecked) {
      return createError(
        `When \`clearable={true}\`, \`${propName}\` must be supplied`,
      );
    }

    switch (propName) {
      case 'clearButtonLabel':
        return typeof propBeingChecked === 'string'
          ? null
          : createError(`\`clearButtonLabel\` must be a string`);
      case 'onClear':
        return typeof propBeingChecked === 'function'
          ? null
          : createError(`\`onClear\` must be a function`);
      default:
        return null;
    }
  }
  return null;
};

export default clearablePropType;

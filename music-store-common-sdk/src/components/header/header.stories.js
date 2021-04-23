import { html } from '@open-wc/testing';
import './index.js';
import { text, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';

export default {
  title: "ms-common-header",
  description: "Common Header Component for MFEs",
  component: 'ms-common-header',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const standard = () => html`<ms-common-header></ms-common-header>`;

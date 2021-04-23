import { css } from 'lit-element';

export const style = css`
    :host {
    background-color: #000;
    box-shadow: 0 2px 2px #e2e2e2 inset;
    display: block;
    color: #ffff;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  :host([hidden]) {
    display: none;
  }

  footer {
    margin: 0 auto;
  }

  .need-help {
    margin: 0 1.5em;
    padding: 0.5em 0;
    text-align: center;
  }

  h3 {
    font-size: 0.75em;
    font-weight: 300;
    width: 79em;
  }

  h4,
  h5 {
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.125;
  }

  .contact-hours {
    font-size: 0.5em;
    font-weight: 700;
    padding: 0.5rem 0;
    text-transform: uppercase;
  }

  @media (min-width: 60em) {
    footer {
      max-width: 60em;
    }

    h3 {
      font-size: 0.75em;
    }

    h4,
    h5 {
      font-size: 1.125em;
    }
  }

  .contact-options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    margin: 0 2em;
    text-align: center;
  }

  .contact-options li {
    flex: 1 1 auto;
    margin: 0 auto;
    max-width: 21em;
    position: relative;
  }

  .contact-options li:not(:last-of-type) {
    padding-bottom: 2em;
  }

  li svg {
    float: left;
    font-size: 1.5em;
    left: -24px;
    position: absolute;
  }

  li h5 {
    margin-bottom: 0.25em;
  }

  li p {
    font-size: 0.875em;
  }

  @media (min-width: 48em) {
    .contact-options {
      flex-flow: row wrap;
    }

    .contact-options li {
      margin: 0 0.75em;
    }
  }

  ms-common-disclosures {
    margin-bottom: 0.75em;
  }

  nav {
    font-size: 0.75em;
    padding: 0 2em;
  }

  nav a {
    border-bottom: 1px solid #d4d4d4;
    display: block;
    padding: 0.75em 0;
  }

  @media (min-width: 48em) {
    nav a {
      border-bottom: none;
      display: inline;
      padding: 0 0.75em 0 0;
    }
  }

  .logos {
    display: flex;
    flex-direction: column;
    font-size: 0.75em;
    justify-content: flex-start;
    padding: 1.125em 2em 0;
  }

  .copyright,
  svg {
    margin-bottom: 2em;
  }

  @media (min-width: 48em) {
    .logos {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  
  grv-link{
    font-weight: 500;
  }
`;

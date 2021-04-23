import { css } from 'lit-element';

export const style = css`
  :host {
    display: inline-block;
    z-index: 1000;
  }

  :host([hidden]) {
    display: none;
  }

  a {
    align-items: center;
    color: #141414;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    z-index: 1000;
  }

  a svg {
    height: 3em;
    width: 3em;
  }

  .menu-text {
    display: none;
    font-size: 0.75em;
    line-height: 3em;
  }

  @media (min-width: 48em) {
    .menu-text {
      display: inline;
    }
  }

  .menu-container {
    right: 0;
    position: absolute;
    top: 0;
    z-index: 997;
  }

  .menu-overlay {
    background-color: transparent;
    height: 100%;
    right: 0;
    position: fixed;
    top: 0;
    transition: all 0.3s linear;
    width: 100%;
    z-index: 998;
  }

  .hidden {
    display: none;
  }

  ul {
    background-color: var(--my-menu-bg-color, #141414);
    font-size: 1em;
    height: 100%;
    right: -19.25em;
    list-style-type: none;
    padding-top: 0.625em;
    position: fixed;
    top: 0;
    transition: all 250ms ease-in-out;
    visibility: hidden;
    width: 19.25em;
    z-index: 999;
  }

  ul.active {
    right: 0;
    visibility: visible;
  }

  li {
    color: #fff;
    position: relative;
  }

  li.menu-item {
    border-bottom: 1px solid #696969;
    font-weight: 300;
    margin: 0 1.5em;
  }

  .menu-item a {
    color: var(--my-menu-font-color, white);
    display: block;
    padding: 1.25em 0;
  }

  .menu-item svg {
    position: absolute;
    right: 0;
    top: 1.25em;
  }

  li:first-of-type {
    padding: 1em 1em 0 0;
  }

  li:nth-of-type(2) {
    margin-top: 3em;
  }

  li:nth-of-type(2) a {
    padding-top: 0;
  }

  li button {
    background-color: #141414;
    background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.748.174l10.668 10.668L23.084.174l1.023 1.022-10.669 10.668 10.669 10.669-1.023 1.022-10.668-10.668L1.748 23.555.726 22.533l10.668-10.669L.726 1.196z' fill='%23ffffff' fill-rule='nonzero'/%3E%3C/svg%3E");
    border-width: 0;
    color: #fff;
    float: right;
    height: 24px;
    width: 24px;
  }
`;

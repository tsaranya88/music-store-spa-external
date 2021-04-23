import { css } from 'lit-element';

export const style = css`
  ul {
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #ededed;
    padding: 10px 5px;
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 9999;
  }
  
  li {
    float: left;
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  li a {
    display: block;
    color: #111111;
    text-align: center;
    padding: 14px 2px 5px 2px;
    text-decoration: none;
    cursor: pointer;
    margin: 0 25px;
  }
  
  li a:hover {
    border-bottom: 4px solid rgb(37, 95, 130);
    border-radius: 2px;
    display: block;
    content: "";
  }
  
  .header{
    background: #111111;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
  }
  
  ms-common-menu{
    float: right;
  }
  
  .music{
    position: relative;
    top: -50px;
    padding-left: 55px;
    font-family: 'Herculanum';
    font-weight: bold;
  }
  
  .store {
    position: relative;
    top: -48px;
    padding-left: 54px;
    font-family: 'Herculanum';
    font-weight: bold;
  }
  
  .is-active {
    border-bottom: 4px solid rgb(37, 95, 130);
    border-radius: 2px;
    display: block;
    content: "";
  }
  
  .app-type {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
    padding: 16px 8px;
    top: 14px;
    position: relative;
  }
`;

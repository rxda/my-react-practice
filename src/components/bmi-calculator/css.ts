import {css} from "@emotion/react";

export const AppCss = css`
  body {
    background-color: #172b4d;
  }

  input {
    background-color: #fff !important;
    border-radius: 44px !important;
    width: 90% !important;
    padding: 0px 15px !important;
  }

  input:focus {
    border-bottom: none !important;
    box-shadow: none !important;
  }

  label {
    display: block;
    color: #fff !important;
    font-size: 1rem !important;
  }

  .calculate-btn {
    background-color: #3f51b5;
    padding: 15px 50px;
    color: white;
    font-size: 16px;
    border-radius: 44px;
    cursor: pointer;
    border: 1px solid #3f51b5;
    margin-bottom: 40px;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
  }

  .calculate-btn:hover {
    background-color: #fff;
    transform: translate(0px, -2px);
    color: #5364c3;
    box-shadow: 0px 15px 30px -12px rgba(255, 255, 255, 0.2);
  }

  .calculate-btn:focus {
    background-color: #32408f;
  }

  .calculate-btn:focus:hover {
    color: white;
  }

  .calculate-btn:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }

  .calculate-btn:disabled:hover {
    box-shadow: none;
    transform: translate(0, 0);
  }

  .data-container {
    background-color: #1f3a67;
    border-radius: 11px;
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .card {
    background-color: #274881 !important;
    color: white;
  }

  .card-title {
    font-weight: 500 !important;
    text-align: center;
  }

  .card-data {
    display: flex;
    justify-content: space-around;
  }

  .delete-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    font-weight: 700;
    padding: 5px 9px;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
  }

  .delete-btn:focus {
    background-color: #e74c3c;
  }
  
`


export const IndexCss = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`

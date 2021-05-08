import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

@font-face{
    font-family:'Baskervville-regular';S
    src:local('Baskervville-regular') local('Baskervville-regular');
    url:('./assets/Baskervville-Italic.ttf') format('ttf');

}

    body,
    html,
    a {
        font-family: 'Ubuntu',sans serif;
        
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #001540;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Ubuntu';
        color: #FAFAFA;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #FFB290;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
`;

export default Styles;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
    }

    .nav-link:hover {
        border-bottom: 9px solid ${({ theme }) => theme.color.navLinkHover};
        background-color: ${({ theme }) => theme.color.navLinkHover};
    }

    .nav-link a {
        color: ${({ theme }) => theme.color.navLinkHover};
    }
    
    .nav-link:hover a {
        color:  ${({ theme }) => theme.color.navLinkHoverA};
    }

    .photo-header {
        background-image: url(${({ theme }) => theme.headerImg});
    }

    .print-resume-btn {
        border-color: ${({ theme }) => theme.color.navLinkHover};
        color: ${({ theme }) => theme.color.textHeader};
    }

    .nav-link a {
        color: ${({ theme }) => theme.color.text};
    }

    .profile h4 {
        color: ${({ theme }) => theme.color.text};
    }

    .profile h2 {
        color: ${({ theme }) => theme.color.text};

    }

    .profile h3 {
        color: ${({ theme }) => theme.color.text};

    }

    .intro {
        background-color: ${({ theme }) => theme.color.introBg};
    }

    .intro h2 {
        color: ${({ theme }) => theme.color.text};
    }

    .contain h1 {
        color: ${({ theme }) => theme.color.textHeader};
    }

    .contain p {
        color: ${({ theme }) => theme.color.text};
    }

    .services {
        background-color: ${({ theme }) => theme.color.servicesBg};
    }

    .others-card {
        background-color: ${({ theme }) => theme.color.othersCard};
    }

    .end {
        background-color: ${({ theme }) => theme.color.endBg};
    }
    
    .card-connect h2 {
        color: #962218;
    }
    
    .card-connect:hover h2 {
        color :#ffedeb;
    }
    
    .connect-button {
        background-color: #85271e;
        border-color: #b43522;
    }
    
    .connect-button:hover {
        background-color: #b3382a;
        border-color: #ffded9;
    }
    
    .card-connect a {
        color: #ffcbc3;
    }
    

    .connect-card {
        background-color: #fce4e1;
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
        background-color: ${({ theme }) => theme.color.connectCard};
    }

    .connect-card:hover {
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardHoverShadow};
        height: auto;
        background-color: ${({ theme }) => theme.color.connectCardHover};
    }
    
    .connect-card:hover h2 {
        color: ${({ theme }) => theme.color.connectCardH2};
    }
    
    .connect-card:hover p {
        color: #ffcdc7;
    }
    
   
    
    .card-connect p {
        color: #70150d;
    }

    footer {
        background-color: ${({ theme }) => theme.color.footer};
    }
`

export default GlobalStyles
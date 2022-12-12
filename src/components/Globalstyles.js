import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
    }

    #sidebar {
        background: ${({ theme }) => theme.body};
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
    }

    .nav-sticky {
        background: ${({ theme }) => theme.body};
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
    }

    .sidebar-link {
        color: ${({ theme }) => theme.color.textSecondary};
    }

    .sidebar-link:hover {
        background-color: ${({ theme }) => theme.text};
        color: white;
    }

    .checkout {
        color: ${({ theme }) => theme.color.textSecondary};
    }

    .checkout:hover {
        color: ${({ theme }) => theme.text};
    }

    .top, .middle, .bottom {
        background-color: ${({ theme }) => theme.color.textSecondary};

    }

    .theme-selected {
        border-color: ${({ theme }) => theme.text};
        width: 150px;
        height: 150px;
        border-width: 20px;
    }

    .tag {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
        font-weight: bold;
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
        color: ${({ theme }) => theme.text};
    }

    .nav-link a {
        color: ${({ theme }) => theme.text};
    }

    .profile h4 {
        color: ${({ theme }) => theme.color.textSecondary};
    }

    .profile h2 {
        color: ${({ theme }) => theme.text};

    }

    .profile h3 {
        color: ${({ theme }) => theme.text};

    }

    .info {
        background-color: ${({ theme }) => theme.buttonAnimation.buttonBg};
        border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
    }

    @keyframes info {
        10%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
        50%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorderAnimation};
        }
        100%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
    }


    .info:hover {
        background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
    }

    @keyframes infoHover {
        10%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
            background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        }
        50%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverAnimationBorder};
            background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverAnimationBg};
        }
        100%{border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
            background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        }
    }
    

    .button-primary {
        background-color: ${({ theme }) => theme.buttonAnimation.buttonBg};
        border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
    }

    @keyframes button {
        10%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
        50%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorderAnimation};
        }
        100%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
    }

    .button-primary:hover {
        background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
    }

    @keyframes buttonHover {
        10%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
            background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        }
        50%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverAnimationBorder};
            background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverAnimationBg};
        }
        100%{border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
            background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        }
    }

    .info-end {
        background-color: ${({ theme }) => theme.buttonAnimation.buttonBg};
        border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
    }

    @keyframes infoEnd {
        10%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
        50%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorderAnimation};
        }
        100%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
    }

    .info-end:hover {
        background-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBg};
        border-color: ${({ theme }) => theme.buttonAnimation.buttonHoverBorder};
    }

    @keyframes infoEndHover {
        10%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
        50%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorderAnimation};
        }
        100%{
            border-color: ${({ theme }) => theme.buttonAnimation.buttonBorder};
        }
    }

    .card-right:hover {
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
    }

    .card-left:hover {
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
    }

    .inner {
        background-color: ${({ theme }) => theme.color.inner};
    }
    
    .inner.show {
        background-color: ${({ theme }) => theme.color.innerHoverBg};
    }

    .work-info-details {
        color: ${({ theme }) => theme.color.workYear};
    }

    

    .vl {
        background-color: ${({ theme }) => theme.color.verticalLine};
    }
    
    .vl:hover {
        background-color:  ${({ theme }) => theme.color.verticalLineHover};
    }

    .intro {
        background-color: ${({ theme }) => theme.color.introBg};
    }

    .intro h2 {
        color: ${({ theme }) => theme.text};
    }

    .contain h1 {
        color: ${({ theme }) => theme.color.textAlt};
    }

    .work-info-header {
        color: ${({ theme }) => theme.text};
    }

    .contain p {
        color: ${({ theme }) => theme.text};
    }

    .services {
        background-color: ${({ theme }) => theme.color.servicesBg};
    }

    .work-year-contain h2 {
        color: ${({ theme }) => theme.color.workYear};
    }

    .featured-btn {
        border-color: ${({ theme }) => theme.text};
    }

    .featured-alt-btn {
        border-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.text};
    }

    .others-card {
        background-color: ${({ theme }) => theme.color.othersCard};
    }

    .end {
        background-color: ${({ theme }) => theme.color.endBg};
    }
    
    .connect-button {
        background-color: ${({ theme }) => theme.color.connectCardButton};
        border-color: ${({ theme }) => theme.color.connectCardButtonBorder};
    }
    
    .connect-button:hover {
        background-color: ${({ theme }) => theme.color.connectCardButtonHover};
        border-color: ${({ theme }) => theme.color.connectCardButtonBorder};
    }
    
    .card-connect a {
        color: #ffcbc3;
    }

    .connect-card {
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
        background-color: ${({ theme }) => theme.color.connectCard};
    }

    .connect-card:hover {
        box-shadow: 0px 0px 60px ${({ theme }) => theme.color.connectCardShadow};
        height: auto;
        background-color: ${({ theme }) => theme.color.connectCardHover};
    }

    .connect-card h2 {
        color: ${({ theme }) => theme.text};
    }
    
    .connect-card p {
        color: ${({ theme }) => theme.color.textAlt};
    }

    footer {
        background-color: ${({ theme }) => theme.color.footer};
    }

    .footer-text {
        color: ${({ theme }) => theme.text};
    }

    .footer-cite {
        color: ${({ theme }) => theme.color.textAlt};
    }
`

export default GlobalStyles
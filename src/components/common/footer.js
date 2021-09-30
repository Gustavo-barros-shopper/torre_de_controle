import React from "react";

const Footer = props => {
    const year = (new Date()).getFullYear()
    return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 footer-copyright">
                    <p className="mb-0">Copyright {year} © Shopper Comércio Alimentício LTDA.</p>
                </div>
                <div className="col-md-6">
                    <p className="pull-right mb-0">
                        Feito com <i className="fa fa-heart"></i> pela equipe de tecnologia.
                    </p>
                </div>
            </div>
        </div>
</footer>
)};

export default Footer;
import React from 'react';

function Year() {
    return (
        new Date().getFullYear()
    );
}

function Footer(props) {
    return (
        <footer className="site-footer d-flex align-items-end" dark>
            <div className="container-fluid mb-2">
                <div className="row">             
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-md btn-white btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '} {/* the stuff in brackets creates whitespace*/}
                        <a className="btn btn-social-icon btn-md btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-md btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-md btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                        <p><i class="fa fa-copyright"/> copyright <Year /></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import React from 'react'

const Footer =(props)=>{
    const branding = props.branding;
    return (
        <div className="card text-center text-white bg-dark mt-5 position-fixed" style={{width:"100%" , bottom:"0"}}>
            <div className="card-header">
                <a href="/" className="text-decoration-none display-5 font-weight-bold" style={{color:'white'}}>{branding}</a>
            </div>
            <div class="card-body">
                <p className="card-text">Created by <a className="text-decoration-none" href="https://arpita-portfolio.vercel.app/">Arpita Varshneya</a></p>
            </div>
            <div className="card-footer text-muted">
            <a href="https://github.com/arpita1215/" className="text-decoration-none text-muted font-weight-bold">GitHub</a>
            </div>
        </div>
    )
}

Footer.defaultProps = {
    branding: 'MyApp'
  };

export default Footer;
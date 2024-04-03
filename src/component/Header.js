import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Component } from 'react';


class Header extends Component {
    state={clicked:false};
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
     
    render(){
        const url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgBnVNNTsJAFH5vpq1EMZmFYNjBCZQb4M4gC/AGLkwIbLyBHAETIe70BmBE467eQD0B7kjAxCb+hNDO1D7imEJsa/iSmXbmvXmZ933fIPxgVK3nIYSpk3IKD22H/oelE5ESUxGO5/oXL/RFmiaV5iP6sJAADEBJvyaVckzObViCD+BkbjtFHO3X86bJ7a2bTiGcMK402pSk19uDbiscfz1oDvkalBhEIHw4DsY8Obj+uHy8Ky3+e4h7sKMUXPsM8nEFWO6eyMAzZNal6XJbDwp+fll9SMC8hczgvOUZsuaack+P9w/rSKuQ2MJcBXdRBXPThXG5UQu4IKlEVIFEFVBBHxB7y2yrIJYNZDSiKmsVsnfdp8BIxSgjRcqoQS5Mp2cLBBsu700qjVPQHMRhY31WJbsSsXqPz5hARPvtsHmVWIB8IAGe9ZU1Aic6/2qBEKsCTX89Jh9BeJ4scsZEnAqoN1Z9zt85tqJmZ6aYSQAAAABJRU5ErkJggg==";
        const logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPOSURBVHgBnZgLUSwxEEVD1ROAA3AADkACEnAADsABOAAHgAJAAaAAHMAqmLenizPVm0omu9yqqfklndudTufO7O3v709ljcPDw3J8fFxOT0/LyclJ3Lfw8vJSPj4+yvv7e1z//PzEoQ3tYANba/tNO/R5fHwsr6+vYYv7y8vLUg4ODiA0rY1Mv+TiWL+cxPf393R9fb3xnmv6nJ+fz8fZ2Vk8sw0Hz+kvnp+fpzXRDTvaZQy8CSO5A2Q4g9vb27kD7a6urqbPz89pBPpDhvY1Eezx3DHe3t7i+cPDw0SY4iZ7ARhUA+tpmDv/BY4hkXqsu7u7eB/EGIib+/v7DTKQ4LkeYgQPdgF9dIrp5J7BiXoG7xgPFBrBnI4Als5rjgqdnOdtyZhPOgWMlnZoZ64FodyIyEACtq080dsczR50IJNpkZK4zgchBjessu55DVmit5TYsVo6ZGrn6jQoNetR8kIkT3HrPXZ674XOceQAlFGDFoxAizy54PSP4ILKeRmESGTzZ1vvWlEyOiZoD5YUVyG2DEIQ4qH5Y00YGW1FaZvoWFLMQ4NgKSh6lWvDzc3NXJl7xl2ueYthoKXoMjhEaMesiBxtNri5StadzaneMseIBc3yT4Rb5F00rZJCZJ222Dq4aYGOToPEsrG87RDh2jGu86Z8cXHRXDAbWwdejpK43qG5ZiDJQkYvMQ7RvOvTvp6BDKOLwyE/TOgRiA5EMrneQZvWRtqC+RgLBUKjFdWDocYh9z+83YZEDQn9KzsCZYdSVOkBlSPq8OnpqRwdHYVq7KnORWw7ZeZRrRpN+Na0kUf1QmjBHIqFkbXIEhEJqCbrlZVXHBsmaSBRzkuyxeK4qBjBSOmZO0By9f5GnmVirWjZN4q07LKhLK56tQPkymzYe5HIxGrFmAvsrBjNoyxfW1VX6EhusyRLatsSrzfkWTFaup2mpUIGVIR5CpZkicjRJ+GVPRuKMesSiIzEfE9m9GRJj1SrbpXs8UiaCsPeartNlHTKnT+j5AbWjiWM9PIuylOZ01WMNsgaJ8OpXapbud2S7lbSKNa6irH+bhJ+r/VqSQ2da+WZSQ2iGI4UY/0FYuHaloxgWvMHZ5aveeFsKEZ37Hogs9/lvSsZ4VT406KWryDvFiWX/0zG2pSr9V9kRd4LObecMiiRezRiTglhLb64Ntx24hneusHWYEBsZYfcC31PlBhTO/nLY/5hlSVF/j+UByJR6x9STkNLgkCePq3fLy3Vybh7v3UFYiGqOEb4+voKccavvfxLD4GW7fR+5wn6YYdjtVpF3/+23FhVAC8tdgAAAABJRU5ErkJggg==";
        
    return(
        <>
            <div className="top">
                <div className='top-text'>
                    <img src={url} alt="icon" className="icon-img" id='icon-img1'/>
                    <p className='para' id='para1'>Lorem ipsum dolor</p>
                </div>
                <div className='top-text'>
                    <img src={url} alt="icon" className="icon-img" id='icon-img2'/>
                    <p className='para'>Lorem ipsum dolor</p>
                </div>
                <div className='top-text'>
                    <img src={url} alt="icon" className="icon-img" id='icon-img3'/>
                    <p className='para' id='para3'>Lorem ipsum dolor</p>
                </div>
            </div>
            <div id="header">
                <div className="hearder-nav">
                    <div className='test'>
                        <div id='mobile' onClick={this.handleClick}>
                            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <div className="header-logo">
                            <img src={logo} alt="logo"></img>
                        </div>
                    </div>
                    <div className='header-text'>
                        <h1>LOGO</h1>
                    </div>
                    <div className="nav-icons">
                        <FontAwesomeIcon  icon={faSearch} />
                        <FontAwesomeIcon  icon={faHeart} />
                        <FontAwesomeIcon  icon={faShoppingBag} />
                        <FontAwesomeIcon className='iconss' icon={faUser} />
                        <select id='engDropdown' >
                            <option>Eng</option>
                        </select>
                    </div>
                </div>
                <div id='nav'>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href='index.html'>SHOP</a></li>
                            <li><a href='index.html'>SKILLS</a></li>
                            <li><a href='index.html'>STORIES</a></li>
                            <li><a href='index.html'>ABOUT</a></li>
                            <li><a href='index.html'>CONTACT US</a></li>
                            
                        </ul>
                    </div>
                    {/* <div id='mobile' onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div> */}
                </div>
                
            </div><hr/>
            <div id='page-heading'>
                <p id='heading'>DISCOVER OUR PRODUCT</p>
                <p className='heading_info'>Lorem ipsum {'\n'}dolor sit amet consectetur. Amet est posuere rhoncus </p>
                <p className='heading_info'><span>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</span></p>
            </div><hr id='main-hr'/>
        </>
    );
};
}
export {Header};
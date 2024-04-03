import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState,useEffect } from "react";

function MainContainer(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('RECOMMENDED');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const [product,setProduct]=useState([]);
  const fetchData =()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        setProduct(data)
    });
  }
  useEffect(()=>{
    fetchData();
  },[])
  // Sidebar dropdown 
  const [isSidebarDropdownOpen1, setIsSidebarDropdownOpen1] = useState(false);
    const [selectedSidebarOption1, setSelectedSidebarOption1] = useState('IDEAL FOR');

    const [isSidebarDropdownOpen2, setIsSidebarDropdownOpen2] = useState(false);
    const [selectedSidebarOption2, setSelectedSidebarOption2] = useState('OCCASION');

    const [isSidebarDropdownOpen3, setIsSidebarDropdownOpen3] = useState(false);
    const [selectedSidebarOption3, setSelectedSidebarOption3] = useState('WORK');
    const [isSidebarDropdownOpen4, setIsSidebarDropdownOpen4] = useState(false);
    const [selectedSidebarOption4, setSelectedSidebarOption4] = useState('FABRIC');
    const [isSidebarDropdownOpen5, setIsSidebarDropdownOpen5] = useState(false);
    const [selectedSidebarOption5, setSelectedSidebarOption5] = useState('SEGMENT');
    const [isSidebarDropdownOpen6, setIsSidebarDropdownOpen6] = useState(false);
    const [selectedSidebarOption6, setSelectedSidebarOption6] = useState('SUITABLE FOR');
    const [isSidebarDropdownOpen7, setIsSidebarDropdownOpen7] = useState(false);
    const [selectedSidebarOption7, setSelectedSidebarOption7] = useState('PATTERN');
    const [isSidebarDropdownOpen8, setIsSidebarDropdownOpen8] = useState(false);
    const [selectedSidebarOption8, setSelectedSidebarOption8] = useState('MATERIAL');

    const toggleSidebarDropdown1 = () => {
        setIsSidebarDropdownOpen1(!isSidebarDropdownOpen1);
    };
    const handleSidebarOptionSelect1 = (option) => {
        setSelectedSidebarOption1(option);
        setIsSidebarDropdownOpen1(false);
    };

    const toggleSidebarDropdown2 = () => {
        setIsSidebarDropdownOpen2(!isSidebarDropdownOpen2);
    };

    const handleSidebarOptionSelect2 = (option) => {
        setSelectedSidebarOption2(option);
        setIsSidebarDropdownOpen2(false);
    };
    const toggleSidebarDropdown3 = () => {
        setIsSidebarDropdownOpen3(!isSidebarDropdownOpen3);
    };
    const handleSidebarOptionSelect3 = (option) => {
        setSelectedSidebarOption3(option);
        setIsSidebarDropdownOpen3(false);
    };
    
    const toggleSidebarDropdown4 = () => {
        setIsSidebarDropdownOpen4(!isSidebarDropdownOpen4);
    };
    const handleSidebarOptionSelect4 = (option) => {
        setSelectedSidebarOption4(option);
        setIsSidebarDropdownOpen4(false);
    };
    
    const toggleSidebarDropdown5 = () => {
        setIsSidebarDropdownOpen5(!isSidebarDropdownOpen5);
    };
    const handleSidebarOptionSelect5 = (option) => {
        setSelectedSidebarOption5(option);
        setIsSidebarDropdownOpen5(false);
    };
    
    const toggleSidebarDropdown6 = () => {
        setIsSidebarDropdownOpen6(!isSidebarDropdownOpen6);
    };
    const handleSidebarOptionSelect6 = (option) => {
        setSelectedSidebarOption6(option);
        setIsSidebarDropdownOpen6(false);
    };
    
    const toggleSidebarDropdown7 = () => {
        setIsSidebarDropdownOpen7(!isSidebarDropdownOpen7);
    };
    const handleSidebarOptionSelect7 = (option) => {
        setSelectedSidebarOption7(option);
        setIsSidebarDropdownOpen7(false);
    };
    
    const toggleSidebarDropdown8 = () => {
        setIsSidebarDropdownOpen8(!isSidebarDropdownOpen8);
    };
    const handleSidebarOptionSelect8 = (option) => {
        setSelectedSidebarOption8(option);
        setIsSidebarDropdownOpen8(false);
    };
  
    return(
        <>
            <div className="main-cont">
                <div className="cont-head">
                    <div id="left-head">
                        <p className="hide-filterr">3425 ITEMS</p>
                        <p id="filter">FILTER</p>
                        <a href="#" className="hide-filter">HIDE FILTER</a>
                    </div>
                    <div className="right-head">
                        <div className="dropdown">
                            <button className={`dropbtn ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                            {selectedOption} <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
                            </button>
                            {isDropdownOpen && (
                            <div className="dropdown-content">
                                <span onClick={() => handleOptionSelect('Recommended')}>Recommended</span>
                                <span onClick={() => handleOptionSelect('Newest First')}>Newest First</span>
                                <span onClick={() => handleOptionSelect('Popular')}>Popular</span>
                                <span onClick={() => handleOptionSelect('Price - Low to High')}>Price - Low to High</span>
                                <span onClick={() => handleOptionSelect('Price - High to Low')}>Price - High to Low</span>
        
                            </div>
                            )}
                        </div>
                    </div>
                </div><hr/>
                <div className="full-cont">
                    <div className="body-container">
                        <div className="sidebar">
                            <div className="sidebar-item">
                                <input type="checkbox" id="category1" />
                                <label htmlFor="category1">CUSTOMIZABLE</label>
                            </div><hr className="sidebar-hr"/>
                            <div className="dropdown">
                    <button className={`sidebar-dropbtn ${isSidebarDropdownOpen1 ? 'active' : ''}`} onClick={toggleSidebarDropdown1}>
                    {selectedSidebarOption1} <i className={`fas fa-chevron-${isSidebarDropdownOpen1 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen1 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect1('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect1('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect1('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect1('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                )}
            </div>

            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen2 ? 'active' : ''}`} onClick={toggleSidebarDropdown2}>
                    {selectedSidebarOption2} <i className={`fas fa-chevron-${isSidebarDropdownOpen2 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen2 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect2('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect2('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect2('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect2('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                    
                )}
            </div>
            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen3 ? 'active' : ''}`} onClick={toggleSidebarDropdown3}>
                    {selectedSidebarOption3} <i className={`fas fa-chevron-${isSidebarDropdownOpen3 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen3 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect3('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect3('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect3('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect3('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                )}
            </div>

            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen4 ? 'active' : ''}`} onClick={toggleSidebarDropdown4}>
                    {selectedSidebarOption4} <i className={`fas fa-chevron-${isSidebarDropdownOpen4 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen4 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect4('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect4('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect4('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect4('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                 )}
            </div>
            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen5 ? 'active' : ''}`} onClick={toggleSidebarDropdown5}>
                    {selectedSidebarOption5} <i className={`fas fa-chevron-${isSidebarDropdownOpen5 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen5 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect5('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect5('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect5('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect5('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                )}
            </div>

            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen6 ? 'active' : ''}`} onClick={toggleSidebarDropdown6}>
                    {selectedSidebarOption6} <i className={`fas fa-chevron-${isSidebarDropdownOpen6 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen6 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect6('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect6('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect6('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect6('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                )}
            </div>
            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen7 ? 'active' : ''}`} onClick={toggleSidebarDropdown7}>
                    {selectedSidebarOption7} <i className={`fas fa-chevron-${isSidebarDropdownOpen7 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen7 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect7('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect7('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect7('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect7('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                )}
            </div>

            <div className="dropdown">
                <button className={`sidebar-dropbtn ${isSidebarDropdownOpen8 ? 'active' : ''}`} onClick={toggleSidebarDropdown8}>
                    {selectedSidebarOption8} <i className={`fas fa-chevron-${isSidebarDropdownOpen8 ? 'up' : 'down'}`}></i>
                </button>
                {isSidebarDropdownOpen8 && (
                    <div className="sidebar-dropdown-content">
                        <h3 className="all">All</h3>
                        <span onClick={() => handleSidebarOptionSelect8('Unselect All')}>Unselect all</span>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect8('Man')} />
                            Man
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect8('Women')} />
                            Women
                        </label>
                        <label>
                            <input className="idealfor" type="checkbox" onChange={() => handleSidebarOptionSelect8('Baby & Kids')} />
                            Baby & Kids
                        </label>
                        <hr className="sidebar-hr" />
                    </div>
                )}
            </div>





         {/* ITEM CONT */}
            </div>
                </div>
                    <div className="item-cont">
                        {product.map((item)=>{
                            return(
                                <div className="items">
                                    <div className="img">
                                        <img src={item.image}></img>
                                        <p>{item.category}</p>
                                        <div id="all-desc">
                                            <div className="descr">
                                            <a href="#" id="signin">Sign in</a>
                                            </div>
                                            <div className="descr">
                                            <p id="about">or Create an account to see price</p>
                                            
                                            </div>
                                            <div className="descr">
                                            <FontAwesomeIcon className="heart-icon" icon={faHeart} />
                                            </div>
                                            
                                        </div>
                                        <p id="about1">or Create an account to see pricing</p>
                                        
                                        
                                    </div>
                                </div>  
                            )
                        })}
                    </div>
                </div>
               
            </div>

        </>
    );
};
export default MainContainer;
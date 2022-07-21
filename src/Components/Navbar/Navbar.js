import { Avatar } from '@mantine/core';

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="left-side">
        <div className="sub-left-side">
          <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" className='flag' alt=""/>
          <a className="emblem-text-a" href="/">
            <div className='english-marathi-text-left'>
              <div className='text-align'>
                <p className='left-side-text'>भारत सरकार</p>
              </div>
              <div className='text-align'>
                <p className='left-side-text'>Government of India</p> 
              </div>
            </div>
            <div className='divider'>
              |
            </div>
            <div className='english-marathi-text-right'>
              <div className='text-align'>
                <p className='right-side-text'>कार्मिक, लोक शिकायत और पेंशन मंत्रालय</p>
              </div>
              <div className='text-align'>
                <p className='right-side-text'>Ministry of Personnel, Public Grievances &#38; Pensions</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="sub-right-side">
          <div className="top-nav-right"><Avatar size="md" src={"https://img.icons8.com/external-filled-outline-perfect-kalash/64/000000/external-contact-us-e-commerce-and-shopping-filled-outline-perfect-kalash.png"} alt="no image here" /><div className='nav-list'>Contact Us</div></div>
          <div className="top-nav-right"><Avatar size="md" src={"https://img.icons8.com/doodle/100/000000/person-at-home.png"} alt="no image here" /><div className='nav-list'>Home</div></div>
          <div className="top-nav-right"><Avatar size="md" src={"https://img.icons8.com/office/100/000000/about-us-male--v2.png"} alt="no image here" /><div className='nav-list'>About Us</div></div>
          <div className="top-nav-right"><Avatar size="md" src={"https://img.icons8.com/office/16/000000/faq.png"} alt="no image here" /><div className='nav-list'>FAQ/Help</div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
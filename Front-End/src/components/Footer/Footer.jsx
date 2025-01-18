import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMessage,
  FaPhone,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  const categories = [
    'Groceries & Pets', 'Health & Beauty', "Men's Fashion", "Women's Fashion",
    'Mother & Baby', 'Home & Lifestyle', 'Electronic Devices', 'Electronic Accessories',
    'TV & Home Appliances', 'Sports & Outdoor', 'Watches, Bags & Jewellery',
    'Automotive & Motorbike',
  ];

  const companyLinks = [
    'About Us', 'Affiliate Program', 'Shipping & Returns',
    'Help and Support', 'Contact Us', 'Terms of Service', 'Privacy Policy',
  ];

  const availableCountries = [
    'Pakistan', 'United States', 'United Kingdom',
    'Canada', 'Australia', 'India', 'Germany', 'South Africa',
  ];

  const customerServiceLinks = ['FAQs', 'Order Tracking', 'Shipping Information'];

  return (
    <footer className="footer">
      <div className="footer_content">
        {/* Company Details */}
        <div className="company_details">
          <h1 className="logo">Romo Store</h1>
          <div className="footer_contact_us">
            <span>
              <FaPhone aria-label="Phone" />
              <p>
                Call Us: <a href="tel:021-111-123456">021-111-123456</a>
              </p>
            </span>
            <span>
              <FaMessage aria-label="Email" />
              <p>
                Mail Us: <a href="mailto:info@logo.com">info@logo.com</a>
              </p>
            </span>
          </div>
          <div className="footer_follow_us">
            <h2>Follow Us</h2>
            <div className="footer_follow_us_icons">
              <FaFacebook className="social_icon facebook_icon" aria-label="Facebook" />
              <FaInstagram className="social_icon instagram_icon" aria-label="Instagram" />
              <FaYoutube className="social_icon youtube_icon" aria-label="YouTube" />
              <FaXTwitter className="social_icon Xtwitter_icon" aria-label="Twitter" />
            </div>
          </div>
        </div>

        {/* Categories Links */}
        <nav className="categories_links footer_section">
          <h2>CATEGORIES</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to="#">{category}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company Links */}
        <nav className="footer_section company_links">
          <h2>COMPANY</h2>
          <ul>
            {companyLinks.map((link) => (
              <li key={link}>
                <Link to="#">{link}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Available Countries */}
        <nav className="footer_section available_countries">
          <h2>AVAILABLE COUNTRIES</h2>
          <ul>
            {availableCountries.map((country) => (
              <li key={country}>
                <Link to="#">{country}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Customer Service */}
        <nav className="footer_section customer_service">
          <h2>CUSTOMER SERVICE</h2>
          <ul>
            {customerServiceLinks.map((service) => (
              <li key={service}>
                <Link to="#">{service}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright Bar */}
      <div className="copy_right_bar">
        <p>&copy; 2024 Faisal Rahman. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information:</h3>
              <p>Emergency Hotline: 98645XXXXX</p>
              <p>Email: support@net.com</p>
              <p>Address: New Delhi, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links:</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Resources</li>
                <li>Emergency Preparedness</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with Us:</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources:</h3>
              <ul>
                <li>Emergency Plans</li>
                <li>Disaster Recovery Tips</li>
                <li>Community Guidelines</li>
                <li>Latest Updates</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Stay Informed:</h3>
            <p>Subscribe to our newsletter for timely updates on disaster preparedness and response.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
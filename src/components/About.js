import React from 'react';
import './About.css'; // Make sure to import your CSS file for styling
import { Link } from 'react-router-dom';
import im1 from 'C:/Users/mohammed tauseef/OneDrive/Desktop/New folder/react/yubitesting/client/src/im1.webp'
import { useProductContext } from '../context/Productcontext';

const About = () => {
  const {myName} = useProductContext();
  return (
    <div>
      {myName}
      <div className="header">
        <h1>Yubi Apparels</h1>
        <p>A Shopping Site<br/> Discover Your own Fashion.</p>
      </div>

      <div className="navbar">
        <Link to="/Home" className="active">Home</Link>
        <Link to="/Login" className="right">Login</Link>
      </div>

      <div className="row">
        <div className="side" style={{background:'#1c1c1c',color:'white'}}>
          <h2>About Us</h2>
          <h5>Mens Clothing</h5>
          <div className="fakeimg" style={{ height: '200px' }}>Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg" style={{ height: '60px' }}>Image</div><br />
          <div className="fakeimg" style={{ height: '60px' }}>Image</div><br />
          <div className="fakeimg" style={{ height: '60px' }}>Image</div>
        </div>
        <div className="main">
          <h2>About Yubi Apparels</h2>
          <h5>Welcome to Yubi Apparels, your ultimate destination for all things fashion. We're not just a clothing store; we're a fashion haven where style meets affordability.</h5>
          <div> <img src={im1} alt="Fashion" style={{ height: '300px',width:'100%' }}></img> </div>

          
          <p>At Yubi Apparels, we believe that everyone deserves to look and feel their best without breaking the bank. Our mission is to provide you with the latest trends and timeless classics, all curated with a keen eye for quality and style. We understand that fashion is more than just clothing; it's a form of self-expression, and we're here to help you make a statement.</p>
          <br />
          <h2>Our Story</h2>
          <h5>Yubi Apparels was born out of a passion for fashion.</h5>
          <div className="fakeimg" style={{ height: '200px' }}>Image</div>
          
          <p> Our founder, Mohammed Ayub, always had a vision of creating a place where people could find a wide variety of clothing options that suit their unique tastes, all in one convenient location. What started as a small dream has now become a reality, thanks to the dedication and hard work of our team.</p>
          <br/>
          <h2>Our  Commitment</h2>
          <h5>We're committed to providing you with an exceptional shopping experience. Here's what you can expect from Yubi Apparels:</h5>
          <div className="fakeimg" style={{ height: '200px' }}>Image</div>
          <ol>
            <li>Quality: We carefully select every item in our collection to ensure it meets our high standards for quality and durability.</li>
            <li>Affordability: We believe that looking stylish shouldn't cost a fortune. We strive to offer competitive prices without compromising on quality.</li>
            <li>Variety: From trendy outfits to timeless classics, we offer a wide range of clothing options to suit every occasion and style.</li>
            <li>Customer Satisfaction: Your satisfaction is our top priority. Our friendly and responsive customer support team is here to assist you every step of the way.</li>
            <li>Sustainability: We're committed to sustainable and ethical practices. We work with manufacturers who share our values to reduce our environmental impact. </li>
          </ol>
          <br/>
          <h2> Join the Yubi Apparels Community</h2>
          <p>
            
             We invite you to be a part of the Yubi Apparels community. Connect with us on social media to stay updated on the latest fashion trends, promotions, and style tips. Your feedback and suggestions are invaluable to us as we continuously strive to enhance your shopping experience.
            Thank you for choosing Yubi Apparels. We're excited to be a part of your fashion journey, and we can't wait to help you express your unique style. Happy shopping!
            If you have any specific details you'd like to add or any particular tone you want to convey, feel free to customize this content to align with your brand's personality and values.
            </p>
            <br/>
          
          <h2>
          Be Part of Our Community
          </h2>
          <p>
          We value the sense of belonging and community, and we want you to be a part of it. Follow us on our social media platforms to stay connected and engaged with Yubi Apparels. Here, you'll find a vibrant space to explore the latest fashion trends, discover style inspiration, and gain access to exclusive promotions and offers. Join the conversation, share your unique fashion moments, and be inspired by our community of fashion enthusiasts from around the world.
          </p>
          <br/>
          <h2>
          Your Voice Matters
          </h2>
          <p>
          At Yubi Apparels, your opinions and suggestions matter to us more than you can imagine. We believe in the power of feedback and the role it plays in improving our services. Your insights help us understand your needs better and enable us to enhance your shopping experience continually. If you have any ideas, comments, or thoughts you'd like to share, please don't hesitate to reach out to us. We're all ears and eager to make your Yubi Apparels experience even better.
          </p>
          <br/>
          <h2>
          Once Again, Thank You
          </h2>
          <p>
          We can't emphasize this enough – thank you for choosing Yubi Apparels. It's a privilege to be a part of your fashion journey. Every time you shop with us, you're not just adding to your wardrobe; you're becoming a part of our story. We're here to help you express your unique style, find the perfect outfit for any occasion, and make fashion a delightful and accessible experience.
          <br/>
          <br/>
          So, go ahead, explore our collections, stay connected, and have a fantastic shopping experience with Yubi Apparels. We look forward to being your trusted fashion companion, ready to serve you with the latest styles, affordable choices, and top-notch service.
          <br/>
          Happy shopping, and let's make every outfit a statement of your individuality!
          </p>



        </div>
      </div>
    </div>
  );
}

export default About;

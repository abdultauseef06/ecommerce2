import React, { useEffect, useState } from 'react';
import './Admin.css'; // Import your CSS file for styling

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);
  const [displayType, setDisplayType] = useState('orders'); // Default to 'orders'
  const [imageDetails, setImageDetails] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    slug:"",
    id:"",
    price: 0,
    colors: [],
    image:[],
    description: '',
    category: '',
    stock: 0,
    reviews: 0,
    stars: 0,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ecommerce-server-blue.vercel.app/api/contacts/contacts");

        if (response.ok) {
          const data = await response.json();
          setMessages(data.contacts);
        } else {
          console.log("Error fetching messages");
        }
      } catch (error) {
        console.error('Error in fetch:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://ecommerce-server-blue.vercel.app/api/orders/orders");

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.log("Error fetching orders");
        }
      } catch (error) {
        console.error('Error in fetch:', error); 
      }
    };

    fetchOrders();

  }, []); 

  const handleDisplayTypeChange = (type) => {
    setDisplayType(type);
  };

  // Function to generate a unique ID
const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  

  


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const loadImage = new Image();

    loadImage.onload = () => {
      const details = {
        id: generateUniqueId(),
        width: loadImage.width,
        height: loadImage.height,
        url: URL.createObjectURL(file),
        filename: file.name,
        size: file.size,
        type: file.type,
        
      };
      setSelectedImage(details);
      setImageDetails(details);
    };

    loadImage.src = URL.createObjectURL(file);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value, image: imageDetails });
  };



  const handleNewProductSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    const emptyFields = Object.entries(newProduct)
    .filter(([key, value]) => value === '')
    .map(([key]) => key);

  if (emptyFields.length > 0 || !selectedImage) {
    alert(`Please fill in the following fields: ${emptyFields.join(', ')}`);
    
  }

    try {
      const response = await fetch("https://ecommerce-server-blue.vercel.app/api/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log('Product added successfully');
      } else {
        console.log('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error in fetch:', error);
    }

    console.log('New Product data:', newProduct);
    
    // Reset the form after submission
    setNewProduct({
      name: '',
      price: 0,
      colors: [],
      image:[],
      description: '',
      category: '',
      stock: 0,
      reviews: 0,
      stars: 0,
    });
  };

  return (
    <>
      <div className="filter-buttons">
        <button onClick={() => handleDisplayTypeChange('orders')}>Orders</button>
        <button onClick={() => handleDisplayTypeChange('contacts')}>Contacts</button>
        <button onClick={() => handleDisplayTypeChange('addNewProduct')}>Add New Product</button>
      </div>
      <div className="admin-container">
        {displayType === 'contacts' && (
          <div className="messages-section">
            <h2>Contact Messages</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message, index) => (
                  <tr key={index}>
                    <td>{message.username}</td>
                    <td>{message.email}</td>
                    <td>{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {displayType === 'orders' && (
          <div className="orders-section">
            <h2>Orders</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Products</th>
                  <th>Address</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order._id}</td>
                    <td>{order.username}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>
                      <ul>
                        {order.products.map((product, productIndex) => (
                          <li key={productIndex}>
                            {product.productName} - {product.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      {order.addresses[0].FlatNo}, {order.addresses[0].street}, {order.addresses[0].city}
                    </td>
                    <td>{order.amount}</td>
                    <td>{order.status}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {displayType === 'addNewProduct' && (
          <div className="add-new-product-section">
            <h2>Add New Product</h2>
            <form onSubmit={handleNewProductSubmit}>
              
              <label>
                Name:
                <input type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} />
              </label>
              <label>
                slug:
                <input type="text" name="slug" value={newProduct.slug} onChange={handleNewProductChange} />
              </label>
              <label>
                ID:
                <input type="text" name="id" value={newProduct.id} onChange={handleNewProductChange} />
                </label>
              <label>
                price:
                <input type="text" name="price" value={newProduct.price} onChange={handleNewProductChange} />
              </label>
              <label>
                colors:
                <input type="text" name="colors" value={newProduct.colors} onChange={handleNewProductChange} />
              </label>
                <label>
                 Image:
                <input type="file" accept="image/*" name="image" onChange={handleImageChange} multiple />
                </label>

              <label>
                Description:
                <input type="text" name="description" value={newProduct.description} onChange={handleNewProductChange} />
              </label>
              <label>
                Category:
                <input type="text" name="category" value={newProduct.category} onChange={handleNewProductChange} />
              </label>
              <label>
                stock:
                <input type="text" name="stock" value={newProduct.stock} onChange={handleNewProductChange} />
              </label>

              

              <button type="submit">Add Product</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;

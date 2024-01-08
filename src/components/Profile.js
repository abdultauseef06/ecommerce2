import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';


const UserProfile = () => {
  const user = useAuth();
  console.log("order",user.user.Orders);

  const styles = `
    .userProfileContainer {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f0f8ff; /* Alice Blue */
      color: #333; /* Text color */
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    header {
      text-align: center;
      margin-bottom: 20px;
    }

    h1 {
      color: #333;
    }

    .profileSection,
    .orderHistorySection {
      margin-bottom: 20px;
    }

    .profileInfo {
      background-color: #fff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
    }

    .profilePicture {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 20px;
    }

    .dummyProfilePicture {
      width: 100px;
      height: 100px;
      background-color: #ddd;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: #555;
      margin-right: 20px;
    }

    .profileDetails {
      flex-grow: 1;
    }

    .username,
    .email,
    .address {
      margin-bottom: 10px;
    }

    .adminBtn,
    .logoutBtn {
      color: #f0f8ff; /* Alice Blue */
      background-color: #333;
      border: none;
      padding: 10px;
      font-size: 15px;
      width: 100px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .adminBtn:hover,
    .logoutBtn:hover {
      background-color: #555;
    }

    .orderHistorySection {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }

    .orderCard {
      background-color: #f0f8ff; /* Alice Blue */
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      padding: 15px;
    }

    .orderID {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
    }

    .productsList {
      list-style: none;
      padding: 0;
    }

    .productDetails {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 10px 0;
    }

    .productImage {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 8px;
    }

    .productName {
      font-weight: bold;
      margin-right: 10px;
    }

    .productInfo {
      display: flex;
      flex-direction: column;
      text-align: right;
    }

    .productColor,
    .productQuantity,
    .productID {
      color: #777;
      font-size: 14px;
    }

    .productPrice {
      color: green;
    }

    .noProducts {
      margin-top: 10px;
      color: #777;
    }
  `;

  return (
    <div className="userProfileContainer" style={{ position: 'relative' }}>
      <style>{styles}</style>
      <header>
        <h1>Yubi Apparels</h1>
      </header>

      <section className="profileSection">
        <h2>User Profile</h2>
        <div className="profileInfo">
          {user.user.profilePicture ? (
            <img
              className="profilePicture"
              src={user.user.profilePicture}
              alt="Profile"
            />
          ) : (
            <div className="dummyProfilePicture">A</div>
          )}
          <div className="profileDetails">
            <p className="username">
              <strong>Username:</strong> {user.user.username}
            </p>
            <p className="email">
              <strong>Email:</strong> {user.user.email}
            </p>
            <p className="address">
  <strong>Address:</strong>{' '}
  {user.user.addresses && user.user.addresses.length > 0 ? (
    <>
      <span>{user.user.addresses[0].FlatNo},</span>
      <span>{user.user.addresses[0].street},</span>
      <span>{user.user.addresses[0].city},</span>
      <span>{user.user.addresses[0].state},</span>
      <span>{user.user.addresses[0].zipCode},</span>
      <span>{user.user.addresses[0].country}</span>
    </>
  ) : (
    <>
      No address available{' '}
    </>
  )}
</p>
            {user.user.isAdmin && (
              <p>
                <NavLink to="/Admin">
                <button className="adminBtn">Admin</button>
                </NavLink>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="orderHistorySection">
        <h2>Order History</h2>
        {user.user.Orders && user.user.Orders.length > 0 ? (
          user.user.Orders.map((order, orderIndex) => (
            <div key={orderIndex} className="orderCard">
              <p className="orderID">
                <strong>Order ID:</strong> {order._id}
              </p>
              <ul className="productsList">
                {order.products && order.products.length > 0 ? (
                  order.products.map((product, productIndex) => (
                    <li key={productIndex} className="productDetails">
                      <img
                        className="productImage"
                        src={product.image}
                        alt={`Product ${product.productId}`}
                      />
                      <div className="productInfo">
                        <span className="productName">{product.productName || "Product Name"}</span>
                        <span className="productColor">
                          <strong>Color:</strong> {product.color || "N/A"}
                        </span>
                        <span className="productQuantity">
                          <strong>Quantity:</strong> {product.quantity || 0}
                        </span>
                        <span className="productID">
                          <strong>Product ID:</strong> {product.productId || "N/A"}
                        </span>
                      </div>
                      <span className="productPrice">{product.price}Rs.</span>
                    </li>
                  ))
                ) : (
                  <p className="noProducts">No products in this order.</p>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>You haven't ordered anything yet.</p>
        )}
      </section>

      <NavLink to="/Logout" activeClassName="activeClassName">
        <button className="logoutBtn">Logout</button>
      </NavLink>
    </div>
  );
};

export default UserProfile;

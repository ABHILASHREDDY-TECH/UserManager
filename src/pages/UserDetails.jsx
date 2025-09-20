import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  // Find the selected user
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return <p style={{ textAlign: 'center' }}>User not found!</p>;

  return (
    <div className="user-details-container">
      <div className="user-details-card">
        <h2>{user.name}</h2>
        <p>📧 {user.email}</p>
        <p>📞 {user.phone}</p>
        <p>🏢 {user.company?.name}</p>
        <p>🏠 {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>
        <p>🌍 Lat: {user.address?.geo?.lat}, Lng: {user.address?.geo?.lng}</p>
      </div>
    </div>
  );
};

export default UserDetails;

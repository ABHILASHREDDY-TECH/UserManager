import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import SearchBar from '../components/SearchBar';
import CreateUserForm from '../components/CreateUserForm';

const Dashboard = () => {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h2 style={{ textAlign: 'center', margin: '15px 0', color: '#1e3a8a' }}>Create New User</h2>
      <CreateUserForm />

      <div className="user-cards-container">
        {filteredUsers.map(user => (
          <div className="user-details-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>📞 {user.phone}</p>
            <p>🏢 {user.company?.name}</p>
            <p>🏠 {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>
            <p>🌍 Lat: {user.address?.geo?.lat}, Lng: {user.address?.geo?.lng}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

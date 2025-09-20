import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const CreateUserForm = () => {
  const { addUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: { name: '' } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'company') {
      setFormData({ ...formData, company: { name: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ name: '', email: '', phone: '', company: { name: '' } });
  };

  return (
    <form onSubmit={handleSubmit} className='create-user-form'>
      <input name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
      <input name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
      <input name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} required />
      <input name='company' placeholder='Company' value={formData.company.name} onChange={handleChange} required />
      <button type='submit'>Create User</button>
    </form>
  );
};

export default CreateUserForm;
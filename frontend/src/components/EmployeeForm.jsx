import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const EmployeeForm = () => {
  const { id } = useParams();
  const isEditMode = !!id;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    salary: '',
    joiningDate: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode) {
      fetchEmployee();
    }
  }, [id]);

  const fetchEmployee = async () => {
    try {
      const response = await api.get(`/employees/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching employee", error);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ''))) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.designation) newErrors.designation = "Designation is required";
    if (!formData.salary || formData.salary <= 0) newErrors.salary = "Valid salary is required";
    if (!formData.joiningDate) newErrors.joiningDate = "Joining date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (isEditMode) {
          await api.put(`/employees/${id}`, formData);
        } else {
          await api.post('/employees', formData);
        }
        navigate('/employees');
      } catch (error) {
        console.error("Error saving employee", error);
        alert("Error saving employee");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>{isEditMode ? 'Edit Employee' : 'Add New Employee'}</h2>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="input-field" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="input-field" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="text" name="phone" className="input-field" value={formData.phone} onChange={handleChange} />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Joining Date</label>
              <input type="date" name="joiningDate" className="input-field" value={formData.joiningDate} onChange={handleChange} />
              {errors.joiningDate && <p className="error-text">{errors.joiningDate}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Department</label>
              <input type="text" name="department" className="input-field" value={formData.department} onChange={handleChange} />
              {errors.department && <p className="error-text">{errors.department}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Designation</label>
              <input type="text" name="designation" className="input-field" value={formData.designation} onChange={handleChange} />
              {errors.designation && <p className="error-text">{errors.designation}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Salary</label>
              <input type="number" name="salary" className="input-field" value={formData.salary} onChange={handleChange} />
              {errors.salary && <p className="error-text">{errors.salary}</p>}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="submit" className="btn btn-primary">{isEditMode ? 'Update Employee' : 'Save Employee'}</button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/employees')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Mail, Phone, Building, Briefcase, Calendar, DollarSign } from 'lucide-react';
import api from '../api';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      const response = await api.get(`/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="animate-fade-in">Loading...</div>;
  if (!employee) return <div className="animate-fade-in">Employee not found.</div>;

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button className="btn btn-outline" style={{ marginBottom: '1.5rem' }} onClick={() => navigate('/employees')}>
        <ArrowLeft size={18} /> Back to List
      </button>

      <div className="glass-panel" style={{ padding: '3rem', position: 'relative' }}>
        <button 
          className="btn btn-primary" 
          style={{ position: 'absolute', top: '2rem', right: '2rem' }}
          onClick={() => navigate(`/edit/${employee.id}`)}
        >
          <Edit size={16} /> Edit
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', borderBottom: '1px solid var(--panel-border)', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
            {employee.name.charAt(0)}
          </div>
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>{employee.name}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{employee.designation} at {employee.department}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px' }}>
              <Mail color="var(--primary)" />
            </div>
            <div>
              <p className="form-label" style={{ marginBottom: 0 }}>Email Address</p>
              <p>{employee.email}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px' }}>
              <Phone color="var(--primary)" />
            </div>
            <div>
              <p className="form-label" style={{ marginBottom: 0 }}>Phone Number</p>
              <p>{employee.phone}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px' }}>
              <Calendar color="var(--primary)" />
            </div>
            <div>
              <p className="form-label" style={{ marginBottom: 0 }}>Joining Date</p>
              <p>{employee.joiningDate}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px' }}>
              <DollarSign color="var(--primary)" />
            </div>
            <div>
              <p className="form-label" style={{ marginBottom: 0 }}>Salary</p>
              <p>${employee.salary.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;

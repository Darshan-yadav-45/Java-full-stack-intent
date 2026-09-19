import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Plus, TrendingUp } from 'lucide-react';
import api from '../api';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    } finally {
      setLoading(false);
    }
  };

  const departments = [...new Set(employees.map(e => e.department))];
  const recentEmployees = [...employees].slice(0, 5); // Assuming already sorted DESC from DB

  if (loading) {
    return <div className="animate-fade-in">Loading dashboard...</div>;
  }

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Dashboard Overview</h2>
        <Link to="/add" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          <Plus size={18} /> Add New Employee
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%' }}>
            <Users color="var(--primary)" size={24} />
          </div>
          <div>
            <p className="form-label" style={{ marginBottom: 0 }}>Total Employees</p>
            <h3>{employees.length}</h3>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '50%' }}>
            <Briefcase color="var(--success)" size={24} />
          </div>
          <div>
            <p className="form-label" style={{ marginBottom: 0 }}>Departments</p>
            <h3>{departments.length}</h3>
          </div>
        </div>
        
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '1rem', borderRadius: '50%' }}>
            <TrendingUp color="var(--danger)" size={24} />
          </div>
          <div>
            <p className="form-label" style={{ marginBottom: 0 }}>Average Salary</p>
            <h3>
              ${employees.length > 0 
                ? (employees.reduce((sum, e) => sum + e.salary, 0) / employees.length).toFixed(2) 
                : '0.00'}
            </h3>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Recently Added Employees</h3>
        <table className="modern-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {recentEmployees.map(emp => (
              <tr key={emp.id}>
                <td>#{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
              </tr>
            ))}
            {recentEmployees.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

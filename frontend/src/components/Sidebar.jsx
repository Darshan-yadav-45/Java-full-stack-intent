import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserPlus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar glass-panel">
      <div>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users color="var(--primary)" /> EmpManage
        </h2>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LayoutDashboard size={20} />
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/employees" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Users size={20} />
            Employees
          </div>
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <UserPlus size={20} />
            Add Employee
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

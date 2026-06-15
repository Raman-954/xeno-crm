import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/customers').then(res => setCustomers(res.data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Customers</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-slate-400">
            <tr><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Spend</th></tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c._id} className="border-t border-slate-800">
                <td className="p-4">{c.name}</td>
                <td className="p-4">{c.email}</td>
                <td className="p-4 text-emerald-400">${c.totalSpend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerList;
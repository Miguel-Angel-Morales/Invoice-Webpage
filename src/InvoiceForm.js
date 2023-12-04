// src/InvoiceForm.js
import React, { useState } from 'react';
import './Invoice.css'; // Import the CSS file

const InvoiceForm = () => {
    const [hoursOfWork, setHoursOfWork] = useState('');
    const [workExpenses, setWorkExpenses] = useState('');
    const [materials, setMaterials] = useState('');
    const [labor, setLabor] = useState('');
    const [notes, setNotes] = useState('');

    const handleSend = () => {
        // Implement the logic to send the invoice data
        console.log('Sending invoice:', {
            hoursOfWork,
            workExpenses,
            materials,
            labor,
            notes,
        });
    };

    return (
        <div className="invoice-container">
            <label className="invoice-label">
                Hours of Work:
                <input type="number" value={hoursOfWork} onChange={(e) => setHoursOfWork(e.target.value)} />
            </label>
            <br />
            
            <label>
                Work Related Expenses:
                <input type="number" value={workExpenses} onChange={(e) => setWorkExpenses(e.target.value)} />
            </label>
            <br />

            <label>
                Materials:
                <input type="text" value={materials} onChange={(e) => setMaterials(e.target.value)} />
            </label>
            <br />

            <label>
                Labor:
                <input type="text" value={labor} onChange={(e) => setLabor(e.target.value)} />
            </label>
            <br />

            <label>
                Notes:
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </label>
            <br />
            <button className="invoice-button" onClick={handleSend}>
                Send
            </button>
        </div>
    );
};

export default InvoiceForm;

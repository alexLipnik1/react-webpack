/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
// import InoviceOrder from './components/invoice_order/Invoice_order.jsx';
import ControlPanel from './components/control_panel/Control_panel.jsx';

ReactDOM.render(<ControlPanel lines={[
    {id:0, NotificationName: "invoiceOpend",   email: true,  sms: false },
    {id:1, NotificationName: "invoiceClosed",  email: true,  sms: false },
    {id:2, NotificationName: "MoneyTransferd", email: false, sms: false },
]} columns={['email', 'sms']} />, document.getElementById('root'));

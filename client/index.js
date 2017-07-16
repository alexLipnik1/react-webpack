/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
// import InoviceOrder from './components/invoice_order/Invoice_order.jsx';
import ControlPanel from './components/control_panel/Control_panel.jsx';

ReactDOM.render(<ControlPanel lines={[
    {id:0, NotificationName: "invoiceOpend",   email: false,  sms: false, fax: true, mail: true  },
    {id:1, NotificationName: "invoiceClosed",  email: true,  sms: true, fax: false, mail: true },
    {id:2, NotificationName: "MoneyTransferd", email: false, sms: false, fax: true, mail: false },
]} columns={['id', 'NotificationName', 'sms', 'email', 'fax', 'mail']} />, document.getElementById('root'));

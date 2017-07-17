/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
// import InoviceOrder from './components/invoice_order/Invoice_order.jsx';
import ControlPanel from './components/ControlPanel/ControlPanel.jsx';

ReactDOM.render(
	<ControlPanel lines={[
		{label: "1", sms: false, email: true, mail: true},
		{label: "2", sms: false, email: true, mail: true, asd:true},
		{label: "3", email: true, sms: true, mail: true},
	]} columns={['sms', 'email', 'fax', 'asd', 'mail']} />, document.getElementById('root')
);

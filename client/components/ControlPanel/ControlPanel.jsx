import React from 'react';

import styles from './ControlPanel.scss';

const Type = (props) => (
	<div className={styles.type}>{props.children}</div>
);

const Label = (props) => (
	<div className={styles.label}>{props.children}</div>
);

const Header = (props) => (
	<div className={styles.header}>
		<div className={styles.cell} />
		{props.columns.map((c) => <Type key={c}>{c}</Type>)}
	</div>
)

const Cell = (props) => (
	<div className={styles.cell}><input type="checkbox" defaultChecked={props.checked} /></div>
)

const Line = (props) => (
	<div className={styles.line}>
		<Label>{props.line.label}</Label>
		{props.columns.map(c => <Cell key={c} checked={props.line[c]} />)}
	</div>
)

const Lines = (props) => (
	<div>
		{props.lines.map((l,i) =>
			<Line key={i} line={l} columns={props.columns} />
		)}
	</div>
)

export default class ContorlPanel extends React.Component {
	render(){
		const { lines, columns } = this.props;
		return (
			<div className={styles.container}>
				<Header columns={columns} />
				<Lines lines={lines} columns={columns} />
			</div>
		);
	}
}

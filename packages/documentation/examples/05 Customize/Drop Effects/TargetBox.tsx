import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget, ConnectDropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style: React.CSSProperties = {
	border: '1px solid gray',
	height: '15rem',
	width: '15rem',
	padding: '2rem',
	textAlign: 'center',
}

const boxTarget = {
	drop() {
		//
	},
}

export interface TargetBoxProps {
	connectDropTarget?: ConnectDropTarget
	isOver?: boolean
	canDrop?: boolean
}

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
}))
export default class TargetBox extends React.Component<TargetBoxProps> {
	public static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
	}

	public render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		return (
			connectDropTarget &&
			connectDropTarget(
				<div style={style}>
					{isActive ? 'Release to drop' : 'Drag item here'}
				</div>,
			)
		)
	}
}

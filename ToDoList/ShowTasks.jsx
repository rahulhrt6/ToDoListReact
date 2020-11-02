import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ShowTasks = (props) => {

	const { taskList, handleDeleteTask, handleCompleteTask } = props;

	return(
		<>
			<h3>Pending Tasks</h3>
			{
				taskList.map((task, index) => {
					return(
						<div
							key={index}
							className='row-container'
						>
							<button 
								className="ui green button small"
								style={{ width: '10%', marginRight: '1%' }}
								onClick={() => handleCompleteTask(index)}
							>Done</button>
							<div className='task-list-row' style={{ width: '30%', marginRight: '1%' }}>{task.taskName || 'No Name'}</div>
							<div className='task-list-row' style={{ width: '10%', marginRight: '1%' }}>{task.priority}</div>
							<div className='task-list-row' style={{ width: '20%', marginRight: '1%' }}>
								{task.date}
								<Icon className='large' style={{marginLeft: '1em'}} name='calendar alternate outline' color='teal'/>
							</div>
							<div className='task-list-row' style={{ width: '10%', marginRight: '1%' }}>
								{task.time}
								<Icon className='large' style={{marginLeft: '0.5em'}} name='clock outline' color='teal'/>
							</div>
							<button 
								className="ui blue button small"
								style={{ width: '10%', marginRight: '1%' }}
								data-tooltip={task.details || 'No Details Provided'}
								data-position="top right"
							>
								Details
							</button>
							<Icon
								className='big'
								name='trash alternate'
								color='red'
								style={{ cursor: 'pointer' }}
								onClick={() => handleDeleteTask(index)}
							/>
						</div>
					);
				})
			}
			<div className="ui divider"></div>
		</>
	);
}

export default ShowTasks;
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const priorities = [
  { key: 1, text: 'Low' },
  { key: 2, text: 'Normal' },
  { key: 3, text: 'High' },
]

const AddNewTask = (props) => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [popupOpen, setPopupOpen] = useState(false);
	const [taskName, setTaskName] = useState('');
	const [priority, setPriority] = useState('Normal');
	const [date, setDate] = useState(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
	const [time, setTime] = useState('12:00');
	const [details, setDetails] = useState('');

	const { handleAddNewTask } = props;

	const handleAddTask = () => {
		setShowAddTask(!showAddTask);
	}

	const handleSubmitTask = () => {
		setTaskName('');
		setPriority('Normal');
		setDate(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
		setTime('12:00');
		setDetails('');
		// put validation for empty fields
		handleAddNewTask({ taskName, priority, date, time, details });
		setShowAddTask(!showAddTask);
	}

	const handleCancelDetails = () => {
		setDetails('');
		setPopupOpen(false);
	}

	return(
			<div>
				<Dialog
					open={popupOpen}
					onClose={() => setPopupOpen(false)}
					aria-labelledby="form-dialog-title"
					maxWidth="xs"
					fullWidth
				>
					<div className='popup-header'>Please add task details...</div>
					<textarea
						value={details}
						className='popup-text'
						onChange={(event) => setDetails(event.target.value)}
					/>
					<DialogActions>
          <button
						onClick={handleCancelDetails}
						className="ui red button small">
            Cancel
          </button>
          <button
						className="ui green button small"
						onClick={() => setPopupOpen(false)}
					>
            Submit
          </button>
        </DialogActions>
				</Dialog>

				<button
					className={ showAddTask ? "ui red button small" : "ui teal button small" }
					onClick={handleAddTask}
				>
					{
						showAddTask ? 'Cancel' : 'Add Task'
					}
				</button>
				<br/><br/>
				{
					showAddTask
					?
						<div>
							<input
								type='text'
								className='task-input'
								placeholder='Add your task...'
								value={taskName}
								onChange={(event) => setTaskName(event.target.value)}
							/>
							<select defaultValue=''
								className='priority-dropdown'
								onChange={(event) => {setPriority(event.target.value)}}
							>
								<option value='' disabled hidden>Priority</option>
								{ 
									priorities.map((priority) => {
										const { key, text } = priority;
										return <option value={text} key={key}>{text}</option>
									})
								}
							</select>
							<input
								type="date"
								className='task-date'
								onChange={(event) => setDate(event.target.value)}
							/>
							<input
								type="time"
								className='task-date'
								onChange={(event) => setTime(event.target.value)}
							/>

							<button 
								className="ui blue button small"
								style={{ width: '10%', marginRight: '1%' }}
								onClick={() => setPopupOpen(true)}
							>Details</button>
							
							<button 
								className="ui green button small"
								style={{ width: '10%', margin: '0' }}
								onClick={handleSubmitTask}
							>Add</button>
							
						</div>
					:
					null
				}
				<div className="ui divider"></div>
		</div>
	)
}

export default AddNewTask;
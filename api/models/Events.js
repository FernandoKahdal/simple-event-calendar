/*---------------------
	:: Events
	-> model
---------------------*/
module.exports = {
	attributes : {
		id : 'INT',
		title : 'STRING',
		start : 'DATE',
		end : 'DATE',
		allDay : {
			type: 'BOOL',
			defaultsTo: false
		}
	}
};

const storage_name = 'some_local_storage';
const local_storage = {
	set: (prop_name, value) => {		
		let ls = localStorage.getItem(storage_name) ? JSON.parse(localStorage.getItem(storage_name)) : {};
		ls[prop_name] = value;
		localStorage.setItem(storage_name, JSON.stringify(ls));
	},
	get: (prop_name) => {
		if (!prop_name){
			return localStorage.getItem(storage_name) ? JSON.parse(localStorage.getItem(storage_name)) : {};
		}
		let ls = JSON.parse(localStorage.getItem(storage_name));
		return (ls&&ls[prop_name])?ls[prop_name]:false;
	},
	reset: () => {
		localStorage.setItem(storage_name, JSON.stringify({}));
	}
};
	// local_storage.reset();
export default local_storage;
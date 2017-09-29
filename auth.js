import local_storage from './local_storage';
const auth = {
	check: function(token_name){
		return !!local_storage.get(token_name);
	},
	login: function(token_name, token_value){
		local_storage.set(token_name, token_value);
	},
	logout: function(){
		local_storage.reset();
	},
	get_auth_data: function(token_name){
		return local_storage.get(token_name);
	}
};
export default auth;
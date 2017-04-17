class User < ActiveRecord::Base
	has_secure_password
	self.table_name = 'users'
end
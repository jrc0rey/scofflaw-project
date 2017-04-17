require 'bcrypt'

class UserController < ApplicationController

get '/' do
	erb :register_login	
end

post '/register' do
	username = params[:regUsername]
	checkUser = User.find_by(username: username)
	if checkUser 
		@message = "Username taken"
		erb :register_login
	else	
	@user = User.new
	@user.username = params[:regUsername]
	@user.password = params[:regPassword]
	@user.save
	@user.to_json
	puts session
	redirect '/scofflaw/nycmap'
	end
end

post '/login' do
	username = params[:loginUsername]
	password = params[:loginPassword]
	user = User.find_by(username: username)
	if user && user.authenticate(password)
		session[:logged_in] = true
		session[:username] = username
		session[:user_id] = user.id
		redirect '/scofflaw/nycmap'
	else 
		@message = "Incorrect username or password"
		erb :register_login
	end
end



end
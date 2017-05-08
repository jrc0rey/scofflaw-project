class DataMapController < ApplicationController


get '/' do
	if session[:logged_in] 
		erb :data
	else 
		redirect '/scofflaw/welcome'
	end
end

get '/times' do
	@ticket = Ticket.all
	@ticket.to_json
end



end
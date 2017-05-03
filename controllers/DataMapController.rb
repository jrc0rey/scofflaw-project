class DataMapController < ApplicationController

get '/' do
	erb :data
end

get '/times' do
	@ticket = Ticket.all
	@ticket.to_json
end



end
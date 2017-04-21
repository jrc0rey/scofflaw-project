class DataMapController < ApplicationController

get '/' do
	erb :data
end

get '/times' do
	@ticket = Ticket.all
end



end
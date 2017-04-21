class MapController < ApplicationController

get '/' do
	erb :mapPage
end

post '/' do
	@ticket = Ticket.new
	@ticket.lat = params[:lat]
	@ticket.lng = params[:lng]
	@ticket.ticket_time = params[:ticket_time]
	@ticket.address = params[:address]
	@ticket.save
	'item was saved'
end

get '/tickets' do
	@ticket = Ticket.all
	@ticket.to_json
end

get '/logout' do
	session.destroy
	redirect '/scofflaw/welcome'
end

end
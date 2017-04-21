require 'sinatra/base'

require ('./controllers/ApplicationController')
require ('./controllers/UserController')
require ('./controllers/MapController')
require ('./controllers/DataMapController')

require('./models/UserModel')
require('./models/TicketModel')

map ('/') {run ApplicationController}
map ('/scofflaw/welcome') {run UserController}
map ('/scofflaw/nyc-map') {run MapController}
map ('/scofflaw/data-map') {run DataMapController}




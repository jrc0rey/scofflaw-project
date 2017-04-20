require 'sinatra/base'

require ('./controllers/ApplicationController')
require ('./controllers/UserController')
require ('./controllers/MapController')

require('./models/UserModel')
require('./models/TicketModel')

map ('/') {run ApplicationController}
map ('/scofflaw/welcome') {run UserController}
map ('/scofflaw/nycmap') {run MapController}




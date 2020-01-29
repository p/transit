require 'sinatra'
require 'json'

class App < Sinatra::Base
  set :strict_paths, false

  get '/' do
    render_json(ok: true)
  end

  private def render_json(payload)
    set_cors_headers
    JSON.pretty_generate(payload)
  end

  options '*' do
    set_cors_headers
    ''
  end

  private def set_cors_headers
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "content-type"
  end
end

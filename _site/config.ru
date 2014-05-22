require 'bundler'
require 'rack/contrib/try_static'

Bundler.setup
Bundler.require

use Rack::Deflater
use Rack::Static, 
  :urls => ["/img", "/css", "/js"],
  :root => "_site"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('_site/index.html', File::RDONLY)
  ]
}

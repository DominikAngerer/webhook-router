const http = require('http')
const axios = require('axios')

const environments = [
  'https://environment-1/purge',
  'https://environment-2/purge',
  'https://environment-3/purge',
  'https://environment-4/purge'
]
const port = 3000
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
      let text_body = ''

      req.on('data', (data) => {
        text_body += data;
      });

      req.on('end', () => {
        let request_body = JSON.parse(text_body)
        console.log('Request Payload: ' + text_body)

        for (let index = 0; index < environments.length; index++) {
          axios.post(environments[index], request_body)
            .then((response) => {
            console.log(response)
          })
        }
      })

      // end with 204 - no content
      res.writeHead(204, { 'Content-Type': 'application/json' })
      res.end()
      
    } else {
        let html = '<html><head><title>Webhook Proxy</title></head><body>Your Webhook Proxy is running</body></html>'
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(html)
    }

})

server.listen(port, host)

console.log('Listening at http://' + host + ':' + port)

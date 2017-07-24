import bunyan from 'bunyan'
import Auth from '../libs/Auth'
import config from '../config'

const log = bunyan.createLogger(config.logger.options)

export default function Logout(req, res) {
  new Auth({session: req.session}).logout()
  return res.redirect("/")
}

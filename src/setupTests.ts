import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
global.fetch = require('node-fetch')

configure({ adapter: new Adapter() })

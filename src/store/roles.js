import createCrudModule from './createCrudModule'
import EntityApi from '../api/EntityApi'

export default createCrudModule({ api: new EntityApi('roles') })

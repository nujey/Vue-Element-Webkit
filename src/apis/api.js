import { fetch } from './fetch'
import api from './url'

export function lookOption(issuer, userId) {
  return fetch({
    url: api.Cc,
    method: 'get',
    params: {
      currentUserId: userId
    }
  })
}

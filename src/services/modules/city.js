import fyRequest from '../request/index'

export function getAllCitiesData() {
  return fyRequest.get({
    url: 'city/all',
  })
}

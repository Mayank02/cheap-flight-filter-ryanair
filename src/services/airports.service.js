import { AIRPORT_LIST_API } from '../constants/index';

export const AirportsService = ['$http', $http => ({
  find: () => $http.get(
      AIRPORT_LIST_API,
      {}
    ).then(response => response.data.airports).catch(() => [])
})];

export default AirportsService;

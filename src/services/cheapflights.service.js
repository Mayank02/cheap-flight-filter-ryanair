import { CHEAP_FLIGHT_API } from '../constants/index';

export const CheapFlightService = ['$http', ($http) =>  {
  return {
    find: (criteria) => {
      if (typeof criteria.start === 'undefined' || typeof criteria.end === 'undefined'
        || typeof criteria.origin === 'undefined' || typeof criteria.destination === 'undefined') {
        return Promise.resolve([]);
      }

      return $http.get(
          `${CHEAP_FLIGHT_API}/from/${criteria.origin}/to/${criteria.destination}/${criteria.start}/${criteria.end}
          /250/unique/?limit=15&offset-0`,
          {}
        )
        .then(response => response.data.flights)
        .catch(() => Promise.resolve([]));
    }
  };
}];

export default CheapFlightService;

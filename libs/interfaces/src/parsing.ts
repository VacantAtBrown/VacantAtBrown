import { Location } from './models';

export function parseLocation(location: string): Location {
  if (!location) {
    return {
      building: 'CIT',
      room: location,
    };
  }
  if (location.includes('CIT'))
    return {
      building: 'CIT',
      room: location,
    };
  else
    return {
      building: 'CIT',
      room: location,
    };
}

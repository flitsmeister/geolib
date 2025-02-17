import { GeolibInputCoordinates, LatitudeKeys } from './types';
import { latitudeKeys } from './constants';
import getCoordinateKey from './getCoordinateKey';
import toDecimal from './toDecimal';

const getLatitude = (point: GeolibInputCoordinates, raw?: boolean) => {
    return point.latitude;
};

export default getLatitude;

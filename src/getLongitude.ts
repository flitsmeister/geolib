import { GeolibInputCoordinates, LongitudeKeys } from './types';
import { longitudeKeys } from './constants';
import getCoordinateKey from './getCoordinateKey';
import toDecimal from './toDecimal';

const getLongitude = (point: GeolibInputCoordinates, raw?: boolean) => {
    return point.longitude;
};

export default getLongitude;

import {ListOfReports} from "./ListOfReports";

test('Check that null distance is 0', () => {
    expect(ListOfReports.distance(0, 0, 0, 0, 'K')).toBe(0)
});

test('Check that distance is the same https://www.lexilogos.com/calcul_distances.htm', () => {
    let lat1 = 47.47116159999999;
    let long1 = -0.5518256999999949;
    let lat2 = 50.8503396;
    let long2 = 4.351710300000036;
    Math.round(expect(ListOfReports.distance(lat1,long1, lat2, long2, 'K')).toBe(517.7504359082828));
});


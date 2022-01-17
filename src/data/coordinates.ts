const coordinates = [
	// kasachstan - ukraine
	{
		startLat: 47.6549572,
		startLng: 57.9405634,
		endLat: 48.2486046,
		endLng: 26.6937776,
	},
	// norwegen - italien
	{
		startLat: 61.2648013,
		startLng: 9.8268893,
		endLat: 43.7799528,
		endLng: 11.2059486,
	},
	// oman - Kandalakscha
	{
		startLat: 21.386699,
		startLng: 51.6588148,
		endLat: 67.1637442,
		endLng: 32.3276412,
	},
	// tshad - italien
	{
		startLat: 15.4008641,
		startLng: 14.2406597,
		endLat: 37.5581087,
		endLng: 14.2753022,
	},
	// schweiz - portugal
	{
		startLat: 47.1544187,
		startLng: 8.0914555,
		endLat: 38.7436214,
		endLng: -9.1952226,
	},
	// somalia - westsahara
	{
		startLat: 9.5080898,
		startLng: 49.0770541,
		endLat: 24.0583415,
		endLng: -15.3058677,
	},
	// schweiz - südamerika
	{
		startLat: 47.1544187,
		startLng: 8.0914555,
		endLat: 11.4052774,
		endLng: -69.6899916,
	},
	// marrakesh - new york
	{
		startLat: 31.634545,
		startLng: -8.1479359,
		endLat: 40.6974034,
		endLng: -74.119763,
	},
	// sierra leone - natal
	{
		startLat: 8.4159214,
		startLng: -14.0813598,
		endLat: -5.7999017,
		endLng: -35.3623283,
	},
	// niger - mexiko
	{
		startLat: 16.7586638,
		startLng: -10.2126075,
		endLat: 19.3905191,
		endLng: -99.4237963,
	},
	// paraguay - usa
	{
		startLat: -23.4228666,
		startLng: -57.469136,
		endLat: 28.4808861,
		endLng: -81.6228463,
	},
	// ecuador - lybien
	{
		startLat: 26.558635682774174,
		startLng: -9.468889226541124,
		endLat: -0.1865921,
		endLng: -78.7107241,
	},
	// misouri - kanada
	{
		startLat: 37.72061091484639,
		startLng: -93.3475225675098,
		endLat: 61.54358192210186,
		endLng: -110.56775571687868,
	},
	// grönland - misouri
	{
		startLat: 78.33338855238347,
		startLng: -42.643896930896865,
		endLat: 37.72061091484639,
		endLng: -93.3475225675098,
	},
	// südamerika - südamerika
	{
		startLat: -11.350724956511002,
		startLng: -39.552424504754974,
		endLat: 5.124851030020895,
		endLng: -66.71060923804123,
	},
	// mexiko - misouri
	{
		startLat: 19.294541003975667,
		startLng: -99.62350304782976,
		endLat: 37.72061091484639,
		endLng: -93.3475225675098,
	},
	// new york - misouri
	{
		startLat: 40.6974034,
		startLng: -74.119763,
		endLat: 37.72061091484639,
		endLng: -93.3475225675098,
	},
	// misouri - florida
	{
		startLat: 37.72061091484639,
		startLng: -93.3475225675098,
		endLat: 28.4808861,
		endLng: -81.6228463,
	},
	// usa right - usa middle
	{
		startLat: 33.94610453818679,
		startLng: -80.03730290560846,
		endLat: 40.6266592786952,
		endLng: -108.57803638298357,
	},
	{
		startLat: 41.266666666667,
		startLng: 69.366666666667,
		endLat: 37.472222222222,
		endLng: 126.60833333333,
	},
	{
		startLat: 37.472222222222,
		startLng: 126.60833333333,
		endLat: 3.116666666666,
		endLng: 101.7,
	},
	{
		startLat: 3.11666666666,
		startLng: 101.7,
		endLat: 1.2916666666667,
		endLng: 103.85,
	},
	{
		startLat: 3.11666666666,
		startLng: 101.7,
		endLat: 1.2916666666667,
		endLng: 103.85,
	},
	{
		startLat: 3.11666666666,
		startLng: 101.7,
		endLat: -8.75,
		endLng: 115.16666666667,
	},
	{
		startLat: -8.75,
		startLng: 115.16666666667,
		endLat: 3.116666666666,
		endLng: 101.7,
	},
	{
		startLat: 3.11666666666,
		startLng: 101.7,
		endLat: 13.9255,
		endLng: 100.5923,
	},
	{
		startLat: 13.69,
		startLng: 100.7501,
		endLat: 56.05,
		endLng: 92.9,
	},
	{
		startLat: 56.05,
		startLng: 92.9,
		endLat: 55.033333333333,
		endLng: 83,
	},
	{
		startLat: 55.033333333333,
		startLng: 83,
		endLat: 42.85,
		endLng: 74.583333333,
	},
	{
		startLat: 42.85,
		startLng: 74.583333333,
		endLat: 43.35,
		endLng: 77.033333333333,
	},
	{
		startLat: 43.35,
		startLng: 77.033333333333,
		endLat: 37.472222222222,
		endLng: 126.60833333333,
	},
	{
		startLat: 42.85,
		startLng: 74.583333333,
		endLat: 43.35,
		endLng: 77.033333333333,
	},
	{
		startLat: 43.35,
		startLng: 77.033333333333,
		endLat: 13.69,
		endLng: 100.7501,
	},
	{
		startLat: 37.472222222222,
		startLng: 126.60833333333,
		endLat: 13.9255,
		endLng: 100.5923,
	},
	{
		startLat: 13.9255,
		startLng: 100.5923,
		endLat: 37.472222222222,
		endLng: 126.60833333333,
	},
	{
		startLat: 13.9255,
		startLng: 100.5923,
		endLat: 37.472222222222,
		endLng: 126.60833333333,
	},
	{
		startLat: 13.69,
		startLng: 100.7501,
		endLat: 37.472222222222,
		endLng: 126.60833333333,
	},
];

export default coordinates;

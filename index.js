var gql = require('gql');
var isMale = require('genoset-male');

module.exports = function(dna) {
	if (!isMale(dna)) { // This is equivalent to gs145.
		return false;
	}
	var query = gql.and([
		gql.only('rs6625163', 'A'),
		gql.or([
			gql.only('rs1160312', 'A'),
			gql.exact('rs1160312', 'AG'),
			gql.and([
				gql.only('rs201571', 'T'),
				gql.only('rs6036025', 'G')
			])
		])
	]);
	return query(dna);
};

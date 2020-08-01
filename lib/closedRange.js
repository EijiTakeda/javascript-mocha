class ClosedRange {
	constructor(lowerEndpoint, upperEndpoint) {
		if (Number.isInteger(lowerEndpoint)) {
			this.lowerEndpoint = lowerEndpoint;
		}
		if (Number.isInteger(upperEndpoint)) {
			this.upperEndpoint = upperEndpoint;
		}
		if (this.lowerEndpoint > this.upperEndpoint) {
			this.lowerEndpoint = undefined;
			this.upperEndpoint = undefined;
		}
	}
}

module.exports = ClosedRange;
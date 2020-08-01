class ClosedRange {
	constructor(lowerEndpoint, upperEndpoint) {
    if (Number.isInteger(lowerEndpoint) && Number.isInteger(upperEndpoint)
      && this.lowerEndpoint < this.upperEndpoint) {
      this.lowerEndpoint = lowerEndpoint;
      this.upperEndpoint = upperEndpoint;
		}
	}
}

module.exports = ClosedRange;
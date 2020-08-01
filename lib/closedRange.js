class ClosedRange {
    constructor(lowerEndpoint, upperEndpoint) {
			if(Number.isInteger(lowerEndpoint)) {
				this.lowerEndpoint = lowerEndpoint;
			}
			this.upperEndpoint = upperEndpoint;
    }
}
  
module.exports = ClosedRange;
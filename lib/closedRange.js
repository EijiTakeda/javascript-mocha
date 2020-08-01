class ClosedRange {
    constructor(lowerEndpoint, upperEndpoint) {
			if(Number.isInteger(lowerEndpoint)) {
				this.lowerEndpoint = lowerEndpoint;
            }
            if(Number.isInteger(upperEndpoint)){
                this.upperEndpoint = upperEndpoint;
            }
    }
}
  
module.exports = ClosedRange;
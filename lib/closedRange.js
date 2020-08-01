class ClosedRange {
  constructor(lowerEndpoint, upperEndpoint) {
    if (
      Number.isInteger(lowerEndpoint) &&
      Number.isInteger(upperEndpoint) &&
      lowerEndpoint < upperEndpoint
    ) {
      this.lowerEndpoint = lowerEndpoint;
      this.upperEndpoint = upperEndpoint;
    }
  }
}

module.exports = ClosedRange;

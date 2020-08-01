const assert = require('assert');

const ClosedRange = require('../lib/closedRange');

describe('ClosedRangeテスト', () => {
  let sut;

  beforeEach(() => {
    sut = new ClosedRange();
  });

  describe('#isGeneratedInstance()', () => {
    it('インスタンスが生成されていること', () => {
      //TODO: あとで型判定いれたいな
      assert(sut !== null);
    });
  });
});

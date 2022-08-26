describe("payments test (with setup and teardown)", function() {
    beforeEach(function () {
      // initialization logic
      submitPaymentInfo();
    });

    it('should update allPayments with payment info', function () {
        expect(Object.keys(allPayments).length).toEqual(1);
    });

    it('should return object with billAmt, tipAmt, & tipPercent', function () {
        expect(createCurPayment()).toContain({"billAmt": 8, "tipAmt": 4, "tipPercent": 50});

    });
    
    afterEach(function() {
      // teardown logic
      
    });
  });
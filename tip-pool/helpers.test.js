describe("helpers test (with setup and teardown)", function() {
    beforeEach(function () {
      // initialization logic
      let billAmt = document.getElementById('billAmt').value = 4;
      let tipAmt = document.getElementById('tipAmt').value = 2;
      
    });
  
    it('should sum payment correctly for billAmt, tipAmt, tipPercent', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(4);
        expect(sumPaymentTotal('tipAmt')).toEqual(2);
        expect(sumPaymentTotal('tipPercent')).toEqual(50);
    });
  
    it('should return a percentage based on bill and tip amounts', function () {
        expect(calculateTipPercent(4, 2)).toEqual(50); 
      });

    it('should append a new td element to paymentTbody', function () {
        expect(paymentTbody.children).toBeDefined();
    });
  
    afterEach(function() {
      // teardown logic
      billAmt.value = null;
      tipAmt.value = null;
      paymentTbody.innerHTML = null;
      summaryTds[0].innerHTML = null;
      summaryTds[1].innerHTML = null;
      summaryTds[2].innerHTML =  null;
      
    });
  });
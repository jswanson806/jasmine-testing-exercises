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

    it('should append a new td element from value passed', function () {

    });
  
    afterEach(function() {
      // teardown logic
      document.getElementById('billAmt').value = '';
      document.getElementById('tipAmt').value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML =  '';
      
    });
  });
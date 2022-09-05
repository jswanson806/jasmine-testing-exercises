describe("helpers test (with setup and teardown)", function() {
        document.querySelector("#billAmt").value = 4;
        document.querySelector("#tipAmt").value = 2;
        
    it('should sum payment correctly for billAmt, tipAmt, tipPercent', function () {
      submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(4);
        expect(sumPaymentTotal('tipAmt')).toEqual(2);
        expect(sumPaymentTotal('tipPercent')).toEqual(50);
        
    });
  
    it('should return a percentage based on bill and tip amounts', function () {
      submitPaymentInfo();
        expect(calculateTipPercent(4, 2)).toEqual(50); 
      });

    it('should append a new td element to paymentTbody', function () {
      submitPaymentInfo();
        expect(paymentTbody.children).toBeDefined();
    });
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = null;
      tipAmtInput.value = null;
      billAmt = 0;
      tipAmt = 0;
      serverNameInput.value = null;
      serverTbody.innerHTML = null;
      document.querySelector('#summaryTable tbody').removeChild;
      document.querySelector('#serverTable tr').removeChild;
      document.querySelector('#paymentTable tr').removeChild;
      allServers = {};
    });
  });
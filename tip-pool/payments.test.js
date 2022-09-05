describe("payments test (with setup and teardown)", function() {

  document.querySelector("#billAmt").value = 4;
  document.querySelector("#tipAmt").value = 2;

    it('should update allPayments with payment info', function () {

       submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
    });

    it('should return object with billAmt, tipAmt, & tipPercent', function () {

       submitPaymentInfo();
        expect(allPayments['payment1']).toEqual({"billAmt": '4', "tipAmt": '2', "tipPercent": 50});
    });

    it('should append current payment info to the payment table', function () {
  
      submitPaymentInfo();
      expect(document.querySelector("#paymentTable td").innerText).toEqual('$4');
      expect(document.querySelector("#paymentTable td").nextSibling.innerText).toEqual('$2');
      expect(document.querySelector("#paymentTable td").nextSibling.nextSibling.innerText).toEqual('50%');
   });

   it('should update the summary with a table row element containing the correct values for billAmt tipAmt and tipPercent', function () {
  
    submitPaymentInfo();
    expect(document.querySelector("#summaryTable tbody tr").children[0].innerHTML).toEqual('$4');
    expect(document.querySelector("#summaryTable tbody tr").children[1].innerHTML).toEqual('$2');
    expect(document.querySelector("#summaryTable tbody tr").children[2].innerHTML).toEqual('50%');
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
function openPayrollScreen() {
	
console.log('File Opening.....');
        var spanArray=document.querySelectorAll('span[class$=\\\'xkg\\\']');
        var periodDate=spanArray[1].innerText;		
		var month = periodDate.substring(3, 5);
		var year = periodDate.substring(6, 10);
		
		var monthSub = month.substring(0, 1);
		
		if (monthSub == '0') {
			
			month = month.substring(1, 2);
		}
		console.log(month);
		
		var passPeriod = month + ' ' + year + ' ' + 'Monthly Calendar';
        console.log(passPeriod);
		 
		var flowName = '#{bindings.InstanceName.inputValue}';
		console.log(flowName);
		
		var urlPath = 'https://apexdev.istedamah.sa/ords/r/isd/isd-po102/go-to?P0_FLOW_ID=' + flowName+ '&P0_PERIOD=' + passPeriod ;
		
		console.log(urlPath);
		
		window.open(urlPath,'_blank');

		console.log('File Closing.....');
}

  document.onclick = function (event) {
    var elem = event.target;
    if (
      event.target.id != "custSaveAndClose"
    ) {
      openPayrollScreen();
    }
  };
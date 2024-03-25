function openPayrollScreen() {
	
console.log('File Opening.....');
        var payroll = '#{bindings.InstanceName.inputValue}'
var payrollFlow = '#{bindings.FiCompletedTasks.inputValue}';
var payrollPeriod = '#{bindings.Meaning1.inputValue}'
var payrollPeriod2 = '#{bindings.Meaning2.inputValue}'
var payrollPeriod3 = '#{bindings.Meaning3.inputValue}'
var payrollPeriod4 = '#{bindings.FilterValue.inputValue}';


var payrollPeriod5 = '#{row.ParamLookupValue}';
var payrollPeriod6 = '#{row.FlowParamValue}';
var payrollPeriod7 = '#{row.ParameterName}';
var payrollPeriod8 = '#{row.ProcessDateTrans}';




console.log(payroll);
console.log(payrollFlow);
console.log(payrollPeriod);
console.log(payrollPeriod2);
console.log(payrollPeriod3);
console.log(payrollPeriod4);
console.log(payrollPeriod5);
console.log(payrollPeriod6);
console.log(payrollPeriod7);
console.log(payrollPeriod8);

}

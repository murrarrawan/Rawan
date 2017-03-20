(function() {

	'use strict';

	angular
		.module('formlyApp')
		.controller('MainController', MainController);

		function MainController(province) {

			var vm = this;

			// The model object that we reference
			// on the <formly-form> element in index.html
			vm.rental = {};


			// An array of our form fields with configuration
			// and options set. We make reference to this in
			// the 'fields' attribute on the <formly-form> element
			vm.rentalFields = [
				{
					key: 'Id',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'ID',
						placeholder: 'Enter your ID',
						required: true
					}
				},
				{
					key: 'First_name',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'First Name',
						placeholder: 'Enter your First name',
						required: true
					}
				},
				{
					key: 'email',
					type: 'input',
					templateOptions: {
						type: 'email',
						label: 'Email address',
						placeholder: 'Enter email',
						required: true
					}
				},
				{
					key: 'Body',
					type: 'input',
					templateOptions: {
						type: 'Body',
						label: 'Comment Body',
						placeholder: 'Enter Comments',
						required: true
					}
				},
				
				
				{
					key: 'license',
					type: 'input',
					templateOptions: {
						label: 'Driver\'s id Number',
						placeholder: 'Enter your id'
					},
					hideExpression: '!model.province',
					validators: {
					
		          		driversLicense: function($viewValue, $modelValue, scope) {
		          			var value = $modelValue || $viewValue;
		          			if(value) {
		          				
		          				return validateDriversLicence(value)
		          			}
		          		}
		          	},
		          	expressionProperties: {
		          		
		          		'templateOptions.disabled': function($viewValue, $modelValue, scope) {
		          			if(scope.model.province === 'ontario') {
		          				return false;
		          			}
		          			return true;
		          		}
		          	}
				},
				{
					key: 'insurance',
					type: 'input',
					templateOptions: {
						label: 'Id No ',
						placeholder: 'Enter your ID No'
					},
					hideExpression: '!model.under25 || !model.province',
				}

			];

			// Tests the input based on a helpful regular expression
			// gratefully borrowed from jQuery.formance by Omar Shammas
			// https://github.com/omarshammas/jquery.formance
			function validateDriversLicence(value) {
				return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
			}

		}

})();
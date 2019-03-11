var foo = 'foo'; 
(function () {
	
	var foo = 'bar';
	console.log(foo); 
	console.log(window.foo); 
	var mockDatabase = [
		{ _id: '3000', name: 'Images/bitcoin.jpg', published: true },
		{ _id: '100', name: 'Images/binance.jpg', published: true },
		{ _id: '250', name:'Images/Dash.jpg', published: false },
		{ _id: '300', name:'Images/ethereum.jpg', published: false },
		{ _id: '456', name:'Images/litecoin.jpg', published: true },
		{ _id: '567', name:'Images/ripple.jpg', published: false },
		{ _id: '678', name:'Images/stellar.jpg', published: true },
		{ _id: '789', name:'Images/monero.jpg', published: false },
		{ _id: '891', name:'Images/eos.jpg', published: true },
		{ _id: '910', name:'Images/zrx.jpg', published: true },
		{ _id: '101', name:'Images/dogecoin.jpg', published: false },
		{ _id: '112', name:'Images/zcash.jpg', published: true },
	];

function renderList (results) {

		var tableBody = document.querySelector('.content-container');

		
		tableBody.innerHTML = '';
		/*
		var tableRows = results.map(function (result, index) {

			return '<tr><td>' + index + '</td><td><img src="' + result.name + '" /></td><td>' + 
					result._id + '</td><td>' + result.published + '</td></tr>';
		});


		for(var i = 0; i < tableRows.length; i++) {


			tableBody.innerHTML += tableRows[i];
		}
		*/


		for(var i = 0; i < results.length; i++) {


			var result = results[i];

			tableBody.innerHTML += '<tr><td><img src="' + result.name + '" /></td></tr>';
		}
		
		//var foo = 'renderList';
		//console.log(foo); 
	}

renderList(mockDatabase);

	
	function orderBy(sortValue) {
		
		var sortedResults = (sortValue === 'name') ? 
			mockDatabase.sort(function (a, b) { 
				var nameA = a.name.toUpperCase(); 
				var nameB = b.name.toUpperCase(); 
				
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			}) : 
			mockDatabase.sort(function (a, b) { 
												
				
				return a[sortValue] - b[sortValue];
			});
		renderList(sortedResults);
	}

	document.querySelector('#orderBy').addEventListener('change', function(event){
		
		orderBy(event.target.value);
	});

	
	function togglePublished(showPublished) {
		
		var filteredResults = mockDatabase.filter(function (result) {
			
			return showPublished || result.published;
		});
		renderList(filteredResults);
	}

	document.querySelector('#published').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean 

		console.log(event);
		console.log(event.target.value);
		console.log(togglePublished);		


		var value = event.target.value === 'true';
		togglePublished(value);
	});
})();
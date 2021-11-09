let findHotels = [
		{type: 'Suites Almenara',  city: 'Almenara', price: 171, rating: 4.9 },
		{type: 'Pousada de Vange',  city: 'Almenara', price: 40, rating: 1.3 },
		{type: 'Pousada Sol Nascente',  city: 'Almenara', price: 100, rating: 4.9 },
		{type: 'Hotel Graciema',  city: 'Itaobim', price: 133, rating: 2.8},
		{type: 'Hotel Araras',  city: 'Itaobim', price: 90, rating: 3.7 },
		{type: 'Hotel Rosado',  city: 'Governador Valadares', price: 85, rating: 5 }
	]
	
	/*
	 * Retorna hotéis com cidade == city
	 * caso city seja == all, retorna todos registros
	 */
	function getData(city = null, findHotels){
		
		let hotels = [];
		
		for (element of findHotels){
			if(city == 'all'){
				hotels.push(element);
			}
			
			if(city && element.city == city){
				hotels.push(element);
			}
		}
		
		return hotels;
	}
	
	let almenaraHoteis = getData('Almenara', findHotels);
	
	console.log('----GET DATA----');
	console.log(almenaraHoteis);
	
	let allCities = getData('all', findHotels);
	console.log('----ALL----')
	console.log(allCities);
	
	/*
	 * Retorna hotéis com price < 100
	 */
	function underAHundred(hotel){
		return hotel.price < 100;
	}
	
	let precoAcessivel = findHotels.filter(underAHundred)
	console.log('----VALORES ABAIXO DE 100----')
	console.log(precoAcessivel);
	
	/*
	 * Retorna um array com os ratings de cada hotel
	 */
	 function getRatings(findHotels){
		 let ratings = [];
		 
		 for (element of findHotels){
			 ratings.push(element.rating)
		 }
		 
		 return ratings;
	 }
	 
	 let allRatings = getRatings(findHotels);
	 console.log('----RATINGS----');
	 console.log(allRatings);
	 
	 /*
	 * Retorna a media de ratings dos hotéis de uma determinada cidade
	 */
	 function average(hotels){
		 
		 let sum = 0;
		 
		 for(element of hotels){
			 sum = sum + element;
		 }
		 
		 return sum / hotels.length;
	 } 
	 
	 let almenaraHotels = getData('Almenara', findHotels);
	 let almenaraHotelsRating = getRatings(almenaraHotels);
	 let almenaraHotelsRatingAverage = average(almenaraHotelsRating);
	 	 
	 console.log('----Avaliacoes Hoteis de Almenara----');
	 console.log(almenaraHotelsRating);
	 console.log('----Media das avaliacoes----');
	 console.log(almenaraHotelsRatingAverage);
	 
	 
	 
	 
	

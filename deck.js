// var url = 'https://crossorigin.me/https://deckofcardsapi.com/api/deck/';
// var deckId = '';

// function loadDeck() {
//   var req = new XMLHttpRequest();
//   req.open('GET', url + 'new/shuffle', true);
//   req.addEventListener('load', function(){
//     var response = JSON.parse(req.responseText);
//     if ( response.success == true ) {
//       deckId = response.deck_id;
//     }
//     else {
//       console.log('Error Loading Deck!');
//     }
//   });
//   req.send(null);
//   console.log(req)
// }




// function deal( numberOfCards ) {
// 	var req = new XMLHttpRequest();
// 	req.open('GET', url + deckId + '/draw/?count=' + numberOfCards, false);
// 	req.send(null);
// 	var response = JSON.parse(req.responseText);
// 	if ( response.success == true ) {
// 	  var cards = response.cards;
// 	  /* Take Some Action With Cards */
// 	}
// 	else {
// 	  console.log('Error Drawing Cards!');
// 	}
//   }

//   var cards = document.querySelector('.card-button').addEventListener("click", function(){
// 	  loadDeck();
// 	  deal();
//   })


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson);
	}),

document.querySelector('.card-button').addEventListener("click", function(){
	function createNode(element) {
		return document.createElement(element)
	}

	const ul = document.querySelector('.cards');
	const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=10';
	fetch(url)
	.then((res) => { return res.json() })
	.then(function(data) {
		let cards = data.cards;
		let counter = 0;
		return cards.map(function(card) {
			let img = createNode('img');
			img.src = card.image;
			img.classList.add("card");
			img.id = counter;
			counter++;
			ul.appendChild(img);
		});
	
	})
})

document.querySelector('.choose-button').addEventListener('click', function(){
	let cardje = document.querySelectorAll('.card');
	let number = cardje.length
	console.log(number)
	for (card of cardje) {
		card.classList.add("hidden")
	}
	const RANDOM = Math.floor(Math.random() * number);

	cardje[RANDOM].classList.remove("hidden");
})

document.querySelector('.hide-button').addEventListener('click', function(){
	document.querySelector('.cards').classList.toggle('hidden')
})

document.querySelector('.return-button').addEventListener('click', function(){
	let cardje = document.querySelectorAll('.card');
	for (card of cardje) {
		if(card.classList.contains("hidden")){
			card.classList.remove("hidden")
		}
	}
	
})
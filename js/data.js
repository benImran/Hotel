var data={ //un objet est un ensemble de fonctionnalités et de valeur 
	"Hotels":[
		{
			"Nom":"The Oberoi Dubai Hotel ",
			"Prix":267,
			"Etoiles":5,
			"Actif": true,
			"ID" : 0
		},
		{
			"Nom":"Burj Al arab",
			"Prix":300,
			"Etoiles":3,
			"Actif": true,
			"ID" : 1
		},
		{
			"Nom":"St. George Hotel",
			"Prix":67,
			"Etoiles":3,
			"Actif": true,
			"ID" : 2
		},
		{
			"Nom":"Ritz",
			"Prix":170,
			"Etoiles":5,
			"Actif": true,
			"ID" : 3
		},
		{
			"Nom":"Carlton",
			"Prix":100,
			"Etoiles":2,
			"Actif": true,
			"ID" : 4
		},
		{
			"Nom":"Nassima royal",
			"Prix":90,
			"Etoiles":3,
			"Actif": true,
			"ID" : 5
		},
		{
			"Nom":"Kempinski Hotel",
			"Prix":200,
			"Etoiles":5,
			"Actif": true,
			"ID" : 6
		},
		{
			"Nom":"Grand Hyatt Dubai",
			"Prix":87,
			"Etoiles":4,
			"Actif": true,
			"ID" : 7
		}
	]
};

function search(donnee, NomHotels){
	var hotels = donnee.Hotels;// le point c'est pour acccédez au champ en question  
	for (var i =0 ; i < hotels.length; i++) {
		if(hotels[i].Nom === NomHotels){
			break;
		}
	}

	return hotels[i];
}


function tri_par_etoiles(donnee){

	donnee = reset(donnee);
	var hotels = donnee.Hotels;
	var stock = 0;

	for(var i=0; i < hotels.length; i++ ){
		for( var j=i+1; j < hotels.length; j++){
			if( hotels[i].Etoiles > hotels[j].Etoiles ){
				stock = hotels[i];
				hotels[i] = hotels[j];
				hotels[j] = stock;
			}
		}

	}
	move_hotels(donnee);
}


function tri_par_nom(donnee){

	donnee = reset(donnee);
	var hotels = donnee.Hotels;
	var stock = 0;

	for(var i=0; i < hotels.length; i++ ){
		for( var j=i+1; j < hotels.length; j++){
			if( hotels[i].Nom > hotels[j].Nom ){
				stock = hotels[i];
				hotels[i] = hotels[j];
				hotels[j] = stock;
			}
		}

	}
	move_hotels(donnee);

}
function tri_par_prix(donnee){

	donnee = reset(donnee);
	var hotels = donnee.Hotels;
	var stock = 0;

	for(var i=0; i < hotels.length; i++ ){
		for( var j=i+1; j < hotels.length; j++){
			if( hotels[i].Prix > hotels[j].Prix ){
				stock = hotels[i];
				hotels[i] = hotels[j];
				hotels[j] = stock;
			}
		}

	}
	move_hotels(donnee);
}

function move_hotels(donnee){

	var hotels = donnee.Hotels;
	for (var i = 0; i < hotels.length; i++) {
		// on supprime les hotels inactif
		if (hotels[i].Actif === false ){

			hide(hotels[i].ID);

		}
		else{

			show(hotels[i].ID);
			switch_hotels(i, hotels[i].ID);

		}	
	}
}

function switch_hotels(ID1, ID2){

	if (ID1 == ID2) {
		return ;
	}
	var section = document.querySelectorAll(".hotel");
	var hotel = document.querySelector( ".h" + ID2 + "_carouselbis").parentNode.parentNode;
	hotel.parentNode.insertBefore(hotel, section[ID1]);
	
}

function hide(ID){

	var section = document.querySelectorAll(".hotel");
	section[get_hotel_position_ID(ID)].style.display = "none";

}
function show(ID){

	var section = document.querySelectorAll(".hotel");
	section[get_hotel_position_ID(ID)].style.display = "block";

}

function get_hotel_position_ID(ID){

	var section = document.querySelectorAll(".hotel");
	for (var i = 0; i < section.length; i++) {
		if (section[i].id == ("h" + ID) ){

			return i ;

		};
		
	};
}

function filtre_by_nbre(donnee, stars){

	var h = reset(donnee);
	for(var i=0; i < h.Hotels.length; i++ ){
			if( h.Hotels[i].Etoiles != stars ){
				hide(h.Hotels[i].ID);
				h.Hotels[i].Actif = false;
			}
	
	}
	move_hotels(h);

}
function reset(donnee){

	for(var i=0; i < donnee.Hotels.length; i++ ){
			donnee.Hotels[i].Actif = true;
	
	}
	return donnee;	
}

function filtre_par_prix(elem, donnee, prix_depart, prix_fin){

	var h = reset(donnee);
	if(elem.checked){
		for(var i=0; i < h.Hotels.length; i++ ){
			if( h.Hotels[i].Prix >= prix_depart && h.Hotels[i].Prix <= prix_fin ){
				h.Hotels[i].Actif = true;
			}
			else{
				hide(h.Hotels[i].ID);
				h.Hotels[i].Actif = false;
			}
	
		}
	}
	
	move_hotels(h);

}
function filtre_par_nom(donnee, nom){

	var h = reset(donnee);

		for(var i=0; i < h.Hotels.length; i++ ){
			if( h.Hotels[i].Nom > nom ){
				h.Hotels[i].Actif = true;
			}
			else{
				hide(h.Hotels[i].ID);
				h.Hotels[i].Actif = false;
			}
	
		}
	
	
	move_hotels(h);

}



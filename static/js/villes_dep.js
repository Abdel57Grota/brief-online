function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "07":
		chaine_villes = "Alba la Romaine|Annonay|Aubenas|Lamastre|Lavilledieu|Le cheylard|Meyras|Vals les bains";
		break;
		case "26":
		chaine_villes = "Bourg de P&eacute;age|Bourg l&egrave;s Valence|Ch&acirc;teauneuf sur Is&egrave;re|Crest|Dieulefit|Donz&egrave;re|Mont&eacute;limar|Nyons|Pierrelatte|Romans sur Is&egrave;re|Valence";
		break;
		case "38":
		chaine_villes = "Bourgoin Jallieu|Chamrousse|Echirolles|Grenoble|Meylan|Sassenage|Vienne|Voiron|Voreppe";
		break;
		case "69":
		chaine_villes = "Condrieu|Ecully|Givors|Lyon|Saint Priest|Ternay|Vaulx-en-Velin|Villefranche-sur-Sa&ocirc;ne|Villeurbanne";
		break;
		case "73":
		chaine_villes = "Chamb&eacute;ry|Le bourget du lac|Tournon|Voglans";
		break;
	}
	
	return chaine_villes;
}
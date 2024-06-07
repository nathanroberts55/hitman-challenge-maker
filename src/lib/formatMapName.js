export function formatMapName(mapName) {
	return mapName
		.normalize('NFD') // Normalize to decomposed form (NFD)
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritics
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/'/g, '')
		.replace(/à|á|â|ã|ä/g, 'a'); // Replace accented a's with regular a
}

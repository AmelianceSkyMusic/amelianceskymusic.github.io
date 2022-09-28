function songlistInit() {
	if (localStorage.getItem('songlist') !== null) {
		const songlistLocalStorage = JSON.parse(localStorage.getItem('songlist') as string);
		return {
			songlist: songlistLocalStorage.songlist,
			isLoading: false,
			isError: null
		};
	}

	return {
		songlist: null,
		isLoading: false,
		isError: null
	};

}

export const initialSonglist = songlistInit();

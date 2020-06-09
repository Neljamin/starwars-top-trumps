import React, { useEffect, useState } from 'react';
import TopTrumps from "top-trumps";

import './App.css';
import { starWarsDataService } from './services';
import theme from "./styles/theme";

function App() {
	const [cards, setCards] = useState();

	useEffect(() => {
		(async function loadCards() {
			const starWarsCards = await starWarsDataService.getStarShips();
			setCards(starWarsCards);
		})();
		// eslint-disable-next-line
	}, []);

	if (!cards) {
		return null;
	}
	
	return (
		<TopTrumps cards={cards} customTheme={theme} />
	);
}

export default App;

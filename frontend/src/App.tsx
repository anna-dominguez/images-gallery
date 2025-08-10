import { useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
	const [word, setWord] = useState('');

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch(
			`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	console.log(word);
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord} />
		</div>
	);
};

export default App;

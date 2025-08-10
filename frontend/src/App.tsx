import { useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';

import type { Image } from './Image';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
	const [word, setWord] = useState('');
	const [images, setImages] = useState<Image[]>([]);

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch(
			`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setImages((prevImages) => [...prevImages, { ...data, title: word }]);
			})
			.catch((err) => {
				console.log(err);
			});
		setWord('');
	};

	const handleDeleteImage = (id: string) => {
		setImages((prevImages) => prevImages.filter((image) => image.id !== id));
	};

	console.log(word);
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-col items-center justify-center gap-4">
				<Search
					handleSubmit={handleSearchSubmit}
					word={word}
					setWord={setWord}
				/>
				{images.length > 0 ? (
					<section className="flex flex-wrap gap-4 p-4 justify-center">
						{images.map((image) => (
							<ImageCard
								key={image.id}
								image={image}
								handleDelete={handleDeleteImage}
							/>
						))}
					</section>
				) : (
					<Welcome />
				)}
			</main>
		</div>
	);
};

export default App;

const Welcome = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-4 p-4 max-w-lg mx-auto">
			<h1 className="text-4xl font-bold">Images Gallery</h1>
			<p className="text-lg text-center">
				This is a simple application that retrieves photos using Unplash API. In
				order to start enter any search term in the input field and press enter.
			</p>
			<a
				href="https://unsplash.com"
				target="_blank"
				rel="noreferrer"
				className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 cursor-pointer text-white px-2 py-2 rounded-md"
			>
				Learn more
			</a>
		</section>
	);
};

export default Welcome;

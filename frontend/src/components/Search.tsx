const Search = ({
	handleSubmit,
	word,
	setWord,
}: {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	word: string;
	setWord: (word: string) => void;
}) => {
	return (
		<form
			className="flex gap-4 items-center justify-center w-full py-6 px-6"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="search"
				value={word}
				onChange={(e) => setWord(e.target.value)}
				placeholder="Search for new image..."
				className="w-full max-w-md p-2 border border-gray-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white px-4 py-2 rounded-md"
			>
				Search
			</button>
		</form>
	);
};

export default Search;

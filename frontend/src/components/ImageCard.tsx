import type { Image } from '../Image';

const ImageCard = ({
	image,
	handleDelete,
}: {
	image: Image;
	handleDelete: (id: string) => void;
}) => {
	return (
		<article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-md overflow-hidden">
			<img
				src={image.urls.small}
				alt={image.alt_description}
				className="w-full h-[200px] object-cover"
			/>
			<div className="flex flex-col gap-2 p-2">
				<div>
					<p className="text-lg font-bold text-gray-900">
						{image.title.toUpperCase()}
					</p>
					<p className="text-sm text-gray-500">
						{image.alt_description || image.description}
					</p>
				</div>
				<button
					type="button"
					onClick={() => handleDelete(image.id)}
					className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 cursor-pointer text-white px-2 py-2 rounded-md"
				>
					Delete
				</button>
			</div>
		</article>
	);
};

export default ImageCard;

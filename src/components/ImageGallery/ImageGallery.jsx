
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul>
      {items && items.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image.urls.regular)} />
        </li>
      ))}
    </ul>
  );
}



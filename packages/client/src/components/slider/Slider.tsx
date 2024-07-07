import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Slider.scss";
import { useState } from "react";

type Props = {
  images: string[];
};

const Slider = ({ images }: Props) => {
  const [imageStates, setImageStates] = useState({
    isOpenSlider: false,
    selectedImageIndex: 0,
  });

  // state functions
  const openSlider = () =>
    setImageStates((prev) => ({ ...prev, isOpenSlider: true }));
  const closeSlider = () =>
    setImageStates((prev) => ({ ...prev, isOpenSlider: false }));
  const onSelectImage = (index: number) =>
    setImageStates((prev) => ({ ...prev, selectedImageIndex: index }));
  const onSelectNextImage = () => {
    setImageStates((prev) => {
      return prev.selectedImageIndex >= images.length - 1
        ? { ...prev, selectedImageIndex: 0 }
        : { ...prev, selectedImageIndex: prev.selectedImageIndex + 1 };
    });
  };
  const onSelectPrevImage = () => {
    setImageStates((prev) => {
      return prev.selectedImageIndex === 0
        ? { ...prev, selectedImageIndex: images.length - 1 }
        : { ...prev, selectedImageIndex: prev.selectedImageIndex - 1 };
    });
  };

  return (
    <div className="slider">
      {imageStates.isOpenSlider && (
        <div className="fullSlider">
          <ChevronLeft className="arrows" onClick={onSelectPrevImage} />
          <div className="imgContainer">
            <img src={images[imageStates.selectedImageIndex]} alt="image" />
          </div>
          <ChevronRight className="arrows" onClick={onSelectNextImage} />
          <X className="closeBtn" onClick={closeSlider} />
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="image"
          onClick={() => {
            openSlider();
            onSelectImage(0);
          }}
        />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`image-${index}`}
            key={`image-${index}`}
            onClick={() => {
              openSlider();
              onSelectImage(index + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

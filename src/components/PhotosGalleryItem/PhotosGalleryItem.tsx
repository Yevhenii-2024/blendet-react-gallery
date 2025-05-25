import GridItem from "../GridItem/GridItem";
import { type Photo } from "../../types/photo"


import styles from "./PhotosGalleryItem.module.css";

interface GalerryProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotosGalleryItem({photo, onClick}: GalerryProps) {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
        onClick={onClick}
      >
        <img src={photo.src.large} alt={photo.alt} />
      </div>
    </GridItem>
  );
}

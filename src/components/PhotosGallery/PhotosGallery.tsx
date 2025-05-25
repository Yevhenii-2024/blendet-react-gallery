import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotoProps {
  photo: Photo[];
  onSelect: (photo: Photo) => void
}

export default function PhotosGallery({ onSelect, photo }: PhotoProps) {
  return <Grid>
    {photo.map((photo) => (
      <GridItem key={photo.id}>
        <PhotosGalleryItem photo={photo} onClick={ () => onSelect(photo) } />
      </GridItem>
    ))}
  </Grid>
}

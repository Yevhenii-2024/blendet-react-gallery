import Section from "../Section/Section";
import Container from "../Container/Container";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import Form from "../Form/Form"; 
import Text from "../Text/Text";
import Loader from "../Loader/Loader";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";


export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await getPhotos(query);
      if (response.length === 0) {
        setPhotos([]);
        setIsError(true);
      }
      setPhotos(response);
    } catch {
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    }
  };

  const handlePhoto = (photo: Photo) => setSelectedPhoto(photo);

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {isError && <Text textAlign="center">Photo not found</Text>}
          {isLoading && <Loader />}
          {photos.length > 0 && !isLoading && (<PhotosGallery photo={photos} onSelect={handlePhoto} />)}
          {selectedPhoto && (
  <Modal onClose={() => setSelectedPhoto(null)}>
    <img
      src={selectedPhoto.src.large}
      alt={selectedPhoto.alt}
      style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 8 }}
    />
  </Modal>
)}
        </Container>
      </Section>
    </>
  );
}

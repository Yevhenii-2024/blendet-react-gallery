import Section from "../Section/Section";
import Container from "../Container/Container";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import Form from "../Form/Form";

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
      setPhotos(response);
    } catch {
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Section>
        <Container>
        </Container>
      </Section>
    </>
  );
}

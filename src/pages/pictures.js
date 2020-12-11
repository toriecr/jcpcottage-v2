import React, { useState, useCallback } from "react"
import { Link } from "gatsby"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
import photos from "../constants/photos"

const PicturesPage = () => {
 const [currentImage, setCurrentImage] = useState(0);
 const [viewerIsOpen, setViewerIsOpen] = useState(false);

 const openLightbox = useCallback((event, { photo, index }) => {
   setCurrentImage(index);
   setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <Layout>
      <SEO title="Pictures" />
      <div style={{
        marginTop: `10rem`
      }}>
        <Title title="All Photos" />
        <div className="underline"></div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <div className="primary-button"
        style={{
          marginTop: `4rem`,
          marginBottom: `4rem`
        }}>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </Layout>
  );
}
export default PicturesPage;
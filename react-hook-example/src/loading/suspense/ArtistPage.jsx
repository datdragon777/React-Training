/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Panel from "./Panel";
import Biography from "./Biography";
import Albums from "./Albums";

const albumsGlimmerStyles = {
  glimmerPanel: {
    border: "1px dashed #aaa",
    background:
      "linear-gradient(90deg, rgba(221,221,221,1) 0%, rgba(255, 255, 255, 1) 100%)",
    borderRadius: "6px",
    marginTop: "20px",
    padding: "10px",
  },
  glimmerLine: {
    display: "block",
    width: "60%",
    height: "20px",
    margin: "10px",
    borderRadius: "4px",
    background: "#f0f0f0",
  },
};

const ArtistPage = ({ nameArtist, data }) => {
  return (
    <>
      <h1>{nameArtist}</h1>
      <Suspense fallback={<BigSpinner />}>
        <Biography />
        <Suspense fallback={<AlbumsGlimmer />}>
          <Panel>
            <Albums data={data} />
          </Panel>
        </Suspense>
      </Suspense>
    </>
  );
};

const BigSpinner = () => {
  return <h2>🌀 Loading...</h2>;
};

const AlbumsGlimmer = () => {
  return (
    <div style={albumsGlimmerStyles.glimmerPanel}>
      <div style={albumsGlimmerStyles.glimmerLine} />
      <div style={albumsGlimmerStyles.glimmerLine} />
      <div style={albumsGlimmerStyles.glimmerLine} />
    </div>
  );
};

export default ArtistPage;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const AwesomeImage = ({ src, width = 300, height = 200 }) => {
  return (
    <div
      className="awesome__image"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
};

export default AwesomeImage;

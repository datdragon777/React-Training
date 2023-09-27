/* eslint-disable react/prop-types */
const Panel = ({ children }) => {
  return (
    <section
      style={{
        border: "1px solid #aaa",
        borderRadius: "6px",
        marginTop: "20px",
        padding: "10px",
      }}
      className="panel"
    >
      {children}
    </section>
  );
};

export default Panel;

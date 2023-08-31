export const getButtonVariant = (variant) => {
  return Metrics.button[variant];
};

const Metrics = {
  button: {
    primary: {
      bgColor: "var(--cl-female-txt)",
      color: "var(--cl-primary)",
      fontSize: "var(--fs-xx-sm)",
      fontWeight: "var(--fw-sm)",
      width: "8.625rem",
      height: "2.0625rem",
      borderRadius: "10px",
    },
    secondary: {
      bgColor: "var(--cl-dark-blue)",
      color: "var(--cl-primary)",
      fontSize: "var(--fs-md)",
      fontWeight: "var(--fw-md)",
      width: "10rem",
      height: "2.5rem",
      borderRadius: "10px",
    },
    edit: {
      bgColor: "#f5f5fd",
      color: "var(--cl-dark-blue)",
      fontSize: "var(--fs-xxx-sm)",
      fontWeight: "var(--fw-sm)",
      width: "5.625rem",
      height: "1.6875rem",
      borderRadius: "5px",
      justifyContent: "flex-start",
    },
    delete: {
      bgColor: "#fff7fb",
      color: "var(--cl-female-txt)",
      fontSize: "var(--fs-xxx-sm)",
      fontWeight: "var(--fw-sm)",
      width: "5.625rem",
      height: "1.6875rem",
      borderRadius: "5px",
      justifyContent: "flex-start",
    },
  },
};

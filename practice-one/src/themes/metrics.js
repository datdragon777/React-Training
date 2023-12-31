export const getButtonVariant = (variant) => {
  return Metrics.button[variant];
};

const Metrics = {
  button: {
    primary: {
      fontSize: "var(--fs-xx-sm)",
      fontWeight: "var(--fw-sm)",
      width: "8.625rem",
      height: "2.0625rem",
      borderRadius: "10px",
    },
    secondary: {
      fontSize: "var(--fs-md)",
      fontWeight: "var(--fw-md)",
      width: "10rem",
      height: "2.5rem",
      borderRadius: "10px",
    },
    edit: {
      fontSize: "var(--fs-xxx-sm)",
      fontWeight: "var(--fw-sm)",
      width: "5.625rem",
      height: "1.6875rem",
      borderRadius: "5px",
      justifyContent: "flex-start",
    },
    delete: {
      fontSize: "var(--fs-xxx-sm)",
      fontWeight: "var(--fw-sm)",
      width: "5.625rem",
      height: "1.6875rem",
      borderRadius: "5px",
      justifyContent: "flex-start",
    },
  },
};

const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 10,
          marginTop:25,
          marginBottom: 8,
          borderRadius: 4,
          textAlign: "center",
          color: "red",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;
const Container = ({ children }) => {
    return (
      <>
        <div className="max-w-container mx-auto px-[20px] md:px-0 ">{children}</div>
      </>
    );
  };
  
  export default Container;
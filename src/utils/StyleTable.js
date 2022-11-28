const styleHeader = {
    textAlign: "center",
    fontSize: '10px',
    fontWeight: 'bold',
  };

export const header =(text) =>{
    return <h6 style={styleHeader}>{text}</h6>;
}
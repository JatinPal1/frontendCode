const ImageIcon: React.FC<{
    url: string;
    ht?: string|number|undefined;
    wt?: string|number|undefined;
  }> = ({ url, ht, wt }) => {
    return <img src={url} alt="icons" width={wt} height={ht} />;
  };
  
  export default ImageIcon












  
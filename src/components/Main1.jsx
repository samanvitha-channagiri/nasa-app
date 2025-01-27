export default function Main(props){
    const {data}=props;
    const imageUrl=data.hdurl||data.url;
    return(
        <div className="imgContainer">
        <img src={imageUrl}
         onError={(e)=>{e.target.src=data.url}}
        alt={data.title||'bg-image' }className="bgImage"/>
        </div>
    )
}


function ProfilePicture(){

const imgUrl ="https://via.placeholder.com/150";

const handleClick =(e)=>e.target.style.display="none";
    

return (
    <>
    <img  onClick={ (e) => handleClick(e)}src={imgUrl} alt="image " />
    </>
)

}



export default ProfilePicture
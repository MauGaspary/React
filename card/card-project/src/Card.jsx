import profilePic from './assets/Screenshot_1.png'

function Card(){
    return (
        <div className="card">
            <img className= "card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Maurício</h2>
            <p className='card-text'>Desenvolvedor Front-end</p>
        </div>
    )
}

export default Card;
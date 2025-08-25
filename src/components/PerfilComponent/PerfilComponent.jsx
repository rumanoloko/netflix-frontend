import './PerfilComponent.css'
import EdgeProfileComponent from '../EdgeProfileComponent/EdgeProfileComponent.jsx'
export default function PerfilComponent({nombreUsuario, avatar}) {
    const childICON = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="childICON">
        <path fill="var(--ci-primary-color, currentColor)"
              d="M425.39,200.035A184.3,184.3,0,0,0,290.812,91.289L317.568,48.48,290.432,31.52,255.127,88.008A184.046,184.046,0,0,0,86.61,200.035a71.978,71.978,0,0,0,0,143.93,184.071,184.071,0,0,0,338.78,0,71.978,71.978,0,0,0,0-143.93Zm27.152,99.975a39.77,39.77,0,0,1-27.76,11.961l-20.725.394-8.113,19.074a152.066,152.066,0,0,1-279.887,0l-8.114-19.074-20.725-.394a39.978,39.978,0,0,1,0-79.942l20.725-.394,8.114-19.074a152.067,152.067,0,0,1,279.887,0l8.113,19.074,20.725.394a39.974,39.974,0,0,1,27.76,67.981Z"
              className="ci-primary"/>
        <rect width="40" height="40" x="168" y="232" fill="var(--ci-primary-color, currentColor)"
              className="ci-primary"/>
        <rect width="40" height="40" x="304" y="232" fill="var(--ci-primary-color, currentColor)"
              className="ci-primary"/>
        <path fill="var(--ci-primary-color, currentColor)" d="M256,384a80,80,0,0,0,80-80H176A80,80,0,0,0,256,384Z"
              className="ci-primary"/>
    </svg>);

    const logoutICON = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logoutICON">
            <path
                fill="currentColor"
                d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
        </svg>
    );

    const questionICON = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 612.074 612.074"
            width="24"
            height="24"
            fill="currentColor"
        >
            <path d="M306.037,0C136.997,0,0,136.997,0,306.037s136.997,306.037,306.037,306.037s306.037-136.997,306.037-306.037
      S474.261,0,306.037,0z M306.037,582.405c-152.203,0-276.368-124.165-276.368-276.368S153.019,29.669,306.037,29.669
      s276.368,124.165,276.368,276.368S458.24,582.405,306.037,582.405z M318.869,454.234c0,8.827-7.195,16.021-16.021,16.021
      c-8.827,0-16.021-7.195-16.021-16.021c0-8.827,7.195-16.021,16.021-16.021C311.6,438.213,318.869,445.408,318.869,454.234z
      M385.328,236.315c0,28.037-16.021,53.701-45.69,71.28c-21.658,12.832-20.843,28.037-20.843,28.853c0,0,0,0.816,0,1.632v36.864
      c0,8.011-6.379,14.39-14.39,14.39s-15.205-6.379-15.205-14.39v-36.048c-0.816-12.832,5.637-37.68,34.416-55.259
      c14.39-8.827,31.227-24.032,31.227-46.432c0-27.221-22.4-49.696-49.696-49.696c-27.296,0-49.696,22.4-49.696,49.696
      c0,8.011-6.379,14.39-14.39,14.39s-14.39-6.379-14.39-14.39c0-44.059,35.232-79.291,79.291-79.291S385.328,192.256,385.328,236.315
      z"/>
        </svg>
    );



    return (
        <div className="userDropDown">
            <div className="parteVisible">
                <img className="avatarImage" src={avatar} alt="imagen avatar de cuenta Netflix"/>
                <div className="subparteVisible">
                    <h4>{nombreUsuario}</h4>
                    <span>Cambiar de perfil</span>
                </div>
            </div>
            <div className="parteDesplegable">
                <EdgeProfileComponent option='Infantil' image={childICON}/>
                <EdgeProfileComponent option='Obtener ayuda' image={questionICON}/>
                <EdgeProfileComponent option='Salir de Netflix' image={logoutICON}/>
            </div>
        </div>
    );
}
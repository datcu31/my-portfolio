import ProfilePic from "../img/Profile.jpg";
import GithubPic from "../img/github.png";
import LinkedinPic from "../img/linkedin.png";

function Home() {
    return (
        <main className="flex flex-col justify-center items-center lg:flex-row transition-all">
            <div>
                <a href="https://www.instagram.com/datcu31/" target="_blank">
                    <img
                        className="rounded-full h-[35vh] lg:h-[50vh] shadow-lg shadow-gray-400 
                       hover:shadow-gray-500 lg:shadow-xl lg:shadow-gray-400 hover:-translate-y-2 
                    transition-all"
                        src={ProfilePic}>
                    </img>
                </a>
            </div>
            <div className="flex flex-col m-2 p-2">
                <div className="flex flex-col justify-center items-center lg:items-start select-none">
                    <h1>Hi, I'm Alex<span className="hand ml-2">🤚</span></h1>
                    <h2>I'm a Junior Frontend Developer</h2>
                </div>
                <div className="flex justify-center gap-6 lg:gap-14 mt-8">
                    <a href="https://github.com/datcu31" target="_blank">
                        <img className="social-pic" src={GithubPic}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/alexandru-datcu-590444239/" target="_blank">
                        <img className="social-pic" src={LinkedinPic}></img>
                    </a>

                </div>
            </div>

        </main>
    );
}

export default Home;
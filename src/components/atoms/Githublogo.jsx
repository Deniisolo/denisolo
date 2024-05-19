import "./Githublogo.css"

export function Githublogo() {
    return <button className="gitHubLogoButton">
    <img
      src={`${process.env.PUBLIC_URL}/img/Github.png`}
      alt="gitHubLogoButton"
    className="imgGitHubLogoButton"/>
  </button>
}
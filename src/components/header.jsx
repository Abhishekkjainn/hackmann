export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="logo.png" alt="Mainlogo" className="mainlogoimage" />
        <div className="companyname">Hackmann</div>
      </div>
      <div className="links">
        <div className="headerlink link1">Home</div>
        <div className="headerlink link2">Explore</div>
        <div className="headerlink link3">About</div>
        <div className="headerlink link4">How?</div>
        <div className="headerlink link5">Contact</div>
      </div>
      <div className="profile">
        <div className="signInbutton">Sign In / Up</div>
      </div>
    </div>
  );
}

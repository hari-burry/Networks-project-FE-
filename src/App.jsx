import "./App.css";
import FindIp from "./FindIp.jsx";
import FindDomain from "./FindDomain.jsx";
function App() {
  return (
    <>
	<img src="../images/happy.svg" alt="image" />
      <header  id = "title">
        <h1>DNS</h1>
      </header>

	<div id= "ip">
		<h2>FIND IP</h2>
		<FindIp />
	</div>
		
	<div id = "dom">
		<h2>FIND DOMAIN</h2>
		<FindDomain />
	</div>
      
    </>
  );
}

export default App;

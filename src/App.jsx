import { useState } from "react";
import "./App.css";
import logo from "/src/assets/icons/logo.svg";
import "/src/assets/icons/icono.css";
import Header from "./views/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
}

export default App;

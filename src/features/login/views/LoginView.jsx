import React, { useState } from "react";
import { useAuth } from "../../../auth/context/AuthProvider";
import Button from "react-bootstrap/Button";

const LoginView = () => {
	const { login } = useAuth();

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleLogin = () => {
		const { email } = user;

		login(email);
	};

	return (
		<div className="form-container">
			<h3>Iniciar sesión</h3>
			<form onSubmit={handleLogin}>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={handleChange}
					value={user.email}
					required
				/>
				<input
					type="password"
					placeholder="Contraseña"
					name="password"
					onChange={handleChange}
					value={user.password}
					required
				/>
				<Button type="submit" variant="danger">
					Iniciar sesión
				</Button>
			</form>
		</div>
	);
};

export default LoginView;

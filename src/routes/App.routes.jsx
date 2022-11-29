import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../common/components/layout/Layout";
import LoginView from "../features/login/views/LoginView";
import MoviesView from "../features/movies/views/MoviesView";
import MovieView from "../features/movies/views/MovieView";
import SeriesView from "../features/series/views/SeriesView";
import SerieView from "../features/series/views/SerieView";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoute url={"movies"}>
							<LoginView />
						</PublicRoute>
					}
				/>

				<Route
					path="movies"
					element={
						<ProtectedRoute url={"/"}>
							<Layout>
								<MoviesView />
							</Layout>
						</ProtectedRoute>
					}
				/>

				<Route
					path="movie/:id"
					element={
						<ProtectedRoute url={"/"}>
							<MovieView />
						</ProtectedRoute>
					}
				/>

				<Route
					path="series"
					element={
						<ProtectedRoute url={"/"}>
							<Layout>
								<SeriesView />
							</Layout>
						</ProtectedRoute>
					}
				/>

				<Route
					path="serie/:id"
					element={
						<ProtectedRoute url={"/"}>
							<SerieView />
						</ProtectedRoute>
					}
				/>

				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

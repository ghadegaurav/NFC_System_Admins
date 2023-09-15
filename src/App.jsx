import { useState } from "react";
import "./App.css";
import ChartPage from "./components/ChartPage";
import DashboardTemplate from "./components/DashboardTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Header2 from "./components/Header";
import Dashboard from "./components/Dashboard";
import ResourcePage from "./components/ResourcePage";
import Form1 from "./components/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        {(
          <Routes>
            <Route
              path="/dashboard"
              element={
                  <><DashboardTemplate /><Dashboard/></>
              }
            />
            <Route
              path="/calculate"
              element={
                  <><Calculator /><DashboardTemplate /></>
              }
            />
            <Route
              path="/resource"
              element={
                  <><ResourcePage /><DashboardTemplate /></>
              }
            />
            <Route
              path="/form"
              element={
                  <><Form1/></>
              }
            />
            
            
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

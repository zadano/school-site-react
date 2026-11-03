import { Route, Routes, useLocation } from "react-router";
import { routes } from "../routes";


const RouterView = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      {/* Заглушка для неизвестных адресов, чтобы не была пустая страница */}
      <Route
        path="*"
        element={
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              minHeight: "60vh",
              fontFamily: '"Inter-Regular", system-ui, sans-serif',
              color: "#303030",
              textAlign: "center",
              padding: "24px",
            }}
          >
            <h1 style={{ fontSize: "48px", fontWeight: 600 }}>404</h1>
            <p style={{ fontSize: "16px" }}>Страница не найдена</p>
            <a
              href="/"
              style={{
                fontSize: "16px",
                color: "#1a5632",
                textDecoration: "underline",
              }}
            >
              Вернуться на главную
            </a>
          </main>
        }
      />
    </Routes>
  );
};

export default RouterView;

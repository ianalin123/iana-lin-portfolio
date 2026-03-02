import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Technical from "./pages/Technical";
import Creative from "./pages/Creative";
import Journal from "./pages/Journal";
import CS180 from "./pages/CS180";
import "./index.css";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/technical"} component={Technical} />
      <Route path={"/creative"} component={Creative} />
      <Route path={"/journal"} component={Journal} />
      <Route path={"/cs180"} component={CS180} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

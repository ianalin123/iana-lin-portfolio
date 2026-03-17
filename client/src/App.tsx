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
import CS180Project0 from "./pages/CS180/Project0";
import CS180Project1 from "./pages/CS180/Project1";
import CS180Project2 from "./pages/CS180/Project2";
import CS180Project3 from "./pages/CS180/Project3";
import CS180Project4 from "./pages/CS180/Project4";
import CS180Project5 from "./pages/CS180/Project5";
import "./index.css";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/technical"} component={Technical} />
      <Route path={"/creative"} component={Creative} />
      <Route path={"/journal"} component={Journal} />
      <Route path={"/cs180"} component={CS180} />
      <Route path={"/cs180/project0"} component={CS180Project0} />
      <Route path={"/cs180/project1"} component={CS180Project1} />
      <Route path={"/cs180/project2"} component={CS180Project2} />
      <Route path={"/cs180/project3"} component={CS180Project3} />
      <Route path={"/cs180/project4"} component={CS180Project4} />
      <Route path={"/cs180/project5"} component={CS180Project5} />
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

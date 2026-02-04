import { createBrowserRouter } from "react-router";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import LandingPage from "./pages/LandingPage";
import UploadPage from "./pages/UploadPage";
import CreateAdPage from "./pages/CreateAdPage";
import AdPreviewPage from "./pages/AdPreviewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AnimatedRoutes,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "upload",
        Component: UploadPage,
      },
      {
        path: "create-ad",
        Component: CreateAdPage,
      },
      {
        path: "ad-preview",
        Component: AdPreviewPage,
      },
    ],
  },
]);
import { createRoot } from "react-dom/client";
import AppRouterContainer from "./App";

//@ts-ignore
const root = createRoot(document.getElementById("root"));
root.render(<AppRouterContainer />);

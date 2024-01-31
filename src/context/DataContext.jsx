import { createContext, useContext, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
	const [viewportSize, setViewportSize] = useState({ width: "", height: "" });
};

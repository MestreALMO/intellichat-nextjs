import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ctxToggleSideBarContextProps {
  ctxToggleSideBar: boolean;
  setCtxToggleSideBar: Dispatch<SetStateAction<boolean>>;
}

const CtxToggleSideBarContext = createContext<ctxToggleSideBarContextProps>(
  {} as ctxToggleSideBarContextProps
);

export default function CtxToggleSideBarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [ctxToggleSideBar, setCtxToggleSideBar] = useState(false);

  return (
    <CtxToggleSideBarContext.Provider
      value={{ ctxToggleSideBar, setCtxToggleSideBar }}
    >
      {children}
    </CtxToggleSideBarContext.Provider>
  );
}

export const useCtxToggleSideBar = () => {
  const context = useContext(CtxToggleSideBarContext);
  const { ctxToggleSideBar, setCtxToggleSideBar } = context;
  return { ctxToggleSideBar, setCtxToggleSideBar };
};

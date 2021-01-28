export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    // Case 1: No Dependency (dependency가 []로 존재하는 것은 있는 것으로 본다. 아무것도 없는 상태가 No Dependency이다.)
    //  -> componentDidMount or componentDidUpdate
    //
    // Case 2: Dependency
    //  -> componentDidMount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // componentWillUnMount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
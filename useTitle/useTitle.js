export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // Keep in mind the 'dependency'!
  useEffect(updateTitle, [title]);

  // Returns setTitle to update title
  return setTitle;
};

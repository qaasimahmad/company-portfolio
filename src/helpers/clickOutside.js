export default function clickOutside(menuRef, setOpen) {
  return () => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
      setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  };
}

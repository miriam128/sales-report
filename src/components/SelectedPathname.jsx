export default function selectedPathname(currentpath, pathname, text) {
  const CURRENTPATH = window.location.pathname;
  return (
    <>
      {currentpath == pathname ? (
        <span style={{ color: "#E443A3", textDecoration: "underline" }}>
          {text}
        </span>
      ) : (
        <span style={{ color: "#000000" }}>{text}</span>
      )}
    </>
  );
}

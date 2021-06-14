export default function Highlight(props) {
  return (
    <>
      <span>{props.text}</span>
      <style jsx>{`
        span {
          background: yellow;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

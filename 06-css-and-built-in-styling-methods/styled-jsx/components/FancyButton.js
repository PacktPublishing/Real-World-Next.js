export default function FancyButton(props) {
  return (
    <>
      <button className="button">{props.children}</button>
      <style jsx>{`
        .button {
          padding: 2em;
          border-radius: 2em;
          background: purple;
          color: white;
          font-size: bold;
          border: pink solid 2px;
        }
      `}</style>
    </>
  );
}

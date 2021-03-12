function Sign({ content, nickname, country }) {
  return (
    <div className="max-w-7xl rounded-xl shadow-xl bg-purple-50 p-7 mb-10">
      <p className="text-gray-700"> {content} </p>
      <hr className="mt-3 mb-3" />
      <div>
        <div className="text-gray-500">
          Written by {nickname}
          {country && <span> from {country}</span>}
        </div>
      </div>
    </div>
  );
}

export default Sign;

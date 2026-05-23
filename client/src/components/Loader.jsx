function Loader() {

  return (
    <div className="animate-pulse grid md:grid-cols-2 gap-6">

      {[1,2,3,4].map((i) => (

        <div
          key={i}
          className="h-48 bg-white/5 rounded-3xl"
        />

      ))}

    </div>
  );
}

export default Loader;
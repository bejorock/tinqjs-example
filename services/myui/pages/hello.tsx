export default function HelloPage() {
  return (
    <div>
      <h1>Hello world 10 tens</h1>
      <h3>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();

            fetch("/api/hello")
              .then((r) => r.json())
              .then((r) => console.log(r))
              .catch((err) => console.log(err));
          }}
        >
          Send Queue
        </a>
      </h3>
    </div>
  );
}

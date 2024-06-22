function Greet({ name }: { name?: string }) {
  return <div>Hello {name ? name : "Katpara"}</div>;
}

export default Greet;

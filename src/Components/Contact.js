const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-4 p-4">Contact Page</h1>
      <input className="p-2 m-2 border border-black" type="text" placeholder="name"/>
      <input className="p-2 m-2 border border-black" placeholder="description"/>
      <button className="p-2 m-2 border border-black">Submit</button>
    </div>
  );
}

export default Contact;

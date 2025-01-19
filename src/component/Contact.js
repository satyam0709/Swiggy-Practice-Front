const Contact = () => {
  return (
    <div className="flex m-5 p-5">
      <h1 className="font-bold m-4 p-4 text-3xl flex justify-center">Contact Us</h1>
      <form>
       <input type="text" placeholder="Name" className="p-2 m-2 flex border border-black"
       />
       <input type="text" placeholder="Email-Id" className="p-2 m-2 flex border border-black"
       />
       <input type="text" placeholder="Message...." className="p-2 m-2 flex border border-black"
       />
       <button className="p-2 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl">Submit</button>
      </form>
     </div>
  );
};

export default Contact;
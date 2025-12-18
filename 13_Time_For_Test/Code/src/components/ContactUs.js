const ContactUs = ()=>{
    return (
        <div className="px-5 max-w-4xl mx-auto my-10">
            <h1 className="text-center">This is Contact Us</h1>
            <form className="max-w-xl mx-auto mt-5">
                <input className="border border-gray-400 mr-3 p-2" type="text" placeholder="Name" />
                <input className="border border-gray-400 mr-3 p-2" type="text" placeholder="Message" />
                <button className="border border-gray-400 mr-3 p-2">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs
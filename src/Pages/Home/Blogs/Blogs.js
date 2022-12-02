import React from 'react';

const Blogs = () => {

    
    return (
        <div className="card card-compact grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center ml-36">
            <div className="card-body">
                <h2 className="card-title">Difference between SOL and NoSQL ?</h2>
                <h3 className='text-sm font-bold text-success'>Answer:-</h3>
                <ul>
                    <li>Difference between SOL and NoSQL</li>
                    <li>SQL databases have relations while NoSQL databases don’t have any relations.</li>
                    <li>SQL databases consist of tables whereas NoSQL databases have collections and documents.</li>
                    <li>SQL databases have multiple tables while in NoSql databases, the data is shrunk into just a few collections.</li>
                    <li>SQL databases are vertically scalable but NoSQL databases are both vertically and horizontally scalable.</li>
                    <li>SQL databases can have limitations on no. of queries/sec whereas NoSQL databases don’t.Difference between SOL and NoSQL</li>
                </ul>
            </div>
            <div className="card-body">
                <h2 className="card-title">What is JWT and how does it work ?</h2>
                <h3 className='text-sm font-bold text-success'>Answer:-</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.<br/>
                How JWT Works<br/>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
            <div className="card-body">
                <h2 className="card-title">What is the difference between javascript and NodeJs ?</h2>
                <h3 className='text-sm font-bold text-success'>Answer:-</h3>
                <p>JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment.</p>

            </div>
            <div className="card-body">
                <h2 className="card-title">How does NodeJs handle multiple requests at the same timeDifference between SOL and NoSQL ?</h2>
                <h3 className='text-sm font-bold text-success'>Answer:-</h3>
                <p>I have a Node.js app and noticed that when I madke 2 requests to my Node Api at the same time, they appear to be queued. I.e the time for the second request is the time for the first request plus the time for the second request (if I just fired that request on its own).</p>

            </div>
        </div>
    );
};

export default Blogs;
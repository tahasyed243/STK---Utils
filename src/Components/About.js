import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: "white"
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color == "black") {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: "rgba(43, 48, 53)",
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: "white",
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#212529' : 'white'
    }

    return (
        // <div className='container' data-bs-theme="dark" >
        <div className='container' style={myStyle}>
            <h1 className='my-4'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is <strong>TextUtils</strong>?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a simple and powerful web tool that helps you format, analyze, and clean your text easily. You can convert text to uppercase or lowercase, remove extra spaces, count words and characters, and much more — all in one place.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How do I use <strong>TextUtils</strong>?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Just type or paste your text in the box above, and then click any of the available buttons to perform actions like converting to uppercase, lowercase, or clearing text. You can also see real-time statistics such as word count, character count, and estimated reading time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why should I use <strong>TextUtils</strong>?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is fast, free, and works entirely in your browser — no data is uploaded to any server. It’s perfect for students, developers, writers, or anyone who needs quick text formatting without installing extra software.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import React from 'react';
import './Contact.css';
import GoogleMapReact from 'google-map-react';

const Contact = () => {
    const defaultProps = {
        center: {
            lat: 10.766682,
            lng: 106.691391
        },
        zoom: 11
    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
        <div class="row">
            <div class="col-6-app">
                <div class="container">

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">VietNam</option>
                            <option value="canada">Thailand</option>
                            <option value="usa">USA</option>
                        </select>

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 200 }}></textarea>

                        <input type="button" value="Submit" />

                </div>
            </div>
            <div class="col-6-app">
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBjN_H2QBTDyWBqUjfMZTzSYUy53jsenZ4' }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text={'Kreyser Avrora'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default Contact;


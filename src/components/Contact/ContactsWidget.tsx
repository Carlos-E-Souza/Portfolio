import React, { FunctionComponent } from "react"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { SiGmail } from "react-icons/si"

import "./ContactsWidget.css"

interface ContactsWidgetProps {}

const ContactsWidget: FunctionComponent<ContactsWidgetProps> = () => {
    return (
        <div className="contactsWidget">
            <nav className="contactsNavBar">
                <a
                    className="contactsLink"
                    href="https://github.com/Carlos-E-Souza">
                    <FiGithub className="icon" />
                </a>
                <a
                    className="contactsLink"
                    href="https://www.linkedin.com/in/carlos-e-souza2653/">
                    <FiLinkedin className="icon" />
                </a>
                <a className="contactsLink" href="https://twitter.com/kadu_sz">
                    <FiTwitter className="icon" />
                </a>
                <a
                    className="contactsLink"
                    href="mailto:carlos.e.souza2653@gmail.com">
                    <SiGmail className="icon" />
                </a>
            </nav>
            <span className="line"></span>
        </div>
    )
}

export default ContactsWidget

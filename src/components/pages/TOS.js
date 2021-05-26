import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';

import Parker from '../../assets/images/parker.jpg';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


class TOS extends Component {

    state = { width: 0, height: 0 };
    updateWindowDimensions = this.updateWindowDimensions.bind(this);

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        const height = document.getElementById('page').clientHeight + 200;
        console.log('H: ' + height);
        console.log('SH: ' + this.state.height);
        if (height > this.state.height) {
            if ((height - this.state.height) < 25) {
                document.getElementById('footer').style.position = 'fixed';
            } else {
                document.getElementById('footer').style.position = 'unset';
            }
        } else {
            document.getElementById('footer').style.position = 'fixed';
        }
    }

    render() {
        return (
            <DocumentTitle title='Parker Smith - TOD'>
            <div className="page" id="page">
                    <Container>
                        <div className="pageTitle img">
                            <h1>Terms of Service</h1> 
                        </div>
                        <div className="aboutText">
                        <div class="termsp">
                        <p>You asked me, Parker Smith to do a project for you. This is our Agreement for this project:<br /><br /><br />
                        <strong>What I agree to do:</strong><br /><br />
                        1. Scope of Work. I will do what is assigned. within the timeline I specify after I have let you know I am starting and 50% of the payment from you:<br /><br />
                        2. Final Files. I will deliver to you, via discord hyper link, within 2 days after you approve the final design(s), digital files containing the final design(s), in the following format:<br /><br />
                        Zip File with all artifactions meant to be uploaded to the public_html directory. <br /><br />
                        <strong>What I promise you:</strong><br /><br />
                        3. Original Work/Conflicts/Confidentiality. I promise that, except for anything that you gave me to incorporate into the design(s): (a) my work will be original and will not be copied in whole or in part from any other work; (b) I own the rights that I am giving you under this Agreement, or I have secured such rights to any third-party content incorporated into my final design(s); and (c) my work does not violate the patent, copyright, trade secret or other property right of any person, firm or entity. I promise that this Agreement does not conflict with any other contract, agreement or understanding to which I am a party. Finally, I promise that I’ll hold and maintain in strict confidence any confidential information that you provide me (such as proprietary technical or business information), and I will not disclose such information to any third party except as may be required by a court or governmental authority. <br /><br />
                        4. 3 revisions. I promise that I will provide 3 revision rounds. Each revision round you are promised 10 revisions to the product at that time. After the 3 rounds you will be required to pay $10 (U.S. Dollars) per hour spent on revisions.<br /><br />
                        <strong>What you promise me</strong><br /><br />
                        5. Pay Me For My Work. You promise to pay me the total sum (“Fee”) in two payments. 50% of the Fee will be due when you and I sign this Agreement and before I begin. The remaining 50% of the Fee plus $10 (U.S. Dollars) per extra revision hour will be due immediately before I send you final files containing the final design(s) you approved. Payment will be made using Paypal. If you ask me to use any third-party content (such as stock photos) in the design(s), you promise to pay me the actual cost of licensing that third-party content for use in the design(s). You agree that until you pay me in full, you will not acquire the rights or license to use or transfer ownership of any design(s) that I create for you under this Agreement. <br /><br />
                        6. Pay Me For Extra Work. I agree that the Fee you owe me will cover in full all of the work listed in paragraph 1 of this Agreement. You agree that if you ask me to make changes or do other work for you that is not covered by this Agreement, you’ll pay me an hourly rate of $10 per hour and this payment will be in addition to all other amounts you owe me under this Agreement. You also agree that if you ask me to do work outside the scope of this Agreement, I may have extra time to send you the final files for the design(s). <br /><br />
                        7. You Have Rights To The Client Content. You promise that: (a) You own the rights to use anything you give me (“Client Content”); and (b) using such Client Content does not violate the patent, copyright, trade secret or other property right of any person, firm or entity. You grant me a nonexclusive, nontransferable license to use, reproduce, modify, display and publish the Client Content solely in connection with my work for you under this Agreement and my limited promotional uses as allowed by this Agreement. You also affirm and represent that this Agreement does not conflict with any other contract, agreement or understanding to which you are a party. <br /><br />
                        8. You Promise To Provide Feedback. You agree that I cannot send you final files unless you give me timely feedback and approve the final proofs I’ll send you. You agree to provide timely feedback so that I can understand your concerns, objections or corrections to the design(s). I agree to listen to your feedback and make changes to the design(s) in response to your feedback. You promise not to unreasonably withhold acceptance of the final design(s). Finally, you agree that my work on this project will be complete and the Agreement will end after I deliver to you final files containing the final design(s) that you’ve approved. <br /><br />
                        <strong>What rights each of us will have:</strong><br /><br />
                        9. Rights Before You Pay Me In Full. You understand and agree that until you pay me in full, I own full rights to each and every original design I create for you under this Agreement. If you don’t pay me in full, you agree that I can complete, exhibit, use and sell the design(s) at my sole and absolute discretion. You also agree that I own all of the concepts created before you select the final design(s). <br /><br />
                        10. Rights After You Pay Me In Full. I understand and agree that after you pay me in full, you will own rights (as defined in this Agreement) to the final design(s) that you approve and I create for you. You understand and agree that I own all of the concepts/preliminary designs created before you select the final design(s), except for elements in those concepts that are incorporated into the final design(s) that I deliver to you. You will receive rights for the final design(s) only. You agree that I will retain the right to use the final design(s) and all preliminary designs in design competitions, publications on design, educational purposes and in marketing my design business. You will be solely responsible to make sure that the design(s) I create for you will be available for use in commerce and protectable under trademark law. 10. Right To Make Changes. I agree that after you pay me in full, you may make any changes or additions to the design(s) I create for you under this Agreement, which you in your discretion may consider necessary, and you may engage others to make any such changes or additions, without further payments to me. You agree that if you ask me to make changes or additions to the design(s) after you approve the final files, you and I will negotiate a separate additional payment for my time to make such changes. <br /><br />
                        If you want to purchase a right that’s not listed in this paragraph, you and I will need to negotiate a separate license for such additional rights, and you’ll pay me a separate fee.<br /><br />
                        <strong>Miscellaneous terms</strong><br /><br />
                        13. Entire Agreement. This Agreement constitutes the complete and exclusive agreement between you and I concerning the work on this project, and it supersedes all other prior agreements, proposals, and representations, whether stated orally or in writing. We can modify this agreement in writing, if both you and I sign that modification. <br /><br />
                        14. I Am An Independent Contractor. You agree that I am an independent contractor and not your employee. Although you will provide general direction to me, I will determine, in my sole discretion, the manner and ways in which I will create the design(s) for you. The work that I create for you under this Agreement will not be deemed a “work-for-hire”, as that term is defined under U.S. Copyright Law. Whatever rights I grant you are contained in this Agreement. <br /><br />
                        By agreeing to this agreement, you and I agree: (a) to all of the terms and conditions of this Agreement and (b) that we have the full authority to enter into this Agreement. </p>
                        <h1>LAST UPDATED: 5th OF APRIL, 2021</h1>
                        </div>

                        </div>
                    </Container>
            </div>
            </DocumentTitle>
        );
    };
}

export default TOS;
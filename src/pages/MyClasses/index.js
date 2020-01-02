import React from 'react'
import Layout from '../../layout'
import Video from '../../components/Video'

import {
    usersClassesLevelListByPhone
} from '../../services/UsersClassesByLevel'

export default class MyClasses extends React.Component {

    /**
     * Constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            myClasses: []
        }
    }

    /**
    * Component did mount
    */
    componentDidMount() {
        this.setState({ loading: true })
        let phoneNumber = localStorage.getItem('phoneNumber');
        let classes_id = this.props.match.params.classes_id;
        let id = this.props.match.params.id;

        usersClassesLevelListByPhone(phoneNumber).then(response => {
            let data = response.data[0].data;
            let myClasses = [];

            data.map((rows) => {
                console.log(rows)

                // if (rows.levels.id === id) {
                //     myClasses = rows.classes;
                // }
                // return myClasses;
            });
            
            this.setState({ loading: false, myClasses: [] })
        })
        .catch(function (err) {
            this.setState({ loading: false })
        });
    }

    /**
    * Component will unmount
    */
    componentWillUnmount() {
        this.setState({ loading: false })
    }

    /**
    * Get Classes By Level 
    */
    async usersClassesLevelListByPhone(phone) {
        try {
            return await usersClassesLevelListByPhone(phone);
        } catch (error) {
            if (error.response) {
                console.log('error api data: ', error.response.data);
            } else if (error.request) {
                console.log('error api request:', error.request)
            } else {
                console.log('error api message:', error.message);
            }
        }
    }

    render() {
        return (
            <Layout>
                <Video />
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic
                                country, in which roasted parts of sentences fly into your mouth.</p>
                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious
                                Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made
                                herself on the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
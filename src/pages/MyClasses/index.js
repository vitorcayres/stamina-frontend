import React from 'react'
import Layout from '../../layout'
import Loading from '../../components/Loading'
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
        let that = this;
        that.setState({ loading: true })
        let phoneNumber = localStorage.getItem('phoneNumber');
        let level_id = this.props.match.params.level_id;
        let id = this.props.match.params.id;

        usersClassesLevelListByPhone(phoneNumber).then(response => {

            console.log('user info: ', response.data)

            let data = [];

            response.data[0].data.map((rows) => {
                if (rows.levels.id === level_id) {
                    rows.classes.map((rows) => {
                        if (rows.id === id) {
                            data = rows;
                        }
                        return data;
                    })
                }
                return data;
            });
            
            console.log('classes info: ', data)

            that.setState({ loading: false, myClasses: data })
            
        }).catch(function (err) {
            that.setState({ loading: false })
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
        const { loading, myClasses } = this.state;

        return (
            <Layout>
                <Loading status={loading} />
                <Video rows={myClasses} />
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <h1 className="mb-3">{myClasses.name}</h1>
                                <h4 className="mb-4">{myClasses.personal_name}</h4>
                                <p>{myClasses.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
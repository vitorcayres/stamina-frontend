import React from 'react'
import Layout from '../../layout'
import Loading from '../../components/Loading'
import Class from '../../components/Class'

import {
    usersClassesLevelListByPhone
} from '../../services/UsersClassesByLevel'

export default class Classes extends React.Component {

    /**
     * Constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            id: null,
            classes: []
        }
    }

    /**
    * Component did mount
    */
    componentDidMount() {
        let phoneNumber = localStorage.getItem('phoneNumber');
        let id = this.props.match.params.id;
        this.setState({ loading: true, id: id })

        usersClassesLevelListByPhone(phoneNumber).then(response => {
            let data = response.data[0].data;
            let classes = [];

            data.map((rows) => {
                if (rows.levels.id === id) {
                    classes = rows.classes;
                }
                return classes;
            });
            
            this.setState({ loading: false, classes: classes })
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
        const { loading, id, classes } = this.state;
        
        return (
            <Layout>
                <Loading status={loading} />
                <div className="site-section" id="classes-section">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-md-8 section-heading">
                                <span className="subheading">Aulas Fitness</span>
                                <h2 className="heading mb-3">Aulas</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                {classes.map((rows, key) => (
                                    <Class key={key} id={id} rows={rows} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
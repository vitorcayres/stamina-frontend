import React from 'react'
import Layout from '../../layout'
import Loading from '../../components/Loading'
import {
    LevelBasic,
    LevelIntermediary,
    LevelAdvanced
} from '../../components/Levels'

import {
    usersClassesLevelListByPhone
} from '../../services/UsersClassesByLevel'

export default class Dashboard extends React.Component {

    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            loading: false,
            levels: []
        }
    }

    /**
     * Component did mount
     */
    componentDidMount() {
        this.setState({ loading: true })
        let phoneNumber = localStorage.getItem('phoneNumber');

        usersClassesLevelListByPhone(phoneNumber).then(response => {
            this.setState({ loading: false, levels: response.data[0].data })
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

    /**
     * Get levels by user
     * @param {array} data 
     */
    getLevels(data) {
        switch (data.name) {
            case 'BASIC': return <LevelBasic id={data.id} />;
            case 'INTERMEDIARY': return <LevelIntermediary id={data.id} />;
            case 'ADVANCED': return <LevelAdvanced id={data.id} />;
            default: return null;
        }
    }

    render() {
        const { loading, levels } = this.state;

        return (
            <Layout>
                <Loading status={loading} />
                <div className="site-section" id="services-section">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5 aos-init aos-animate" data-aos="fade-up">
                            <div className="col-md-8  section-heading">
                                <span className="subheading">Nossas Aulas</span>
                                <h2 className="heading mb-3">Níveis</h2>
                                <p>Veja abaixo os níveis das aulas que nos oferecemos a você:</p>
                            </div>
                        </div>
                        <div className="row">
                            {levels.map((rows, key) => (
                                <React.Fragment key={key}>
                                    {this.getLevels(rows.levels)}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
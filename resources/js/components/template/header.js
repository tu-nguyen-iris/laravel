import React from 'react';
import {connect} from 'react-redux'
import * as action from '../redux/action'

function Header(props) {
    const {data} = props;
    const handleDelete = (id) => {
        props.deleteBlog(id)
        props.fetchData();
    }
    if (typeof data == 'object') {
        const renderDate = data.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.created_at}</td>
                    <td>
                        <button onClick={() => {
                            handleDelete(item.id)
                        }} className='btn btn-primary'>Delete
                        </button>
                    </td>
                </tr>
            )
        });

        return (
            <main>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span
                                className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                    </div>
                </nav>


                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Create At</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderDate}
                    </tbody>
                </table>
            </main>
        )
    } else return <h2 style={{fontSize: '100px', fontWeight: "600"}}>Hello boy</h2>
        ;
}

const mapStateToProps = state => {
    return {
        data: state.blog.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(action.getListBlog())
        },
        deleteBlog: id => {
            dispatch(action.deleteBlog(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

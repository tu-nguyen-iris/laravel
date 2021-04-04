import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import * as action from '../redux/action'

function FormaddText(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [data, setData] = useState();
    useEffect(() => {
        props.fetchData()
        setData(props.data)
    }, []);
    const handlesUbmit = (e, form) => {
        e.preventDefault();
        axios.post("/api/v1/posts",
            {
                title,
                content
            }
        ).then(res => {
            props.fetchData()
            if (res.status == 200) {
                setTitle("");
                setContent("");
            }
        })
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }
    return (
        <div onSubmit={handlesUbmit} className='mt-5'>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChangeTitle} type="text" className="form-control" id="title"
                           value={title}
                           placeholder="Enter title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Password</label>
                    <textarea placeholder="Text the content" className='form-control' onChange={handleChangeContent}
                              value={content}
                              id='content'> </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(action.getListBlog())
        }
    }
}
const mapStateToProps = state => {
    return {
        data: state.blog.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormaddText)

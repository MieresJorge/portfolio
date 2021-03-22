import Layout from '../components/Layout'
import {contacto} from '../public/profile'

const PostCard = ({post}) => (
    <div className="col-md-4">
        <div className="card ">
            <div className="overflow">
                <img src={post.imgurl} className="card-img-top"/>
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.contenido}</p>
            </div>
        </div>
    </div>
)

const blog = () => (
    <Layout footer={false}>
        <div className="row">
        {
            contacto.map((post,i) =>(
                <PostCard post={post} key={i}/>
            ))
        }
        </div>
    </Layout>
)

export default blog
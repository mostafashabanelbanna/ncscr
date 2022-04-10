
const ListItemWF = (props)=>{
    return(<>
        <div className='d-flex col-lg-4 col-md-6 col-12 my-2' key={props.key}>
        {/* <a href={props.link}  className=' text-dark text-decoration-none' style={{zIndex:1000 , cursor:'pointer'}}> */}
            <div className='col-4 p-1'>
                <img className='w-100 rounded-3' style={{height:`${props.imgHeight}px`}} src={props.imgPath} />
            </div>
            <div className='col-8 p-3'>
                <div> {props.title} .</div>
                {/* <div> {props.desc}</div> */}
            </div>
            
        {/* </a> */}
        </div>
    </>)
}

export default ListItemWF;
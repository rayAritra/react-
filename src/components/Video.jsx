import './Video.css';

function Video({ title, Channel = "aritra", views, time , verified, id}) {
    const bg = 'dark';
    

    const channelJSX = (
        <div className='channel'>
            {Channel} {verified && "✅"}
        </div>
    );

    return (
        <div className='container'>
            <div className='pic'>
                <img src={`https://picsum.photos/id/${id}/160/90`} alt="placeholder" />
            </div>
            <div className='title'>{title}</div>
            {channelJSX}
            <div className='views'>
                {views} views <span>.</span> {time}
            </div>
        </div>
    );
}

function Thumb() {
    return (
        <div>thumb</div>
    );
}

export { Video, Thumb };

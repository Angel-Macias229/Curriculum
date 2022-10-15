<>
<header className="header">
<img src={logo} className="Mind-logo"/>
</header>
<br/>

<h1 className="username">{data.username}</h1>
<br/>

<h2 className='hr'>// PROFILE</h2>
                    <p>{data.profile}</p>

<h2 className='hr'>// EXPERIENCE</h2>
<h2 className='subtitle'>{data.company}</h2>
<h3>{data.position}</h3>
<h3>Duration: {data.duration}</h3>
<p>{data.experience}</p>

<h2 className='hr'>// SPECIFIC TECHNOLOGIES AND PROFICIENCY LEVEL</h2>
<h3 className='subtitle'>- Programming languages</h3>
<p className='subtitle'>{data.langTime}</p>
<h4>{data.languages}</h4>
<h3 className='subtitle'>- Databases</h3>
<p className='subtitle'>{data.dbTime}</p>
<h4>{data.databases}</h4>
<h3 className='subtitle'>- Development tools</h3>
<p className='subtitle'>{data.devtTime}</p>
<h4>{data.devtools}</h4>

<h2 className='hr'>// DEGREE</h2>
<p>{data.degrees}</p>

</>
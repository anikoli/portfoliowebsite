import './projectLink.css';

function ProjectLink({name, imgSrc, link}) {
    return (
        <a className="projectPanel" href={link} target='_blank' rel='noreferrer'>
            <img src={imgSrc} alt={name} className="projectImage"/>
            <div className="projectTitle">{name}</div>
        </a>
    );
}

export default ProjectLink;
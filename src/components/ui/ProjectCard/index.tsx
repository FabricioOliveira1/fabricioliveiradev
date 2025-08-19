import styled from "styled-components";
import arrowLink from "../../../assets/arrow-link.png";
import Tags from "../../ui/Tags";

interface ProjectCardProps {
  id: number;
  name: string;
  pageLink: string;
  backImage: string;
  readMeLink: string;
  languages: string[];
}

const StyledProjectCard = styled.div`
  .cards {
    border-radius: 0 0 5px 5px;
    width: 30rem;
    background-color: ${props => props.theme.colors.primaryColor}; 
    margin-bottom: 1.5rem;
    overflow: hidden;
    transition: ease-in-out transform 0.09s, ease-in-out height 0.09s 0.15s, ease-in-out background-color 0.09s 0.15s;
  }
    .cardContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap; 
  }

  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .barContainer {
    border-radius: 0 0 5px 5px;
    background-color: ${props => props.theme.colors.primaryColor};
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .cardButton {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondaryColor};
    border-radius: 20px;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
  }
  .cardTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    justify-content: center;
  }
  .tagsContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`

const ProjectCard = ({id, name, pageLink, backImage, readMeLink, languages }: ProjectCardProps) => {
  return (
    <StyledProjectCard key={id} className='personalProjects'>

      <div className='cardContainer'>
        <div className='cards'>
          <a href={pageLink} target="_blank">
            <img className='image' alt="Logo do Hora Certa Med" src={`/images/RepoImages/${backImage}`} />
          </a>
          <div className='barContainer'>

            <div className='cardTitle'>
              <h4>{name}</h4>
              <div className='tagsContainer'>
                {languages.map((language, index) => (
                  <Tags key={index} currentTag={language} />
                ))}
              </div>
            </div>

            <a className='cardButton' href={readMeLink} target="_blank">
              <p>Sobre</p>
              <img src={arrowLink} alt='Imagem de seta para seguir o link' width="25" height="25" />
            </a>

          </div>
        </div>
      </div>

    </StyledProjectCard>
  )
}

export default ProjectCard;
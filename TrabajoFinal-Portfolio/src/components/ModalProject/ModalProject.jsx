import React from 'react'
import styles from './ModalProject.module.css'

export function ModalProject () {
  const ProjectInfo = [
    {
      id: 1,
      images: ['./src/components/Assets/Project1.png', './src/components/Assets/Project2.png', './src/components/Assets/Project3.png'],
      title: 'Nintendo OOH Experience',
      type: 'UI - Branding',
      members: 'Isabella Barona, Andrés Narvaez',
      designTools: {
        Figma: true,
        Illustrator: true,
        Photoshop: false,
        AfterEffects: false,
        PremierePro: false
      },
      codingTools: {
        Github: true,
        JS: true,
        HTML: true,
        CSS: true,
        Node: true
      },
      description: 'This project looks forward to create an interactive prototype of an Out-Of-Home experience. It is a gaming experience with the goal of catching leads for Nintendo.'
    }
  ]

  const logos = {
    Figma: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png',
    Illustrator: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
    Photoshop: 'https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo.png',
    AfterEffects: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png',
    PremierePro: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png',
    Github: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png',
    JS: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    HTML: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
    CSS: 'https://icons-for-free.com/download-icon-css3-1331550887274886564_512.png',
    Node: 'https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png'
  }

  const designTools = ProjectInfo[0].designTools
  const designToolLogos = Object.keys(designTools)
    .filter((tool) => designTools[tool])
    .map((tool) => logos[tool])

  const codingTools = ProjectInfo[0].codingTools
  const codingToolLogos = Object.keys(codingTools)
    .filter((tool) => codingTools[tool])
    .map((tool) => logos[tool])

  return (
    <div>
      <Project
        ProjectInfo={ProjectInfo}
        designToolLogos={designToolLogos}
        codingToolLogos={codingToolLogos}
      />
    </div>
  )
}

export function Project ({ ProjectInfo, designToolLogos, codingToolLogos }) {
  const { id, images, title, type, members, description } = ProjectInfo[0]

  return (
    <div key={id} className={styles.Modal}>
      <div className={styles.Header}>
        <div className={styles.HeaderBackground}>
          <ImageGallery images={images} />
        </div>
        <div className={styles.HeaderTitle}>
          <h1> {title} </h1>
          <h3> <i>{type}</i>  </h3>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Info}>
          <div className={styles.InfoDescription}>
            <h2> Made by: {members}</h2>
            <p> {description}</p>
          </div>

          <div className={styles.InfoTools}>
            <h2>Tools</h2>

            <div className={styles.ToolLogos}>
              {designToolLogos.map((tool, index) => (
                <img
                  key={`designTool-${index}`}
                  src={tool}
                  alt='Design Tool'
                  className={styles.ToolLogo}
                />
              ))}
            </div>
            <div>
              {codingToolLogos.map((tool, index) => (
                <img
                  key={`codingTool-${index}`}
                  src={tool}
                  alt='Coding Tool'
                  className={styles.ToolLogo}
                />
              ))}
            </div>
          </div>

        </div>

        <div className={styles.ButtonDiv}>
          <button>Go back</button>
          <button>Go to Behance</button>
        </div>
      </div>
    </div>
  )
}

function ImageGallery ({ images }) {
  return (
    <div className={styles.BackgroundImages}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  )
}

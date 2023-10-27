import React, { useState } from 'react'
import styles from './ServicesSlider.module.css'

export function ServicesSlider () {
  const items = [
    {
      id: 1,
      text: 'UX Design',
      icon: './src/components/Assets/IconUX.svg',
      iconWhite: './src/components/Assets/IconWhiteUX.svg'
    },
    {
      id: 2,
      text: 'UI Design',
      icon: './src/components/Assets/IconUI.svg',
      iconWhite: './src/components/Assets/IconWhiteUI.svg'
    },
    {
      id: 3,
      text: 'Frontend',
      icon: './src/components/Assets/IconFrontend.svg',
      iconWhite: './src/components/Assets/IconWhiteFrontend.svg'
    },
    {
      id: 4,
      text: 'Branding',
      icon: './src/components/Assets/IconBranding.svg',
      iconWhite: './src/components/Assets/IconWhiteBranding.svg'
    },
    {
      id: 5,
      text: 'Consultancy',
      icon: './src/components/Assets/IconConsultancy.svg',
      iconWhite: './src/components/Assets/IconWhiteConsultancy.svg'
    }
  ]

  return (
    <div>
      <Menu menu={items} />
    </div>
  )
}

export function Menu ({ menu }) {
  return (
    <nav>
      <ul className={styles.Menu}>
        {
            menu.map((item) => {
              return <Service key={item.id} item={item} />
            })
        }
      </ul>
    </nav>
  )
}

function Service ({ item }) {
  const [showList, setShowList] = useState(false)
  const { id, text, icon, iconWhite } = item

  const toggleShowList = () => setShowList(true)

  const toggleState = () => setShowList((prevState) => !prevState)

  const hoverStyle = {
    fontWeight: '600',
    fontFamily: 'Montserrat',

    color: 'white',
    backgroundColor: showList ? '#FF7D00' : '#5332D8',

    padding: '2vh',
    marginTop: showList ? '-4vw' : '0',

    width: '17vw',
    height: showList ? '21vw' : '17vw',

    borderRadius: '15px',

    cursor: 'pointer',

    transition: 'all 0.5s'
  }

  const hoverIconDiv = {
    backgroundColor: showList ? 'transparent' : 'white',

    width: '5.5vw',
    height: '5.5vw',
    margin: '6vh auto',

    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',

    transition: 'all 0.5s'
  }

  const hoverIcon = {
    width: showList ? '4.5vw' : '3vw',

    transition: 'all 0.5s'
  }

  return (
    <li key={id} style={hoverStyle} onMouseLeave={toggleState} onMouseEnter={toggleShowList}>
      <div style={hoverIconDiv}>
        <img style={hoverIcon} src={showList ? iconWhite : icon} />
      </div>
      <a> {text} </a>
    </li>
  )
}

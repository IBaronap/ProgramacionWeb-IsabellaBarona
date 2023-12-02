import React from "react"
import { Header, Footer, Cabezote, Card1, Card2, Card3 } from "../../../components"
import styles from "./UserExperiencePage.module.css"
import { useNavigate } from 'react-router-dom'

export function UserExperiencePage (){

    const navigate = useNavigate()

    const items = {
        item1: 'User research',
        item2: 'Interaction design',
        item3: 'Information architecture',
        item4: 'Usability testing',
        item5: 'Data analytics'
    }

    return (
        <>
            <Header/>
            <Cabezote type='UX' />
            <article className={styles.article}>
                <h2>UX Packages</h2>
                <div className={styles.cards}>
                    <Card1 items={items}/>
                    <Card2 items={items}/>
                    <Card3 items={items}/>
                </div>
                <p className={styles.paragraph}>
                    <a onClick={() => navigate('/contact')}>Contact us</a> for advice
                </p>
            </article>
            <Footer/>
        </>
    )
}
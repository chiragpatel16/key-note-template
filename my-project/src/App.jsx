import { useState } from 'react'
import Main from './componets/Main.jsx'
import SpeakersPage from './componets/Speaker.jsx'
import SponsorsPage from './componets/Sponsor.jsx'
import NewsletterSection from './componets/News.jsx'
import ConferenceSchedule from './componets/Info.jsx'
function App() {

  return (
    <>
        <Main/>
        <SpeakersPage/>
        <ConferenceSchedule/>
        <SponsorsPage/>
        <NewsletterSection/>
    </>
  )
}

export default App

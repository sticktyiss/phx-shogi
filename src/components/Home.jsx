import React from 'react'

const Home = () => {
  return (
    <main className='home'>
      <h1>Welcome to Phoenix Shogi</h1>
      <p className='disclaimer'>We are a developing group and will have updates to all facets of the group as the organization polishes through experience.</p>
      <div>
      <h2>Come Learn</h2>
      <p>Discover the ancient art of Shogi, a game that has enthralled strategists for centuries. Whether you're a seasoned player seeking new challenges or a curious beginner eager to learn, our club offers a vibrant community dedicated to the pursuit of Shogi mastery.</p>
      </div>
      <div>
        <h2>Meet Up With Us</h2>
        <p>We are still deciding on a permanent location at this time, but in the meantime please fill <a href='https://www.bit.ly/phxshogi' target='_blank'>this form</a> out so you can receive info regarding meetups. We currently meetup once a month.</p>
      </div>
    </main>
  )
}

export default Home
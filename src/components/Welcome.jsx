
import React from 'react'

const Welcome = () => {
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    console.log('>>>',email , name);

    return (
        <div>
            <figure class="quote" aria-label="You expect this pen to do one thing but it changed into something else. — Zach Saucier">
  <blockquote cite="" aria-hidden>
    <p class="colored-text">
      <span>Your email</span>
    </p>

    <div class="cut-text-container">
      <p class="cut-text">
        <span>Welcome!!</span>
        <span>{email}</span>
      </p>
    </div>

    <p class="colored-text second">
      <span>{name}</span>
    </p>
  </blockquote>

  <figcaption aria-hidden><cite>is registred </cite></figcaption>
</figure>
        </div>
    )
}

export default Welcome

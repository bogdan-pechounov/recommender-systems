import React from 'react'

function useModal() {
  let [active, setActive] = React.useState(false)
  let [content, setContent] = React.useState()

  function toggle() {
    setActive(!active)
    setContent('') //to stop video from playing
  }

  return { active, content, setContent, toggle }
}

export default useModal
